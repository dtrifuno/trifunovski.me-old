import React from 'react'
import { Link } from 'gatsby'

import { TableOfContents } from '../types'
import clsx from 'clsx'

interface Props {
  className?: string
  tableOfContents: TableOfContents
}

const Sidebar: React.FC<Props> = ({ className, tableOfContents }) => {
  return (
    <div className={className}>
      <div>
        <ul className={clsx('ml-8', 'mt-10')}>
          <span className={clsx('uppercase', 'text-lg', 'font-semibold')}>
            Table of Contents
          </span>
          <ul className={clsx('leading-tight')}>
            {tableOfContents.items.map(i => (
              <li className={clsx('py-2', 'text-gray-800')} key={i.url}>
                <Link to={i.url}>{i.title}</Link>
                <ul>
                  {i.items.map(u => (
                    <li className={clsx('ml-4', 'py-2')} key={i.url + u.url}>
                      <Link to={u.url}>{u.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
