import { graphql, useStaticQuery } from 'gatsby'
import { Project } from '../types'

export const useProjects = (): Project[] => {
  const { allProjectsYaml } = useStaticQuery(graphql`
    query AllProjects {
      allProjectsYaml {
        nodes {
          id
          title
          description
          tags
          demo_url
          github_url
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 338) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return allProjectsYaml.nodes
}
