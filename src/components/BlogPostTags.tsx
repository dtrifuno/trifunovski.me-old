import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'

interface Props {
  className?: string
  tags: string[]
}

const BlogPostTags: React.FC<Props> = ({ tags, className }) => {
  if (tags.length === 0) {
    return <></>
  }

  return (
    <div className={clsx('flex', 'flex-row', 'items-center', className)}>
      <ul className={clsx('')}>
        {tags?.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </ul>
    </div>
  )
}

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  const link = `/tag/${tag}`
  return (
    <Link
      className={clsx(
        'border',
        'p-1',
        'mr-1',
        'text-gray-600',
        'font-semibold',
        'hover:bg-gray-200',
        'no-underline',
        'hover:bg-primary-400',
        'hover:text-gray-100'
      )}
      to={link}
    >
      {tag}
    </Link>
  )
}

export default BlogPostTags
