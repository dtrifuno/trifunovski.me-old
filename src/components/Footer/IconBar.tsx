import React from 'react'
import clsx from 'clsx'
import { IconContext } from 'react-icons'
import {
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaLinkedin,
  FaStackExchange,
  FaDev,
  FaKaggle,
  FaHackerrank,
  FaFreeCodeCamp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaVk,
  FaTwitch,
  FaSoundcloud,
  FaYoutube,
  FaMedium,
  FaRss,
} from 'react-icons/fa'

import { FooterUrls } from '../../types'

const keyToIcon = {
  githubUrl: {
    icon: <FaGithub />,
    ariaLabel: 'Visit my GitHub profile',
  },
  gitlabUrl: {
    icon: <FaGitlab />,
    ariaLabel: 'Visit my GitLab profile',
  },
  bitbucketUrl: {
    icon: <FaBitbucket />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  linkedinUrl: {
    icon: <FaLinkedin />,
    ariaLabel: 'Visit my LinkedIn profile',
  },
  stackExchangeUrl: {
    icon: <FaStackExchange />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  devUrl: {
    icon: <FaDev />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  kaggleUrl: {
    icon: <FaKaggle />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  hackerRankUrl: {
    icon: <FaHackerrank />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  freeCodeCampUrl: {
    icon: <FaFreeCodeCamp />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  facebookUrl: {
    icon: <FaFacebook />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  twitterUrl: {
    icon: <FaTwitter />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  instagramUrl: {
    icon: <FaInstagram />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  vkontakteUrl: {
    icon: <FaVk />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  twitchUrl: {
    icon: <FaTwitch />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  soundcloudUrl: {
    icon: <FaSoundcloud />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  youtubeUrl: {
    icon: <FaYoutube />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  mediumUrl: {
    icon: <FaMedium />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
  rss: {
    icon: <FaRss />,
    ariaLabel: 'Visit my Bitbucket profile',
  },
} as const

const urlsToLinkedIcons = (footerUrls: FooterUrls) => {
  const keysInOrder = Reflect.ownKeys(footerUrls) as (keyof FooterUrls)[]
  const linkedIcons = keysInOrder
    .map(key => {
      let url
      let value = footerUrls[key]
      if (!value) {
        return false
      } else if (key === 'rss' && value === true) {
        url = '/rss.xml'
      } else {
        url = value as string
      }

      const { icon, ariaLabel } = keyToIcon[key]
      return (
        <a
          className={clsx('hover:text-primary-400')}
          key={key}
          href={url}
          aria-label={ariaLabel}
        >
          {icon}
        </a>
      )
    })
    .filter(x => x)
  return linkedIcons
}

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
        {urlsToLinkedIcons(footerUrls)}
        {/* <a
          className={clsx('hover:text-primary-400')}
          href="https://github.com/dtrifuno"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub />
        </a>
        <a
          className={clsx('hover:text-primary-400')}
          href="https://www.linkedin.com/in/darko-trifunovski/"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <a
          className={clsx('hover:text-primary-400')}
          href="https://twitter.com/dtrifuno"
          aria-label="Visit my Twitter profile"
        >
          <FaTwitter />
        </a>
        <a
          className={clsx('hover:text-primary-400')}
          href="/rss.xml"
          aria-label="Subscribe to my RSS feed"
        >
          <FaRss />
        </a> */}
      </IconContext.Provider>
    </div>
  )
}

export default IconBar
