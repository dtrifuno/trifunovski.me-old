import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetadataQuery, SiteMetadata } from '../types'

const useSiteMetadata = (): SiteMetadata => {
  const siteMetadata = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteLanguage
          title
          titleTemplate
          authorName
          twitterUsername
          siteUrl
        }
      }
    }
  `)
  return siteMetadata.site!.siteMetadata
}

export default useSiteMetadata
