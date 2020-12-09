/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = {
  title: `Home`,
  titleTemplate: `%s · Darko Trifunovski`,
  description: `Darko Trifunovski's personal website and blog.`,
  url: `https://trifunovski.me`,
  image: `/images/snape.jpg`, // Path to your image you placed in the 'static' folder
  twitterUsername: `@dtrifuno`,
  authorName: `Darko Trifunovski`,
  siteLanguage: `en`,
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                url
                site_url: url
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
                  url: site.siteMetadata.url + post.fields.slug,
                  guid: site.siteMetadata.url + post.fields.slug,
                  custom_elements: [
                    { 'content:encoded': post.frontmatter.abstract },
                  ],
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
                      abstract
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
    },
  ],
}
