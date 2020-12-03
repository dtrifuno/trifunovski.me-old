import React from 'react'
import clsx from 'clsx'
import { BlogFrontmatterData } from '../types'

import Date from './Date'

interface Props {
  frontmatter: BlogFrontmatterData
  className?: string
}

const BlogTitle: React.FC<Props> = ({ frontmatter, className }) => {
  const { title, date, abstract, last_updated } = frontmatter
  const dateLine = (
    <div>
      <span className="whitespace-no-wrap">
        Posted on <Date isoString={date} />
      </span>
      {last_updated && (
        <>
          {', '}
          <span className="whitespace-no-wrap">
            Last updated <Date isoString={last_updated} />
          </span>
        </>
      )}
    </div>
  )
  return (
    <div className={clsx(className, 'flex flex-col items-center')}>
      <h1 className="mb-1 text-4xl font-bold">{title}</h1>
      <div className="text-gray-600 text-center w-4/5">{dateLine}</div>
      <div className="text-justify text-gray-700 my-2 text-lg italic">
        {abstract}
      </div>
    </div>
  )
}

export default BlogTitle
