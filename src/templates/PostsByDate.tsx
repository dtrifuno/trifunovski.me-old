import React from 'react'
import { graphql, Link } from 'gatsby'

import BlogEntry from '../components/BlogEntry'
import Layout from '../components/Layout'
import Paginator from '../components/Paginator'

import { BlogEntriesData, PageContext } from '../types'
import clsx from 'clsx'

interface Props {
  data: {
    allMdx: BlogEntriesData
  }
  pageContext: PageContext
}

const BlogList: React.FC<Props> = ({ pageContext, data }) => {
  const posts = data.allMdx.edges.map(edge => edge.node)
  console.log(posts)
  return (
    <Layout>
      <div className={clsx('max-w-4xl', 'mx-auto', 'my-3', 'md:my-5')}>
        <h2 className={clsx('text-3xl', 'lg:text-4xl', 'font-bold', 'mb-1')}>
          Recent Posts
        </h2>
        <Link
          className={clsx('text-xl', 'text-orange-600', 'hover:underline')}
          to="/tags"
        >
          (view posts by tag instead)
        </Link>
        <ul className={clsx('list-none', 'py-6')}>
          {posts.map(post => (
            <BlogEntry entry={post} key={post.id} />
          ))}
        </ul>
        <Paginator url="/blog" pageContext={pageContext} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogListQuery($limit: Int, $skip: Int) {
    allMdx(
      filter: { fields: { slug: { regex: "/^/(blog|draft)//" } } }
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
  }
`

export default BlogList
