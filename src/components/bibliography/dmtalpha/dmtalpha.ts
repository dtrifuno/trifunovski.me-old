import _ from 'lodash'

import { HTMLString } from '../../../types'
import * as bibtypes from '../types'
import { Person } from '../types'

import {
  parsePeople,
  createCandidateLabel,
  renderText,
  indexToAlphaSuffix,
} from '../utils'

import {
  renderChapterOrUndefined,
  renderDateOrUndefined,
  renderEditionOrUndefined,
  renderNumberOrUndefined,
  renderPagesOrUndefined,
  renderVolumeOrUndefined,
} from './renderEntryTag'

export const processBibliography = (
  entries: bibtypes.BibtexEntry[]
): bibtypes.BibliographyData => {
  entries = entries ?? []
  const entriesWithCandidateLabels = entries.map(entry => ({
    ...entry,
    label: createCandidateLabel(entry),
  }))

  const labeledEntries = _.flatten(
    _.values(
      _.mapValues(_.groupBy(entriesWithCandidateLabels, 'label'), arr =>
        _.sortBy(arr, entry => [entry.entryTags.title]).map((entry, index) => ({
          ...entry,
          label: `${entry.label}${
            arr.length > 1 ? indexToAlphaSuffix(index) : ''
          }`,
        }))
      )
    )
  )

  const processedData = _.sortBy(labeledEntries, 'label').map(entry => ({
    label: entry.label,
    elem: createHtmlElem(entry),
    citationKey: entry.citationKey,
  }))
  return _.keyBy(processedData, 'citationKey')
}

const createHtmlElem = (entry: bibtypes.BibtexEntry): HTMLString => {
  const typeToCreateHtmlElemFunc = {
    article: createArticleHtmlElem,
    book: createBookHtmlElem,
    booklet: createBookletHtmlElem,
    inbook: createInBookHtmlElem,
    incollection: createInCollectionHtmlElem,
    inproceedings: createInProceedingsHtmlElem,
    manual: createManualHtmlElem,
    mastersthesis: createMastersThesisHtmlElem,
    misc: createMiscHtmlElem,
    phdthesis: createPhdThesisHtmlElem,
    proceedings: createProceedingsHtmlElem,
    techreport: createTechReportHtmlElem,
    unpublished: createUnpublishedHtmlElem,
  }
  const createHtmlElemFunc = typeToCreateHtmlElemFunc[entry.entryType]
  return createHtmlElemFunc(entry as any)
}

const createArticleHtmlElem = (entry: bibtypes.Article): HTMLString => {
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
      renderNumberOrUndefined(number),
      renderText(pages),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createBookHtmlElem = (entry: bibtypes.Book): HTMLString => {
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
      bibtypes.entryHasAuthor(entry)
        ? createAuthorsHtml(entry)
        : createEditorsHtml(entry as bibtypes.BibtexEntryWithEditor),
      createTitleHtml(entry),
      renderEditionOrUndefined(edition),
      renderText(series),
      renderVolumeOrUndefined(volume),
      renderText(publisher),
      renderText(address),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createBookletHtmlElem = (entry: bibtypes.Booklet): HTMLString => {
  const { howpublished, address, month, year, note } = entry.entryTags
  return (
    [
      bibtypes.entryHasAuthor(entry) ? createAuthorsHtml(entry) : undefined,
      createTitleHtml(entry),
      renderText(howpublished),
      renderText(address),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createInBookHtmlElem = (entry: bibtypes.InBook): HTMLString => {
  const {
    volume,
    number,
    series,
    chapter,
    edition,
    publisher,
    address,
    pages,
    month,
    year,
    note,
  } = entry.entryTags

  return (
    [
      bibtypes.entryHasAuthor(entry)
        ? createAuthorsHtml(entry)
        : createEditorsHtml(entry as bibtypes.BibtexEntryWithEditor),
      createTitleHtml(entry),
      renderEditionOrUndefined(edition),
      renderText(series),
      renderVolumeOrUndefined(volume),
      renderNumberOrUndefined(number),
      renderChapterOrUndefined(chapter),
      renderPagesOrUndefined(pages),
      renderText(publisher),
      renderText(address),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createInCollectionHtmlElem = (
  entry: bibtypes.InCollection
): HTMLString => {
  const {
    booktitle,
    series,
    volume,
    publisher,
    address,
    edition,
    month,
    year,
    note,
    pages,
  } = entry.entryTags

  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      renderText(booktitle) +
        (bibtypes.entryHasEditor(entry) ? `(${createEditorsHtml(entry)})` : ''),
      renderText(series),
      renderVolumeOrUndefined(volume),
      renderText(publisher),
      renderText(address),
      renderEditionOrUndefined(edition),
      renderDateOrUndefined(month, year),
      renderText(note),
      renderPagesOrUndefined(pages),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createInProceedingsHtmlElem = (
  entry: bibtypes.InProceedings
): HTMLString => {
  const {
    booktitle,
    series,
    volume,
    publisher,
    address,
    organization,
    month,
    year,
    note,
    pages,
  } = entry.entryTags

  let booktitleString = undefined
  if (booktitle) {
    booktitleString = [
      renderText(booktitle),
      address ? `(${renderText(address)})` : undefined,
      bibtypes.entryHasEditor(entry)
        ? `(${createEditorsHtml(entry)})`
        : undefined,
    ]
      .filter(Boolean)
      .join(' ')
  }

  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      booktitleString,
      renderText(series),
      renderVolumeOrUndefined(volume),
      renderText(organization),
      renderText(publisher),
      renderDateOrUndefined(month, year),
      renderText(note),
      renderPagesOrUndefined(pages),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createManualHtmlElem = (entry: bibtypes.Manual): HTMLString => {
  const { organization, address, edition, month, year, note } = entry.entryTags
  return (
    [
      bibtypes.entryHasAuthor(entry) ? createAuthorsHtml(entry) : undefined,
      createTitleHtml(entry),
      renderText(organization),
      renderText(address),
      renderEditionOrUndefined(edition),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createMastersThesisHtmlElem = (
  entry: bibtypes.MastersThesis
): HTMLString => {
  const { school, address, month, year, note } = entry.entryTags
  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      `Master's thesis`,
      renderText(school),
      renderText(address),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createMiscHtmlElem = (entry: bibtypes.Misc): HTMLString => {
  const { howpublished, month, year, note } = entry.entryTags
  return (
    [
      bibtypes.entryHasAuthor(entry) ? createAuthorsHtml(entry) : undefined,
      entry.entryTags.title ? createTitleHtml(entry) : undefined,
      renderText(howpublished),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createPhdThesisHtmlElem = (entry: bibtypes.PhdThesis): HTMLString => {
  const { school, address, month, year, note } = entry.entryTags
  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      `Ph.D. thesis`,
      renderText(school),
      renderText(address),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createProceedingsHtmlElem = (entry: bibtypes.Proceedings): HTMLString => {
  const {
    series,
    volume,
    address,
    organization,
    publisher,
    month,
    year,
    note,
  } = entry.entryTags

  return (
    [
      bibtypes.entryHasEditor(entry) ? createEditorsHtml(entry) : undefined,
      createTitleHtml(entry),
      renderText(series),
      renderVolumeOrUndefined(volume),
      renderText(address),
      renderText(organization),
      renderText(publisher),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createTechReportHtmlElem = (entry: bibtypes.TechReport): HTMLString => {
  const { number, institution, address, month, year, note } = entry.entryTags
  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      number ? `Tech. Report ${number}` : undefined,
      renderText(institution),
      renderText(address),
      renderDateOrUndefined(month, year),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createUnpublishedHtmlElem = (entry: bibtypes.Unpublished): HTMLString => {
  const { note, month, year } = entry.entryTags
  return (
    [
      createAuthorsHtml(entry),
      createTitleHtml(entry),
      renderText(note),
      renderDateOrUndefined(month, year),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createPeopleString = (people: Person[]): string => {
  const names = people.map(author =>
    [author.firstName, author.lastName].filter(Boolean).join(' ')
  )

  if (names.length === 1) {
    return names[0]
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]}`
  } else {
    return names.slice(0, -1).join(', ') + `, and ${names.slice(-1)[0]}`
  }
}

const createEditorsHtml = (
  entry: bibtypes.BibtexEntryWithEditor
): HTMLString => {
  const editors = parsePeople(entry.entryTags.editor)
  const edSuffix = `(ed${editors.length > 1 ? 's' : ''})`
  return `${createPeopleString(editors)} ${edSuffix}`
}

const createAuthorsHtml = (
  entry: bibtypes.BibtexEntryWithAuthor
): HTMLString => {
  const authors = parsePeople(entry.entryTags.author)
  return createPeopleString(authors)
}

const createTitleHtml = (entry: bibtypes.BibtexEntry): HTMLString => {
  const { url, title } = entry.entryTags

  let result = `<span class="italic">${renderText(title)}</span>` as string
  if (url) {
    return `<a href="${url}">${result}</a>`
  }
  return result
}
