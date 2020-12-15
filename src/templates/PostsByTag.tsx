import React from 'react'
import { graphql, Link } from 'gatsby'

import BlogEntry from '../components/BlogEntry'
import Layout from '../components/Layout'
import Paginator from '../components/Paginator'

import { PageContext } from '../types'
import { BlogListForTagQuery } from '../types'
import clsx from 'clsx'
import SEO from '../components/SEO'

interface Props {
  data: BlogListForTagQuery
  pageContext: PageContext
}

const BlogList: React.FC<Props> = ({ pageContext, data }) => {
  const posts = data.allMdx.nodes
  const { currentPage, numPages, tag } = pageContext
  const title = numPages === 1 ? tag : `${tag} (${currentPage} of ${numPages})`

  return (
    <Layout>
      <SEO title={title} />
      <div className={clsx('max-w-4xl', 'mx-auto', 'my-3', 'md:my-5')}>
        <h2 className={clsx('text-3xl', 'lg:text-4xl', 'font-bold', 'mb-0')}>
          {tag}
        </h2>
        <Link
          className={clsx('text-xl', 'text-primary-500', 'hover:underline')}
          to="/tags"
        >
          (view other tags)
        </Link>
        <ul className={clsx('list-none', 'py-4', 'lg:py-6')}>
          {posts.map(post => (
            <BlogEntry entry={post} key={post.id} />
          ))}
        </ul>
        {numPages !== 1 ? (
          <Paginator url={`/tag/${tag}`} pageContext={pageContext} />
        ) : null}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogListForTag($limit: Int, $skip: Int, $tag: String) {
    allMdx(
      filter: {
        fields: { slug: { regex: "/^/post//" } }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          tags
          date
          last_updated
        }
        fields {
          slug
        }
      }
    }
  }
`

export default BlogList
