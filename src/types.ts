import {
  BlogListQuery,
  BlogPostQuery,
  TocItem,
  MdxFrontmatter,
  AllProjectsQuery,
  SiteMetadataQuery,
} from '../gatsby-graphql'

type Unpacked<T> = T extends (infer U)[] ? U : T

/* Metadata */
export { SiteMetadataQuery }
export type SiteMetadata = NonNullable<
  SiteMetadataQuery['site']
>['siteMetadata']

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
export { BlogListQuery, BlogPostQuery, TocItem }

export type Frontmatter = NonNullable<BlogPostQuery['mdx']>['frontmatter']

export interface PageContext {
  currentPage: number
  numPages: number
}

export type BlogEntryListData = Unpacked<BlogListQuery['allMdx']['nodes']>

export interface TableOfContents {
  items: (Pick<TocItem, 'title' | 'url'> & {
    items: Pick<TocItem, 'title' | 'url'>[]
  })[]
}

/* Projects */
export { AllProjectsQuery }
export type Project = Unpacked<AllProjectsQuery['allProjectsYaml']['nodes']>

// import { FluidObject } from 'gatsby-image'
// export type Project = {
//   id: string
//   title: string
//   description: string
//   tags: string[]
//   demo_url: string
//   github_url: string
//   thumbnail: {
//     childImageSharp: {
//       fluid: FluidObject
//     }
//   }
// }
