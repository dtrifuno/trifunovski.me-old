import clsx from 'clsx'
import React from 'react'
import IconBar from './IconBar'

interface Props {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={clsx(className)}>
      <div
        className={clsx('max-w-7xl', 'mx-auto', 'px-6', 'md:px-8', 'lg:px-10')}
      >
        <div
          className={clsx(
            'flex',
            'flex-col-reverse',
            'md:flex-row',
            'items-center',
            'justify-between',
            'space-x-4'
          )}
        >
          <div
            className={clsx(
              'md:text-lg',
              'text-center',
              'text-gray-700',
              'mb-2',
              'md:mb-0'
            )}
          >
            Darko Trifunovski © 2020&ndash;2021. Built with Gatsby&mdash;source
            code available on{' '}
            <a
              className={clsx('link')}
              href="https://github.com/dtrifuno/trifunovski.me"
            >
              Github
            </a>
            .
          </div>
          <div className={clsx('my-3', 'md:my-4')}>
            <IconBar />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
