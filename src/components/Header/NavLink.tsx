import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'

interface Props {
  to: string
  className?: string
}

const NavLink: React.FC<Props> = ({ to, className, children }) => {
  return (
    <li className={className}>
      <Link
        className={clsx(
          'px-2',
          'py-1',
          'font-medium',
          'text-xl',
          'text-gray-600',
          'lowercase',
          'hover:text-primary-500'
        )}
        activeClassName={clsx(
          'text-primary-500',
          'border-b-2',
          'border-primary-500'
        )}
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLink
