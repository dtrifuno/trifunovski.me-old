import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin, FaTwitter, FaRss } from 'react-icons/fa'

const IconBar: React.FC = () => {
  return (
    <div className="flex flex-row text-gray-500 space-x-8 md:space-x-4">
      <IconContext.Provider
        value={{
          size: '1.75em',
          className: 'footer-icon',
        }}
      >
        <a
          className="hover:text-orange-400"
          href="https://github.com/dtrifuno"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub />
        </a>
        <a
          className="hover:text-orange-400"
          href="https://www.linkedin.com/in/darko-trifunovski/"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:text-orange-400"
          href="https://twitter.com/dtrifuno"
          aria-label="Visit my Twitter profile"
        >
          <FaTwitter />
        </a>
        <a
          className="hover:text-orange-400"
          href="/rss.xml"
          aria-label="Subscribe to my RSS feed"
        >
          <FaRss />
        </a>
      </IconContext.Provider>
    </div>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-orange-400 box-border mt-2">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between space-x-4 ">
          <div className="md:text-lg text-center text-gray-700 mb-2 md:mb-0">
            Darko Trifunovski © 2020&ndash;2021. Built with Gatsby&mdash;source
            code available on{' '}
            <a
              className="text-orange-500 underline"
              href="https://github.com/dtrifuno/trifunovski.me"
            >
              Github
            </a>
            .
          </div>
          <div className="my-3 md:my-4">
            <IconBar />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
