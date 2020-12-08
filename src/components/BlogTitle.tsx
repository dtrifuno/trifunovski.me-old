import React from 'react'
import clsx from 'clsx'
import { MdxFrontmatter } from '../types'

import Date from './Date'

interface Props {
  frontmatter: Pick<
    MdxFrontmatter,
    'title' | 'date' | 'abstract' | 'last_updated'
  >
  className?: string
}

const BlogTitle: React.FC<Props> = ({ frontmatter, className }) => {
  const { title, date, abstract, last_updated } = frontmatter
  const dateLine = (
    <div>
      <span className={clsx('whitespace-no-wrap')}>
        Posted on <Date isoString={date} />
      </span>
      {last_updated && (
        <>
          {', '}
          <span className={clsx('whitespace-no-wrap')}>
            Last updated <Date isoString={last_updated} />
          </span>
        </>
      )}
    </div>
  )
  return (
    <div className={clsx('flex', 'flex-col', '', className)}>
      <h1 className={clsx('mb-1', 'text-4xl', 'font-bold')}>{title}</h1>
      <div className={clsx('text-gray-600', '', 'w-4/5')}>{dateLine}</div>
      <div
        className={clsx(
          'text-justify',
          'text-gray-700',
          'my-2',
          'text-lg',
          'italic'
        )}
      >
        {abstract}
      </div>
    </div>
  )
}

export default BlogTitle
