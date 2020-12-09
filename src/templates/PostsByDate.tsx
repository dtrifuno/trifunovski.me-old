import React from 'react'
import { graphql, Link } from 'gatsby'

import BlogEntry from '../components/BlogEntry'
import Layout from '../components/Layout'
import Paginator from '../components/Paginator'

import { PageContext } from '../types'
import { BlogListQuery } from '../types'
import clsx from 'clsx'
import SEO from '../components/SEO'

interface Props {
  data: BlogListQuery
  pageContext: PageContext
}

const BlogList: React.FC<Props> = ({ pageContext, data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <SEO title={`Page ${pageContext.currentPage}`} />
      <div className={clsx('max-w-4xl', 'mx-auto', 'my-3', 'md:my-5')}>
        <h2 className={clsx('text-3xl', 'lg:text-4xl', 'font-bold', 'mb-0')}>
          Recent Posts
        </h2>
        <Link
          className={clsx('text-xl', 'text-primary-500', 'hover:underline')}
          to="/tags"
        >
          (view posts by tag instead)
        </Link>
        <ul className={clsx('list-none', 'py-6')}>
          {posts.map(post => (
            <BlogEntry entry={post} key={post.id} />
          ))}
        </ul>
        <Paginator url="/posts" pageContext={pageContext} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogList($limit: Int, $skip: Int) {
    allMdx(
      filter: { fields: { slug: { regex: "/^/post//" } } }
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
          abstract
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
