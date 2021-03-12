export interface Person {
  firstName?: string
  lastName: string
}

/** The BibTeX label of an item. */
export type CitationKey = string

import { HTMLString } from '../../types'

export type BibliographyLabel = string

/** A processed bibliography entry. */
export type BibliographyItem = {
  label: BibliographyLabel
  citationKey: CitationKey
  elem: HTMLString
}

export type BibliographyData = Record<CitationKey, BibliographyItem | undefined>

/** A parsed BibTeX entry. */
export type BibtexEntry =
  | Article
  | Book
  | Booklet
  | InBook
  | InCollection
  | InProceedings
  | Manual
  | MastersThesis
  | Misc
  | PhdThesis
  | Proceedings
  | TechReport
  | Unpublished

export type BibtexEntryWithAuthor = BibtexEntry & {
  entryTags: { author: string }
}

export type BibtexEntryWithEditor = BibtexEntry & {
  entryTags: { editor: string }
}

export const entryHasAuthor = (
  entry: BibtexEntry
): entry is BibtexEntryWithAuthor => {
  return (entry as BibtexEntryWithAuthor).entryTags.author != undefined
}

export const entryHasEditor = (
  entry: BibtexEntry
): entry is BibtexEntryWithEditor => {
  return (entry as BibtexEntryWithEditor).entryTags.editor != undefined
}

/** A supported BibTeX entry type. */
export type BibtexEntryTypes = BibtexEntry['entryType']

/** An article from a journal or magazine. */
export type Article = {
  citationKey: CitationKey
  entryType: 'article'
  entryTags: {
    author: string
    title: string
    journal: string
    year: string
    volume?: string
    number?: string
    pages?: string
    month?: string
    url?: string
    note?: string
  }
}

/** A book with an explicit publisher. */
export type Book = {
  citationKey: CitationKey
  entryType: 'book'
  entryTags: ({ author: string } | { editor: string }) & {
    title: string
    publisher: string
    year: string
    author?: string
    editor?: string
    volume?: string
    number?: string
    series?: string
    address?: string
    edition?: string
    month?: string
    url?: string
    note?: string
  }
}

/** A work that is printed and bound, but without a named publisher or sponsoring institution. */
export type Booklet = {
  citationKey: CitationKey
  entryType: 'booklet'
  entryTags: {
    title: string
    author?: string
    howpublished?: string
    address?: string
    month?: string
    year?: string
    url?: string
    note?: string
  }
}

/** A part of a book, e.g., a chapter, section, or a range of pages. */
export type InBook = {
  citationKey: CitationKey
  entryType: 'inbook'
  entryTags: ({ author: string } | { editor: string }) &
    ({ chapter: string } | { pages: string }) & {
      title: string
      publisher: string
      year: string
      author?: string
      editor?: string
      chapter?: string
      pages?: string
      volume?: string
      number?: string
      series?: string
      type?: string
      address?: string
      edition?: string
      month?: string
      url?: string
      note?: string
    }
}

/** A part of a book having its own title.*/
export type InCollection = {
  citationKey: CitationKey
  entryType: 'incollection'
  entryTags: {
    author: string
    title: string
    booktitle: string
    publisher: string
    year: string
    editor?: string
    volume?: string
    number?: string
    series?: string
    type?: string
    chapter?: string
    pages?: string
    edition?: string
    month?: string
    address?: string
    url?: string
    note?: string
  }
}

/** An article in a conference proceedings. */
export type InProceedings = {
  citationKey: CitationKey
  entryType: 'inproceedings'
  entryTags: {
    author: string
    title: string
    booktitle: string
    year: string
    editor?: string
    volume?: string
    number?: string
    series?: string
    pages?: string
    address?: string
    month?: string
    organization?: string
    publisher?: string
    url?: string
    note?: string
  }
}

/** Technical documentation. */
export type Manual = {
  citationKey: CitationKey
  entryType: 'manual'
  entryTags: {
    title: string
    author?: string
    organization?: string
    address?: string
    edition?: string
    month?: string
    year?: string
    url?: string
    note?: string
  }
}

/** A master's thesis. */
export type MastersThesis = {
  citationKey: CitationKey
  entryType: 'mastersthesis'
  entryTags: {
    author: string
    title: string
    school: string
    year: string
    type?: string
    address?: string
    month?: string
    url?: string
    note?: string
  }
}

/** Use this if nothing else fits. */
export type Misc = {
  citationKey: CitationKey
  entryType: 'misc'
  entryTags: {
    title?: string
    howpublished?: string
    note?: string
    author?: string
    month?: string
    url?: string
    year?: string
  } & (
    | {
        title: string
      }
    | {
        howpublished: string
      }
    | {
        note: string
      }
    | {
        author: string
      }
    | {
        month: string
      }
    | {
        year: string
      }
  )
}

/** A Ph.D. thesis. */
export type PhdThesis = {
  citationKey: CitationKey
  entryType: 'phdthesis'
  entryTags: {
    author: string
    title: string
    school: string
    year: string
    type?: string
    address?: string
    month?: string
    url?: string
    note?: string
  }
}

/** Conference proceedings. */
export type Proceedings = {
  citationKey: CitationKey
  entryType: 'proceedings'
  entryTags: {
    title: string
    year: string
    editor?: string
    volume?: string
    number?: string
    series?: string
    address?: string
    publisher?: string
    month?: string
    organization?: string
    url?: string
    note?: string
  }
}

/** A report published by a school or other institution, usually numbered within a series. */
export type TechReport = {
  citationKey: CitationKey
  entryType: 'techreport'
  entryTags: {
    author: string
    title: string
    institution: string
    year: string
    type?: string
    number?: string
    address?: string
    month?: string
    url?: string
    note?: string
  }
}

/** A document having an author and title, but not formally published. */
export type Unpublished = {
  citationKey: CitationKey
  entryType: 'unpublished'
  entryTags: {
    author: string
    title: string
    note: string
    month?: string
    url?: string
    year?: string
  }
}
