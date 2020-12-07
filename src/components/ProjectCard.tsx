import React from 'react'

import Img from 'gatsby-image'
import { FaGithub, FaGlobe } from 'react-icons/fa'

import { Project } from '../types'
import clsx from 'clsx'

interface ButtonProps {
  href: string
}

const DemoButton: React.FC<ButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      className={clsx(
        'text-white',
        'py-2',
        'px-5',
        'text-lg',
        'font-semibold',
        'bg-primary-400',
        'inline-block',
        'border',
        'border-primary-400',
        'hover:bg-primary-500',
        'hover:border-primary-500',
        'my-1'
      )}
    >
      <div className={clsx('flex', 'flex-row', 'space-x-2', 'items-center')}>
        <span>Demo</span>
        <FaGlobe />
      </div>
    </a>
  )
}

const GithubButton: React.FC<ButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      className={clsx(
        'text-black',
        'py-2',
        'px-5',
        'text-lg',
        'font-semibold',
        'bg-gray-500',
        'inline-block',
        'border',
        'border-gray-500',
        'text-white',
        'hover:bg-gray-600',
        'hover:border-gray-600',
        'my-1',
        'mx-2',
        'md:mx-5'
      )}
    >
      <div className={clsx('flex', 'flex-row', 'space-x-2', 'items-center')}>
        <span>Source</span>
        <FaGithub />
      </div>
    </a>
  )
}

const Tag: React.FC = ({ children }) => {
  return (
    <li
      className={clsx(
        'border',
        'text-sm',
        'font-semibold',
        'whitespace-no-wrap',
        'py-1',
        'px-2',
        'mr-1',
        'mb-2'
      )}
    >
      {children}
    </li>
  )
}

interface Props {
  project: Project
  reversed?: boolean
}

const ProjectCard: React.FC<Props> = ({ project, reversed = false }) => {
  const { title, description, tags, github_url, demo_url } = project
  const { fluid } = project.thumbnail.childImageSharp

  return (
    <div className={clsx('py-4', 'lg:py-3')}>
      <div className={clsx('container', 'm-auto', 'px-6', 'py-3', 'border')}>
        <div
          className={clsx('lg:flex', 'justify-between', 'items-center', {
            'lg:flex-row-reverse': reversed,
          })}
        >
          <div className={clsx('lg:w-6/12', 'lg:p-0', 'p-7')}>
            <h2
              className={clsx(
                'text-2xl',
                'md:text-3xl',
                'lg:text-2xl',
                'font-bold',
                'leading-tight',
                'my-0',
                'lg:my-2',
                'capitalize',
                'text-center',
                'lg:text-left'
              )}
            >
              {title}
            </h2>

            <div>
              <ul
                className={clsx(
                  'list-none',
                  'flex',
                  'flex-row',
                  'flex-wrap',
                  'mt-3',
                  'mb-1',
                  'justify-center',
                  'lg:justify-start'
                )}
              >
                {tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </div>

            <p className={clsx('text-gray-700', 'text-justify', 'text-lg')}>
              {description}
            </p>

            <div
              className={clsx(
                'py-3',
                'flex',
                'flex-row',
                'flex-wrap',
                'justify-center',
                'lg:justify-start'
              )}
            >
              {demo_url && <DemoButton href={demo_url} />}
              {github_url && <GithubButton href={github_url} />}
            </div>
          </div>
          <div className={clsx('lg:w-5/12')}>
            <Img fluid={fluid} alt={`Screenshot of ${title}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
