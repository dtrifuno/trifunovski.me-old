import React, { useState } from 'react'
import clsx from 'clsx'

import MenuLink from './MenuLink'
import MenuButton from './MenuButton'
import NavLink from './NavLink'

interface Props {
  className?: string
  links: {
    title: string
    to: string
  }[]
}

const Header: React.FC<Props> = ({ links, className }) => {
  const [isMenuHidden, setMenuHidden] = useState(true)

  return (
    <header className={clsx(className)}>
      <div className={clsx('mx-auto')}>
        <div
          className={clsx(
            'max-w-7xl',
            'mx-auto',
            'px-4',
            'sm:px-8',
            'lg:px-10'
          )}
        >
          <div
            className={clsx(
              'relative',
              'flex',
              'items-center',
              'justify-between',
              'sm:h-16'
            )}
          >
            <h1 className={clsx('text-2xl', 'py-2')}>Darko Trifunovski</h1>
            <div
              className={clsx(
                'absolute',
                'inset-y-0',
                'right-0',
                'flex',
                'items-center',
                'sm:hidden'
              )}
            >
              <MenuButton onClick={() => setMenuHidden(!isMenuHidden)} />
            </div>

            <div
              className={clsx(
                'flex-1',
                'flex',
                'items-center',
                'justify-center',
                'sm:items-stretch',
                'sm:justify-end'
              )}
            >
              <div
                className={clsx('flex-shrink-0', 'flex', 'items-center')}
              ></div>
              <nav className={clsx('hidden', 'sm:block', 'sm:ml-6')}>
                <ul className={clsx('list-none', 'flex', 'space-x-4')}>
                  {links.map(link => (
                    <NavLink to={link.to} key={link.to + link.title}>
                      {link.title}
                    </NavLink>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <nav className={clsx('sm:hidden', { hidden: isMenuHidden })}>
          <ul
            className={clsx(
              'list-none',
              'px-2',
              'pt-2',
              'pb-3',
              'space-y-1',
              'border-t-2',
              'border-primary-500'
            )}
          >
            {links.map(link => (
              <MenuLink to={link.to} key={link.to + link.title}>
                {link.title}
              </MenuLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
