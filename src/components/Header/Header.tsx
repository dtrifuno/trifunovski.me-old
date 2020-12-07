import React, { useState } from 'react'
import clsx from 'clsx'

import MenuLink from './MenuLink'
import MenuButton from './MenuButton'
import NavLink from './NavLink'

// interface MenuButtonProps {
//   onClick?:
//     | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
//     | undefined
// }

// const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
//   return (
//     <button
//       className={clsx(
//         'inline-flex',
//         'items-center',
//         'justify-center',
//         'p-2',
//         'rounded-md',
//         'hover:text-white',
//         'hover:bg-orange-600',
//         'focus:outline-none',
//         'focus:ring-2',
//         'focus:ring-inset',
//         'focus:ring-white'
//       )}
//       aria-expanded="false"
//       onClick={onClick}
//     >
//       <span className={clsx('sr-only')}>Open main menu</span>
//       <svg
//         className={clsx('block', 'h-6', 'w-6')}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         aria-hidden="true"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M4 6h16M4 12h16M4 18h16"
//         />
//       </svg>
//       <svg
//         className={clsx('hidden', 'h-6', 'w-6')}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         aria-hidden="true"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     </button>
//   )
// }

interface HeaderProps {
  className?: string
  links: {
    title: string
    to: string
  }[]
}

const Header: React.FC<HeaderProps> = ({ links, className }) => {
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
              'border-orange-600'
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
