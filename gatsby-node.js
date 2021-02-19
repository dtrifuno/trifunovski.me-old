const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const bibtexParse = require('@orcid/bibtex-parse-js')
const _ = require('lodash')

const config = require('./config')

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
      priority: Int
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

  // create recent posts pages
  const numPublishedPosts = publishedPostsResult.data.allMdx.nodes.length
  const postsPerPage = config.postsPerPage ? config.postsPerPage : 999999
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

  // create tags page
  const countsByTag = _.countBy(
    _.flatMap(
      publishedPostsResult.data.allMdx.nodes,
      post => post.frontmatter.tags
    )
  )
  const countPairs = _.toPairs(countsByTag)
  const sortedPairs = _.sortBy(
    _.sortBy(countPairs, pair => pair[0]),
    pair => -1 * pair[1]
  )
  createPage({
    path: `/tags`,
    component: path.resolve('./src/templates/Tags.tsx'),
    context: {
      sortedPairs,
    },
  })

  // create tags pages
  sortedPairs.forEach(([tag, numPosts]) => {
    const numPages = Math.ceil(numPosts / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tag/${tag}` : `/tag/${tag}/${i + 1}`,
        component: path.resolve('./src/templates/PostsByTag.tsx'),
        context: {
          tag,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
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
          frontmatter {
            bibliography {
              absolutePath
            }
          }
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
    let bibliography
    if (post.frontmatter.bibliography) {
      const bibliographyPath = post.frontmatter.bibliography.absolutePath
      const bibliographyData = fs.readFileSync(bibliographyPath, 'utf8')
      const parsedBibliography = bibtexParse.toJSON(bibliographyData)
      bibliography = parsedBibliography.map(bibItem => ({
        ...bibItem,
        entryTags: _.mapKeys(bibItem.entryTags, (val, key) => _.lowerCase(key)),
      }))
    }
    console.log(post.fields.slug)
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: post.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: post.id, bibliography },
    })
  })
}
