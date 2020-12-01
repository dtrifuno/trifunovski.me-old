import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import BlogEntry from '../components/BlogEntry'

import { BlogEntriesData } from '../types'

interface PageContext {
  currentPage: number
  numPages: number
}

interface PaginatorProps {
  pageContext: PageContext
}

const Paginator: React.FC<PaginatorProps> = ({ pageContext }) => {
  const { currentPage, numPages } = pageContext

  let nextLink = undefined
  if (currentPage < numPages) {
    nextLink = `/blog/${currentPage + 1}`
  }

  let prevLink = undefined
  if (currentPage === 2) {
    prevLink = `/blog`
  } else if (currentPage > 2) {
    prevLink = `/blog/${currentPage - 1}`
  }

  return (
    <div className="text-xl italic flex justify-between items-center">
      {prevLink ? (
        <Link className="text-orange-600 hover:underline" to={prevLink}>
          « Previous
        </Link>
      ) : (
        <span>« Previous</span>
      )}
      {` - ${currentPage} - `}
      {nextLink ? (
        <Link className="text-orange-600 hover:underline" to={nextLink}>
          Next »
        </Link>
      ) : (
        <span>Next »</span>
      )}
    </div>
  )
}

interface BlogListProps {
  data: {
    allMdx: BlogEntriesData
  }
  pageContext: PageContext
}

const BlogList: React.FC<BlogListProps> = ({ pageContext, data }) => {
  const posts = data.allMdx.edges.map(edge => edge.node)
  console.log(posts)
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Recent Posts</h1>
        <Link className="text-xl text-orange-600 hover:underline" to="/tags">
          (view posts by tag instead)
        </Link>
        <ul className="list-none py-6">
          {posts.map(post => (
            <BlogEntry entry={post} key={post.id} />
          ))}
        </ul>
        <Paginator pageContext={pageContext} />
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
