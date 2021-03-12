import {
  BlogListRecentQuery,
  BlogListForTagQuery,
  BlogPostQuery,
  TocItem,
  AllProjectsQuery,
  SiteMetadataQuery,
} from '../gatsby-graphql'

type Unpacked<T> = T extends (infer U)[] ? U : T

/** A string representing valid HTML. */
export type HTMLString = string

/* Bibliography */

/* Blog */
export { BlogListRecentQuery, BlogListForTagQuery, BlogPostQuery, TocItem }

export type Frontmatter = NonNullable<BlogPostQuery['mdx']>['frontmatter']

export interface PageContext {
  tag?: string
  currentPage: number
  numPages: number
}

export type BlogEntryListData = Unpacked<BlogListRecentQuery['allMdx']['nodes']>

export interface TableOfContents {
  items: (Pick<TocItem, 'title' | 'url'> & {
    items: Pick<TocItem, 'title' | 'url'>[]
  })[]
}

/* Footer */
import { keyToIconAndLabel } from './components/Footer/createLinkedIcons'
export type FooterUrls = {
  [P in keyof Omit<typeof keyToIconAndLabel, 'rss'>]?: string
} & {
  readonly rss?: string | boolean
}

/* Metadata */
export { SiteMetadataQuery }
export type SiteMetadata = NonNullable<
  SiteMetadataQuery['site']
>['siteMetadata']

/* Projects */
export { AllProjectsQuery }
export type Project = Unpacked<AllProjectsQuery['allProjectsYaml']['nodes']>
