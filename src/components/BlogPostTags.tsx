import { Link } from 'gatsby'
import React from 'react'
import { FaTags } from 'react-icons/fa'

interface Props {
  tags?: string[]
}

const BlogPostTags: React.FC<Props> = ({ tags }) => {
  if (!tags) {
    return <></>
  }

  return (
    <div className="flex flex-row items-center">
      <FaTags className="mr-3" />
      <ul className="">
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
    <Link className="border p-1 mr-1 hover:bg-gray-200 no-underline" to={link}>
      {tag}
    </Link>
  )
}

export default BlogPostTags
