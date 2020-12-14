const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions

  // return empty array if field is null
  createFieldExtension({
    name: 'emptyIfNull',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context, info) {
          const data = source[info.fieldName]
          return data == null ? [] : data
        },
      }
    },
  })

  // return false if field is null
  createFieldExtension({
    name: 'falseIfNull',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context, info) {
          return source[info.fieldName] ? true : false
        },
      }
    },
  })

  createFieldExtension({
    name: 'taggify',
    extend(options, prevFieldConfig) {
      return {
        resolve(source, args, context, info) {
          const data = source[info.fieldName]
          if (!data) {
            return ['misc']
          }
          return data.map(tag => tag.replace(' ', '-'))
        },
      }
    },
  })

  createTypes(`
    type Site implements Node {
      siteMetadata: SiteSiteMetadata!
    }
    type SiteSiteMetadata {
      title: String!
      description: String!
      titleTemplate: String!
      siteUrl: String!
      image: String!
      authorName: String!
      twitterUsername: String!
      siteLanguage: String!
    }
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
      tableOfContents: TableOfContents!
    }
    type MdxFrontmatter {
      title: String!
      date: Date! @dateformat
      last_updated: Date @dateformat
      subtitle: String
      tags: [String!]! @taggify
      bibliography: File @fileByRelativePath
      draft: Boolean! @falseIfNull
    }
    type TableOfContents {
      items: [TOCItem!]! @emptyIfNull
    }
    type TOCItem {
      url: String!
      title: String!
      items: [TOCItem!]! @emptyIfNull
    }
    type ProjectsYaml implements Node {
      title: String!
      description: String!
      tags: [String!]! @emptyIfNull
      demo_url: String
      github_url: String
      thumbnail: File! @fileByRelativePath
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Create slugs for posts
  if (node.internal.type === 'Mdx' && /\/posts\//.test(node.fileAbsolutePath)) {
    const { draft } = node.frontmatter
    const filenamePath = createFilePath({ node, getNode })
    const slug = `/${!draft ? 'post' : 'draft'}${filenamePath}`

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Create post list pages.
  const publishedPostsResult = await graphql(`
    query PublishedPosts {
      allMdx(
        filter: { fields: { slug: { regex: "/^/post/.+/" } } }
        sort: {
          fields: [frontmatter___date, frontmatter___title]
          order: [DESC, ASC]
        }
      ) {
        nodes {
          id
          frontmatter {
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  if (publishedPostsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Running "PublishedPosts" query.')
  }
  const numPublishedPosts = publishedPostsResult.data.allMdx.nodes.length
  const postsPerPage = 8
  const numPages = Math.ceil(numPublishedPosts / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
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
        filter: { fields: { slug: { regex: "/^/(post|draft)//" } } }
        sort: {
          fields: [frontmatter___date, frontmatter___title]
          order: [DESC, ASC]
        }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (allPostsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Running "AllPosts" query.')
  }

  const posts = allPostsResult.data.allMdx.nodes
  posts.forEach((post, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: post.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: post.id },
    })
  })
}
