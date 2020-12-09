import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'

import { BlogEntryListData } from '../types'
import Date from '../components/Date'

interface BlogEntryProps {
  entry: BlogEntryListData
}

const BlogEntry: React.FC<BlogEntryProps> = ({ entry }) => {
  const { title, subtitle, date } = entry.frontmatter
  const slug = entry.fields!.slug || '#'

  return (
    <li className={clsx('text-lg', 'py-2')}>
      <Date
        isoString={date}
        dateFormat="MMM d, yyyy"
        className={clsx('text-base', 'text-gray-600')}
      />
      <div>
        <Link className={clsx('link')} to={slug}>
          {title}
        </Link>
        {subtitle && (
          <span className={clsx('text-gray-800')}>&mdash;{subtitle}</span>
        )}
      </div>
    </li>
  )
}

export default BlogEntry
