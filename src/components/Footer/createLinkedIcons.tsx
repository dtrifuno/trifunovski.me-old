import React from 'react'
import clsx from 'clsx'
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
  FaReddit,
  FaHackerNews,
  FaVk,
  FaTwitch,
  FaSoundcloud,
  FaYoutube,
  FaMedium,
  FaRss,
} from 'react-icons/fa'

import { FooterUrls } from '../../types'

export const keyToIconAndLabel = {
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
    ariaLabel: 'Visit my Stack Exchange profile',
  },
  devUrl: {
    icon: <FaDev />,
    ariaLabel: 'Visit my DEV Community profile',
  },
  kaggleUrl: {
    icon: <FaKaggle />,
    ariaLabel: 'Visit my Kaggle profile',
  },
  hackerRankUrl: {
    icon: <FaHackerrank />,
    ariaLabel: 'Visit my HackerRank profile',
  },
  freeCodeCampUrl: {
    icon: <FaFreeCodeCamp />,
    ariaLabel: 'Visit my freeCodeCamp profile',
  },
  facebookUrl: {
    icon: <FaFacebook />,
    ariaLabel: 'Visit my Facebook profile',
  },
  twitterUrl: {
    icon: <FaTwitter />,
    ariaLabel: 'Visit my Twitter page',
  },
  instagramUrl: {
    icon: <FaInstagram />,
    ariaLabel: 'Visit my Instagram profile',
  },
  redditUrl: {
    icon: <FaReddit />,
    ariaLabel: 'Visit my Reddit user page',
  },
  hackernewsUrl: {
    icon: <FaHackerNews />,
    ariaLabel: 'Visit my HackerNews user page',
  },
  vkontakteUrl: {
    icon: <FaVk />,
    ariaLabel: 'Visit my VKontake profile',
  },
  twitchUrl: {
    icon: <FaTwitch />,
    ariaLabel: 'Visit my Twitch channel',
  },
  soundcloudUrl: {
    icon: <FaSoundcloud />,
    ariaLabel: 'Check out my Soundcloud',
  },
  youtubeUrl: {
    icon: <FaYoutube />,
    ariaLabel: 'Visit my Youtube channel',
  },
  mediumUrl: {
    icon: <FaMedium />,
    ariaLabel: 'Visit my Medium blog',
  },
  rss: {
    icon: <FaRss />,
    ariaLabel: 'Subscribe to my RSS feed',
  },
} as const

export const createLinkedIcons = (footerUrls: FooterUrls) => {
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

      const { icon, ariaLabel } = keyToIconAndLabel[key]
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
