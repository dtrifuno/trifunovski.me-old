import _ from 'lodash'

import { BibliographyData, BibtexEntry, HTMLString } from '../../types'
import {
  parseAuthors,
  createCandidateLabel,
  renderText,
  indexToAlphaSuffix,
} from './utils'

export const processBibliography = (
  entries: BibtexEntry[]
): BibliographyData => {
  entries = entries ?? []
  const entriesWithCandidateLabels = entries.map(entry => ({
    ...entry,
    label: createCandidateLabel(entry),
  }))

  const labeledEntries = _.flatten(
    _.values(
      _.mapValues(_.groupBy(entriesWithCandidateLabels, 'label'), arr =>
        _.sortBy(arr, entry => [entry.entryTags.title]).map((entry, index) => {
          if (arr.length === 1) {
            return entry
          } else {
            return {
              ...entry,
              label: entry.label + indexToAlphaSuffix(index),
            }
          }
        })
      )
    )
  )

  const processedData = _.sortBy(labeledEntries, 'label').map(entry => ({
    label: entry.label,
    elem: createHtmlElem(entry),
    citationKey: entry.citationKey,
  }))
  return _.keyBy(processedData, 'label')
}

const createHtmlElem = (entry: BibtexEntry): HTMLString => {
  if (entry.entryType === 'article') {
    return createArticleHtmlElem(entry)
  } else if (entry.entryType === 'book') {
    return createBookHtmlElem(entry)
  } else if (entry.entryType === 'incollection') {
    return createIncollectionHtmlElem(entry)
  }
  return createMiscHtmlElem(entry)
}

const createArticleHtmlElem = (entry: BibtexEntry): HTMLString => {
  const { journal, volume, year, number, pages, note } = entry.entryTags
  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      [
        renderText(journal),
        volume ? `<b>${volume}</b>` : undefined,
        year ? `(${year})` : undefined,
      ]
        .filter(Boolean)
        .join(' '),
      number ? `no. ${number}` : undefined,
      pages,
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createBookHtmlElem = (entry: BibtexEntry): HTMLString => {
  const {
    edition,
    series,
    volume,
    publisher,
    address,
    month,
    year,
    note,
  } = entry.entryTags
  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      edition ? `${edition} ed.` : undefined,
      renderText(series),
      volume ? `vol. ${volume}` : undefined,
      renderText(publisher),
      renderText(address),
      [month, year].filter(Boolean).join(' '),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createMiscHtmlElem = (entry: BibtexEntry): HTMLString => {
  const { howpublished, month, year, note } = entry.entryTags
  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      renderText(howpublished),
      [month, year].filter(Boolean).join(' '),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createIncollectionHtmlElem = (entry: BibtexEntry): HTMLString => {
  return ''
}

const createAuthorsHtml = (entry: BibtexEntry): HTMLString => {
  const authorNames = parseAuthors(entry.entryTags.author).map(author =>
    [author.firstName, author.lastName].filter(Boolean).join(' ')
  )
  if (authorNames.length === 1) {
    return authorNames[0]
  } else if (authorNames.length === 2) {
    return `${authorNames[0]} and ${authorNames[1]}`
  } else {
    return (
      authorNames.slice(0, -1).join(', ') + `, and ${authorNames.slice(-1)[0]}`
    )
  }
}

const createTitleHtml = (entry: BibtexEntry): HTMLString => {
  const { url, title } = entry.entryTags

  let result = renderText(title) as string
  if (url) {
    return `<a href="${url}">${result}</a>`
  }
  return result
}
