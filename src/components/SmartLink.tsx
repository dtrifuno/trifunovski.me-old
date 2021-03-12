import { Link } from 'gatsby'
import React from 'react'

export interface SmartLinkProps {
  href: string
  className?: string
}

const SmartLink: React.FC<SmartLinkProps> = ({ href, children, ...props }) => {
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
