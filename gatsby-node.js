const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }

    type MdxFrontmatter {
      title: String!
      date: Date!
      last_updated: Date
      subtitle: String
      abstract: String
      tags: [String]
      bibliographyFile: String
      draft: Boolean
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Create slugs for blog posts
  if (node.internal.type === 'Mdx' && /\/posts\//.test(node.fileAbsolutePath)) {
    const { draft } = node.frontmatter
    const filenamePath = createFilePath({ node, getNode })
    const slug = `/${!draft ? 'blog' : 'draft'}${filenamePath}`

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Create blog list pages.
  const publishedPostsResult = await graphql(`
    query PublishedPosts {
      allMdx(
        filter: { fields: { slug: { regex: "/^/blog/.+/" } } }
        sort: {
          fields: [frontmatter___date, frontmatter___title]
          order: [DESC, ASC]
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (publishedPostsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Running "PublishedPosts" query.')
  }
  const numPublishedPosts = publishedPostsResult.data.allMdx.edges.length
  const postsPerPage = 6
  const numPages = Math.ceil(numPublishedPosts / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/PostsByDate.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  const allPostsResult = await graphql(`
    query AllPosts {
      allMdx(
        filter: { fields: { slug: { regex: "/^/(blog|draft)//" } } }
        sort: {
          fields: [frontmatter___date, frontmatter___title]
          order: [DESC, ASC]
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (allPostsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Running "AllPosts" query.')
  }

  const posts = allPostsResult.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
