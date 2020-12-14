import { graphql, useStaticQuery } from 'gatsby'
import { countBy, flatMap } from 'lodash'
import { AllPublishedPostsQuery } from '../types'

const useTags = (): Record<string, number> => {
  const allPublishedPosts = useStaticQuery<AllPublishedPostsQuery>(graphql`
    query AllPublishedPosts {
      allMdx(filter: { fields: { slug: { regex: "/^/post/.+/" } } }) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `)

  const tags = countBy(
    flatMap(allPublishedPosts.allMdx.nodes, post => post.frontmatter.tags)
  )

  return tags
}

export default useTags
