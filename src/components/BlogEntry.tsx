import React from 'react'
import { Link } from 'gatsby'

import { BlogEntryListData } from '../types'
import Date from '../components/Date'

interface BlogEntryProps {
  entry: BlogEntryListData
}

const BlogEntry: React.FC<BlogEntryProps> = ({ entry }) => {
  const { title, subtitle, date } = entry.frontmatter
  const { slug } = entry.fields
  return (
    <li className="text-lg sm:text-xl py-3">
      <Date
        isoString={date}
        dateFormat="MMM do, yyyy"
        className="text-md sm:text-lg text-gray-600 italic"
      />
      <div>
        <Link
          className="text-orange-600 hover:underline font-semibold"
          to={slug}
        >
          {title}
        </Link>
        {subtitle && <span className="text-gray-800">&mdash;{subtitle}</span>}
      </div>
    </li>
  )
}

export default BlogEntry
