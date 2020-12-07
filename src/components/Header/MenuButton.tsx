import clsx from 'clsx'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const MenuButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'text-gray-600',
        'inline-flex',
        'items-center',
        'justify-center',
        'p-2',
        'rounded-md',
        'hover:text-white',
        'hover:bg-orange-600',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-inset',
        'focus:ring-white'
      )}
    >
      <span className={clsx('sr-only')}>Open main menu</span>
      <GiHamburgerMenu size={24} />
    </button>
  )
}

export default MenuButton
