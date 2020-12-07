import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'

interface Props {
  to: string
  className?: string
}

const MenuLink: React.FC<Props> = ({ to, className, children }) => {
  return (
    <li className={clsx(className)}>
      <Link
        className={clsx(
          'block',
          'px-3',
          'py-2',
          'text-base',
          'font-medium',
          'lowercase',
          'hover:bg-gray-500',
          'hover:text-white'
        )}
        activeClassName={clsx(
          'text-white',
          'hover:text-white',
          'bg-primary-500',
          'hover:bg-primary-500'
        )}
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuLink
