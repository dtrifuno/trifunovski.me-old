import { Link } from 'gatsby'
import React from 'react'

interface Props {
  href: string
  className?: string
}

const SmartLink: React.FC<Props> = ({ href, children, ...props }) => {
  return href.startsWith('/') ? (
    <Link to={href} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export default SmartLink
