import React from 'react'
import clsx from 'clsx'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin, FaTwitter, FaRss } from 'react-icons/fa'

interface Props {
  className?: string
}

const IconBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-row',
        'text-gray-500',
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
        <a
          className={clsx('hover:text-primary-500')}
          href="https://github.com/dtrifuno"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub />
        </a>
        <a
          className={clsx('hover:text-primary-500')}
          href="https://www.linkedin.com/in/darko-trifunovski/"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <a
          className={clsx('hover:text-primary-500')}
          href="https://twitter.com/dtrifuno"
          aria-label="Visit my Twitter profile"
        >
          <FaTwitter />
        </a>
        <a
          className={clsx('hover:text-primary-500')}
          href="/rss.xml"
          aria-label="Subscribe to my RSS feed"
        >
          <FaRss />
        </a>
      </IconContext.Provider>
    </div>
  )
}

export default IconBar
