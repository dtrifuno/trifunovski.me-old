/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
'use strict'

const { macros } = require('./katex-macros')
const config = require('./config')

const siteMetadata = {
  title: `Home`,
  titleTemplate: `%s · Darko Trifunovski`,
  description: `Darko Trifunovski's personal website and blog.`,
  siteUrl: config.siteUrl,
  image: `/images/image.png`, // Path to your image you placed in the 'static' folder
  twitterUsername: config.twitterUsername,
  authorName: config.authorName,
  siteLanguage: config.siteLanguage,
}

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.ts`,
        documentPaths: [
          `./src/hooks/**/*.{ts,tsx}`,
          `./src/templates/**/*.{ts,tsx}`,
          `./node_modules/gatsby-transformer-sharp/**/*.js`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    // gatsby-remark-images should be run both as plugin of gatsby-plugin-mdx and gatsby itself, do not use one to set options
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/Default.tsx'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              macros,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/draft/*`],
      },
    },
    config.footer.rss === true
      ? {
          resolve: `gatsby-plugin-feed`,
          options: {
            query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
            feeds: [
              {
                serialize: ({ query: { site, allMdx } }) => {
                  return allMdx.nodes.map(post => {
                    return Object.assign({}, post.frontmatter, {
                      description: post.frontmatter.subtitle,
                      date: post.frontmatter.date,
                      url: site.siteMetadata.siteUrl + post.fields.slug,
                      guid: site.siteMetadata.siteUrl + post.fields.slug,
                    })
                  })
                },
                query: `
              {
                allMdx(
                  filter: { fields: { slug: { regex: "/^/post//" } } }
                  sort: {
                    fields: [frontmatter___date, frontmatter___title]
                    order: [DESC, ASC]
                  }
                ) {
                  nodes {
                    fields { slug }
                    frontmatter {
                      title
                      date
                      subtitle
                    }
                  }
                }
              }
            `,
                output: '/rss.xml',
                title: `${siteMetadata.authorName}'s RSS Feed`,
              },
            ],
          },
        }
      : false,
  ].filter(x => x),
}
