import React from 'react'
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react'

import Layout from '../components/Layout'
import SmartLink from '../components/SmartLink'
import clsx from 'clsx'

const components: MDXProviderComponents = {
  h1: ({ children, className, ...props }) => (
    <h1 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }) => (
    <h4 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, className, ...props }) => (
    <h5 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h5>
  ),
  a: ({ children, href, ...props }) => (
    <SmartLink href={href} {...props}>
      {children}
    </SmartLink>
  ),
}

const Default: React.FC = ({ children }) => {
  return (
    <Layout>
      <div className={clsx('my-3', 'md:my-5')}>
        <article
          className={clsx(
            'mx-auto',
            'prose',
            'prose-primary',
            'prose-lg',
            'max-w-4xl'
          )}
        >
          <MDXProvider components={components}>{children}</MDXProvider>
        </article>
      </div>
    </Layout>
  )
}

export default Default
