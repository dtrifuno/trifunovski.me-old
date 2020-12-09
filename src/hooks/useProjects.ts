import { graphql, useStaticQuery } from 'gatsby'
import { Project, AllProjectsQuery } from '../types'

const useProjects = (): Project[] => {
  const { allProjectsYaml } = useStaticQuery<AllProjectsQuery>(graphql`
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

export default useProjects
