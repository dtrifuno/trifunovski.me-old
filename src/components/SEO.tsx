import React from 'react'
import { useLocation } from '@reach/router'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
  article?: boolean
  description?: string | null
  image?: string
}

const SEO: React.FC<Props> = props => {
  const { article, title, description, image } = props
  const { pathname } = useLocation()
  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    url,
    image: defaultImage,
    siteLanguage,
    twitterUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image || defaultImage}`,
    url: `${url}${pathname}`,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: siteLanguage }}
    >
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
    </Helmet>
  )
}

export default SEO
