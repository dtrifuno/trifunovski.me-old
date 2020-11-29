import React, { useState } from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'

interface LinkProps {
  to: string
}

const NavLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        className="px-2 py-1 font-medium text-xl text-gray-600 lowercase hover:text-orange-400"
        activeClassName="text-orange-400 border-b-2 border-orange-400"
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}

const MenuLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        className="block px-3 py-2 text-base font-medium lowercase hover:bg-gray-600 hover:text-white"
        activeClassName="text-white hover:text-white bg-orange-400 hover:bg-orange-400"
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}

interface MenuButtonProps {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-expanded="false"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className="hidden h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

interface HeaderProps {
  links: {
    title: string
    to: string
  }[]
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isMenuHidden, setMenuHidden] = useState(true)

  return (
    <header className="border-b-2 border-orange-400 mb-2 lg:mb-3">
      <div className="mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="relative flex items-center justify-between sm:h-16">
            <h1 className="text-2xl py-2">Darko Trifunovski</h1>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <MenuButton onClick={() => setMenuHidden(!isMenuHidden)} />
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="flex-shrink-0 flex items-center"></div>
              <nav className="hidden sm:block sm:ml-6">
                <ul className="list-none flex space-x-4">
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

        <nav className={clsx({ 'sm:hidden': true, hidden: isMenuHidden })}>
          <ul className="list-none px-2 pt-2 pb-3 space-y-1 border-t-2 border-orange-400">
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
