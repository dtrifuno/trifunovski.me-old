import React from 'react'
import clsx from 'clsx'
import { IconContext } from 'react-icons'

import { createLinkedIcons } from './createLinkedIcons'

import { FooterUrls } from '../../types'

interface Props {
  className?: string
  footerUrls: FooterUrls
}

const IconBar: React.FC<Props> = ({ className, footerUrls }) => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-row',
        'text-gray-400',
        'space-x-8',
        'md:space-x-4',
        className
      )}
    >
      <IconContext.Provider
        value={{
          size: '1.75em',
          className: 'footer-icon',
        }}
      >
        {createLinkedIcons(footerUrls)}
      </IconContext.Provider>
    </div>
  )
}

export default IconBar
