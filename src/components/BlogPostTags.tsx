import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'
import { FaTags } from 'react-icons/fa'

interface Props {
  tags: string[]
}

const BlogPostTags: React.FC<Props> = ({ tags }) => {
  if (tags.length === 0) {
    return <></>
  }

  return (
    <div className={clsx('flex', 'flex-row', 'items-center')}>
      <FaTags className={clsx('mr-3')} />
      <ul className={clsx('')}>
        {tags?.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </ul>
    </div>
  )
}

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  const link = `/tags/${tag.replace(/ /g, '_')}`
  return (
    <Link
      className={clsx(
        'border',
        'p-1',
        'mr-1',
        'hover:bg-gray-200',
        'no-underline'
      )}
      to={link}
    >
      {tag}
    </Link>
  )
}

export default BlogPostTags
