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
        <ul className={clsx('ml-4', 'mt-10')}>
          <span className={clsx('uppercase', 'text-lg', 'font-semibold')}>
            Table of Contents
          </span>
          <ul className={clsx('leading-tight')}>
            {tableOfContents.items.map(i => (
              <li className={clsx()} key={i.url}>
                <Link className={clsx('sidebar-link my-2 pl-4')} to={i.url}>
                  {i.title}
                </Link>
                <ul className={clsx('space-y-2')}>
                  {i.items.map(u => (
                    <li className={clsx()} key={i.url + u.url}>
                      <Link className={clsx('sidebar-link pl-8')} to={u.url}>
                        {u.title}
                      </Link>
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
