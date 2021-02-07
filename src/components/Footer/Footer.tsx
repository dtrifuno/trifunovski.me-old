import clsx from 'clsx'
import React from 'react'
import IconBar from './IconBar'

import { FooterUrls } from '../../types'

interface Props {
  className?: string
  footerUrls: FooterUrls
}

const Footer: React.FC<Props> = ({ className, footerUrls }) => {
  const config = require('../../../config')
  return (
    <footer className={clsx(className)}>
      <div
        className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-8', 'lg:px-10')}
      >
        <div
          className={clsx(
            'flex',
            'flex-col-reverse',
            'md:flex-row',
            'items-center',
            'justify-between',
            'space-x-4'
          )}
        >
          <div
            className={clsx(
              'md:text-lg',
              'text-center',
              'text-gray-700',
              'mb-2',
              'md:mb-0'
            )}
            dangerouslySetInnerHTML={{
              __html: config.copyrightNoticeHtml as string,
            }}
          />
          <div className={clsx('my-3', 'md:my-4')}>
            <IconBar footerUrls={footerUrls} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
