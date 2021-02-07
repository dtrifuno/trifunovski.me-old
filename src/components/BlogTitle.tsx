import React from 'react'
import clsx from 'clsx'
import { Frontmatter } from '../types'

import Date from './Date'
import BlogPostTags from './BlogPostTags'

interface Props {
  frontmatter: Frontmatter
  className?: string
}

const BlogTitle: React.FC<Props> = ({ frontmatter, className }) => {
  const { title, date, subtitle, last_updated, tags } = frontmatter
  const dateLine = (
    <div>
      <span className={clsx('whitespace-no-wrap')}>
        Posted <Date isoString={date} dateFormat="MMM d, yyyy" />
      </span>
      {last_updated && (
        <>
          {', '}
          <span className={clsx('whitespace-no-wrap')}>
            Updated <Date isoString={last_updated} dateFormat="MMM d, yyyy" />
          </span>
        </>
      )}
    </div>
  )

  return (
    <div className={clsx('flex', 'flex-col', className)}>
      <BlogPostTags className={clsx('mt-2')} tags={tags} />
      <h1 className={clsx('text-5xl', 'font-bold', 'leading-snug', 'mb-1')}>
        {title}
      </h1>
      <div
        className={clsx(
          'text-sm',
          'sm:text-base',
          'text-gray-600',
          'font-semibold',
          'w-4/5'
        )}
      >
        {dateLine}
      </div>
      <div className={clsx('my-1', 'text-xl', 'leading-relaxed')}>
        {subtitle}
      </div>
    </div>
  )
}

export default BlogTitle
