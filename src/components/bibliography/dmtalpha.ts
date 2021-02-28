import _ from 'lodash'

import { HtmlString } from '../../types'
import * as bibtypes from './types'

import {
  parsePeople,
  createCandidateLabel,
  renderText,
  indexToAlphaSuffix,
} from './utils'

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

const createHtmlElem = (entry: bibtypes.BibtexEntry): HtmlString => {
  const typeToCreateHtmlElemFunc = {
    article: createArticleHtmlElem,
    book: createBookHtmlElem,
    booklet: createBookletHtmlElem,
    inbook: createInBookHtmlElem,
    incollection: createInCollectionHtmlElem,
    inproceedings: createInProceedingsHtmlElem,
    manual: createManualHtmlElem,
    mastersthesis: createThesisHtmlElem,
    misc: createMiscHtmlElem,
    phdthesis: createThesisHtmlElem,
    proceedings: createProceedingsHtmlElem,
    techreport: createTechReportHtmlElem,
    unpublished: createUnpublishedHtmlElem,
  }
  const createHtmlElemFunc = typeToCreateHtmlElemFunc[entry.entryType]
  return createHtmlElemFunc(entry as any)
}

const createArticleHtmlElem = (entry: bibtypes.Article): HtmlString => {
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
      renderText(pages),
      renderText(note),
    ]
      .filter(Boolean)
      .join(', ') + '.'
  )
}

const createBookHtmlElem = (entry: bibtypes.Book): HtmlString => {
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

const createBookletHtmlElem = (entry: bibtypes.Booklet): HtmlString => {}

const createInBookHtmlElem = (entry: bibtypes.InBook): HtmlString => {}

const createInCollectionHtmlElem = (
  entry: bibtypes.InCollection
): HtmlString => {}

const createInProceedingsHtmlElem = (
  entry: bibtypes.InProceedings
): HtmlString => {}

const createManualHtmlElem = (entry: bibtypes.Manual): HtmlString => {}

const createThesisHtmlElem = (
  entry: bibtypes.MastersThesis | bibtypes.PhdThesis
): HtmlString => {}

const createMiscHtmlElem = (entry: bibtypes.Misc): HtmlString => {
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

const createProceedingsHtmlElem = (
  entry: bibtypes.Proceedings
): HtmlString => {}

const createTechReportHtmlElem = (entry: bibtypes.TechReport): HtmlString => {}

const createUnpublishedHtmlElem = (
  entry: bibtypes.Unpublished
): HtmlString => {}

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
): HtmlString => {
  const editors = parsePeople(entry.entryTags.editor)
  const edSuffix = `(ed${editors.length > 1 ? 's' : ''})`
  return `${createPeopleString(editors)} ${edSuffix}`
}

const createAuthorsHtml = (
  entry: bibtypes.BibtexEntryWithAuthor
): HtmlString => {
  const authors = parsePeople(entry.entryTags.author)
  return createPeopleString(authors)
}

const createTitleHtml = (entry: bibtypes.BibtexEntry): HtmlString => {
  const { url, title } = entry.entryTags

  let result = `<span class="italic">${renderText(title)}</span>` as string
  if (url) {
    return `<a href="${url}">${result}</a>`
  }
  return result
}
