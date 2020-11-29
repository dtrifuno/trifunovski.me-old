/* Projects */
import { FluidObject } from 'gatsby-image'
export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  demo_url: string
  github_url: string
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
