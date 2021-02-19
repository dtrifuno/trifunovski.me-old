import _ from 'lodash'
import katex from 'katex'
import { v4 as uuidv4 } from 'uuid'

import {
  BibtexEntry,
  BibliographyItem,
  BibliographyData,
  HTMLString,
} from '../../types'

interface Author {
  firstName?: string
  lastName: string
}

const parseAuthorName = (name: string): Author => {
  name = name.trim()

  const afterCommaSplit = name.split(/,/)
  if (afterCommaSplit.length === 2) {
    return {
      firstName: afterCommaSplit[1].trim(),
      lastName: afterCommaSplit[0].trim(),
    }
  } else if (afterCommaSplit.length > 2) {
    console.error(`Too many commas in name ${name}`)
  }

  const afterSpaceSplit = name.split(/ /)
  const numNames = afterSpaceSplit.length
  if (numNames === 1) {
    return {
      lastName: name,
    }
  }
  const firstName = afterSpaceSplit.slice(0, -1).join(' ')
  const lastName = afterSpaceSplit.slice(-1)[0]
  return {
    firstName,
    lastName,
  }
}

export const parseAuthors = (authors: string): Author[] =>
  authors.split(' and ').map(parseAuthorName)

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

export const createCandidateLabel = (entry: BibtexEntry): string => {
  const { year, author: authorString } = entry.entryTags
  const authors = authorString
    .split(' and ')
    .map(x => parseAuthorName(x.trim()))

  let initials
  if (authors.length === 1) {
    initials = extractLongInitial(authors[0])
  } else if (authors.length >= 5) {
    initials = authors.slice(0, 3).map(extractShortInitial).join('') + '+'
  } else {
    initials = authors.map(extractShortInitial).join('')
  }

  return `${initials}${year ? year.slice(-2) : ''}`
}

// TODO: Handle \url{}?
export const renderText = (text?: string): HTMLString | undefined => {
  if (!text) {
    return undefined
  }

  // render content between $s using KaTeX
  const katexElems: any = {}
  const textWithTaggedKatex = text
    .split(/((?<!\\)\$.*?\$(?!\\))/)
    .map(substring => {
      const matchLatex = substring.match(/^\$(.*)\$$/)
      if (matchLatex) {
        const uuid = 'katex-elem-' + uuidv4()
        katexElems[uuid] = katex.renderToString(matchLatex[1], {
          throwOnError: false,
        })
        return uuid
      }
      return substring
    })
    .join('')
    .replace(/\\\$/g, '$')

  // we won't change capitalization, so we can strip out unescaped brace pairs
  const textWithStrippedBraces = textWithTaggedKatex
    .split(/((?<!\\){.*?}(?!\\))/)
    .map(substring => {
      const matchBraces = substring.match(/^{(.*)}$/)
      return matchBraces ? matchBraces[0] : substring
    })
    .join('')
    .replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')

  let result = textWithStrippedBraces
  for (const [uuid, katexElem] of Object.entries(katexElems)) {
    result = result.replace(new RegExp(uuid, 'g'), katexElem as string)
  }
  return result
}

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
