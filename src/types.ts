/* Bibliography */
export interface BibtexEntry {
  citationKey: CitationKey
  entryType: 'book' | 'article' | 'misc'
  entryTags: {
    author: string
    title: string
    address?: string
    chapter?: string
    edition?: string
    institution?: string
    journal?: string
    month?: string
    note?: string
    number?: string
    pages?: string
    publisher?: string
    school?: string
    series?: string
    url?: string
    volume?: string
    year?: string
  }
}

export type CitationKey = string
export type BibliographyLabel = string
export type HTMLString = string
export type BibliographyItem = {
  label: BibliographyLabel
  citationKey: CitationKey
  elem: HTMLString
}
export type BibliographyData = Record<CitationKey, BibliographyItem>

/* Blog */
export interface BlogEntriesData {
  edges: {
    node: BlogEntryListData
  }[]
}

export interface BlogEntryListData {
  id: string
  frontmatter: BlogFrontmatterData
  fields: {
    slug: string
  }
}

export interface BlogPostDetailData {
  id: string
  body: string
  tableOfContents: {
    items?: TOCItemType[]
  }
  frontmatter: BlogFrontmatterData
  fields: {
    bibliography?: BibtexEntry[]
  }
}

export interface BlogFrontmatterData {
  title: string
  date: string
  last_updated?: string
  subtitle?: string
  abstract?: string
  tags: string[]
}

export interface TOCItemType {
  url: string
  title: string
  items?: TOCItemType[]
}

/* Projects */
import { FluidObject } from 'gatsby-image'
export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  demo_url: string
  github_url: string
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
