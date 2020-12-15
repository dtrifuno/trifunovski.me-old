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
      <div className={clsx('text-gray-600', 'font-semibold', 'w-4/5')}>
        {dateLine}
      </div>
      <h1 className={clsx('text-4xl', 'font-bold', 'leading-snug')}>{title}</h1>
      <div
        className={clsx(
          'my-1',
          'lg:my-2',
          'text-xl',
          'lg:text-2xl',
          'leading-relaxed'
        )}
      >
        {subtitle}
      </div>
      <BlogPostTags className={clsx('my-1')} tags={tags} />
    </div>
  )
}

export default BlogTitle
