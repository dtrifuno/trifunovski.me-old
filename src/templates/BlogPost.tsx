import React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import { BlogPostQuery } from '../types'

import { MDXProvider, MDXProviderComponents } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'
import BlogTitle from '../components/BlogTitle'
import SmartLink from '../components/SmartLink'
import Sidebar from '../components/Sidebar'
import BlogPostTags from '../components/BlogPostTags'
import SEO from '../components/SEO'
import SyntaxHighlighter from '../components/SyntaxHighlighter'

const components: MDXProviderComponents = {
  h1: ({ children, className, ...props }) => (
    <h1 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }) => (
    <h4 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, className, ...props }) => (
    <h5 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h5>
  ),
  a: ({ children, href, ...props }) => (
    <SmartLink href={href} {...props}>
      {children}
    </SmartLink>
  ),
  code: props => <SyntaxHighlighter {...props} />,
}

interface Props {
  data: BlogPostQuery
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const { tableOfContents, body, frontmatter } = data.mdx!
  const { title, subtitle, tags } = frontmatter

  return (
    <Layout>
      <SEO title={title} description={subtitle} article />
      <div className={clsx('flex', 'flex-row', 'justify-center', 'max-w-full')}>
        <div className={clsx('max-w-4xl', 'flex', 'flex-row')}>
          <div
            className={clsx(
              'sm:pr-4',
              'md:pr-6',
              'sm:w-2/3',
              'lg:w-3/4',
              'py-6'
            )}
          >
            <BlogTitle className={clsx('mb-8')} frontmatter={frontmatter} />
            <div
              className={clsx(
                'prose',
                'prose-primary',
                'md:prose-lg',
                'max-w-none'
              )}
            >
              <MDXProvider components={components}>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
          <Sidebar
            className={clsx(
              'border-l-2',
              'border-gray-400',
              'h-screen',
              'sticky',
              'top-0',
              'hidden',
              'sm:block',
              'w-1/3',
              'lg:w-1/4'
            )}
            tableOfContents={tableOfContents}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents {
        items {
          title
          url
          items {
            title
            url
          }
        }
      }
      frontmatter {
        title
        subtitle
        date
        tags
        last_updated
      }
      # fields {
      #   bibliography {
      #     citationKey
      #     entryType
      #     entryTags {
      #       # Required
      #       author
      #       title
      #       # Optional
      #       address
      #       chapter
      #       edition
      #       edition
      #       institution
      #       journal
      #       month
      #       note
      #       number
      #       pages
      #       publisher
      #       school
      #       series
      #       url
      #       volume
      #       year
      #     }
      #   }
      # }
    }
  }
`

export default BlogPost
