import _ from 'lodash'
import katex from 'katex'
import { v4 as uuidv4 } from 'uuid'

import { HtmlString } from '../../types'

import {
  BibtexEntry,
  BibliographyItem,
  BibliographyData,
  entryHasAuthor,
  entryHasEditor,
} from './types'

interface Person {
  firstName?: string
  lastName: string
}

type Author = Person

/** Parses a name.
 * @param fullName - A string of the form "lastName1 lastName2 ..., firstName1 ..."
 */
const parsePerson = (fullName: string): Person => {
  fullName = fullName.trim()

  const afterCommaSplit = fullName.split(/,/)
  if (afterCommaSplit.length === 2) {
    return {
      firstName: afterCommaSplit[1].trim(),
      lastName: afterCommaSplit[0].trim(),
    }
  } else if (afterCommaSplit.length > 2) {
    console.error(`Too many commas in name ${fullName}`)
  }

  const afterSpaceSplit = fullName.split(/ /)
  const numNames = afterSpaceSplit.length
  if (numNames === 1) {
    return {
      lastName: fullName,
    }
  }
  const firstName = afterSpaceSplit.slice(0, -1).join(' ')
  const lastName = afterSpaceSplit.slice(-1)[0]
  return {
    firstName,
    lastName,
  }
}

/** Parse BibTeX author or editor string.
 */
export const parsePeople = (people: string): Person[] =>
  people.split(/\s*,?\s+and\s*,?\s+/).map(x => parsePerson(x.trim()))

const extractShortInitial = ({ lastName }: Author): string =>
  _.flatMap(lastName.split(/ /), x => x.split(/-/))
    .map(x => x[0])
    .join('')

const extractLongInitial = ({ lastName }: Author): string => {
  const shortInitial = extractShortInitial({ lastName })
  if (shortInitial.length > 1) {
    return shortInitial
  }
  return lastName.slice(0, 3)
}

const createCandidateLabelFromPeople = (people: Person[]): string => {
  if (people.length === 1) {
    return extractLongInitial(people[0])
  } else if (people.length >= 5) {
    return people.slice(0, 3).map(extractShortInitial).join('') + '+'
  } else {
    return people.map(extractShortInitial).join('')
  }
}

export const createCandidateLabel = (entry: BibtexEntry): string => {
  const { citationKey, entryType } = entry
  let initials = ''
  const { year } = entry.entryTags

  if (entryType !== 'proceedings' && entryHasAuthor(entry)) {
    const authors = parsePeople(entry.entryTags.author)
    initials = createCandidateLabelFromPeople(authors)
  } else if (
    ['proceedings', 'book', 'inbook'].includes(entryType) &&
    entryHasEditor(entry)
  ) {
    const editors = parsePeople(entry.entryTags.editor)
    initials = createCandidateLabelFromPeople(editors)
  } else {
    initials = citationKey.slice(0, 3)
  }
  return `${initials}${year ? year.slice(-2) : ''}`
}

export const renderText = (text?: string): HtmlString | undefined => {
  if (!text) {
    return undefined
  }

  // replace content between $$ with placeholders and render using KaTeX
  const uuidToElem: Record<string, HtmlString> = {}
  const textWithTaggedKatex = text
    .split(/((?<!\\)\$.*?\$(?!\\))/)
    .map(substring => {
      const matchLatex = substring.match(/^\$(.*)\$$/)
      if (matchLatex) {
        const uuid = 'katex-elem-' + uuidv4()
        uuidToElem[uuid] = katex.renderToString(matchLatex[1], {
          throwOnError: false,
        })
        return uuid
      }
      return substring
    })
    .join('')
    .replace(/\\\$/g, '$')

  // replace \url{} with placeholders and create corresponding anchor tags
  const textWithTagggedKatexAndUrls = textWithTaggedKatex
    .split(/(\\url\{.*?\})/)
    .map(substring => {
      const matchLatex = substring.match(/^\\url\{(.*?)\}$/)
      if (matchLatex) {
        console.log(substring)
        const uuid = 'url-elem-' + uuidv4()
        uuidToElem[
          uuid
        ] = `<a class="link" href="${matchLatex[1]}">${matchLatex[1]}</a>`
        return uuid
      }
      return substring
    })
    .join('')

  //
  const taggedTextAfterReplacements = textWithTagggedKatexAndUrls
    .replace(/\\'\{e\}/g, 'é')
    .replace(/.\\ /g, '.&thinsp;')
    .replace(/(?<!-)--(?!-)/g, '&ndash;')
    .replace(/(?<!-)---(?!-)/g, '&mdash;')

  // we don't change capitalization, so we can strip out extraneous brace pairs
  const textWithStrippedBraces = taggedTextAfterReplacements
    .split(/((?<!\\){.*?}(?!\\))/)
    .map(substring => {
      const matchBraces = substring.match(/^{(.*)}$/)
      return matchBraces ? matchBraces[1] : substring
    })
    .join('')
    .replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')

  // replace KaTeX and url placeholders with elems
  let result = textWithStrippedBraces
  for (const [uuid, elem] of Object.entries(uuidToElem)) {
    result = result.replace(new RegExp(uuid, 'g'), elem)
  }
  return result
}

/**
 * Encodes a number as a spreadsheet column name.
 * @param index - A nonnegative integer.
 * @returns A lowercase string representing the address of the `index`th column.
 * @example
 * indexToAlphaSuffix(0)   // returns 'a'
 * indexToAlphaSuffix(702) // returns 'aba'
 */
export const indexToAlphaSuffix = (index: number): string => {
  if (index < 26) {
    return String.fromCharCode(97 + index)
  }

  let result = ''
  let remainder
  while (index >= 26) {
    remainder = index % 26
    index = Math.trunc(index / 26)
    result = String.fromCharCode(97 + remainder) + result
  }
  if (index) {
    result = String.fromCharCode(96 + index) + result
  }
  return result
}
