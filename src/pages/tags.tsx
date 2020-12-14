import React from 'react'
import { sortBy, toPairs } from 'lodash'
import useTags from '../hooks/useTags'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import clsx from 'clsx'
import { Link } from 'gatsby'

// TODO: Write Tags page
const Tags = () => {
  const countsByTag = useTags()
  const countPairs = toPairs(countsByTag)
  const sortedPairs = sortBy(
    sortBy(countPairs, pair => pair[0]),
    pair => -1 * pair[1]
  )
  console.log(sortedPairs)

  return (
    <Layout>
      <SEO title="Tags" />
      <div className={clsx('my-3')}>
        <div className={clsx('max-w-4xl', 'mx-auto')}>
          <h2
            className={clsx(
              'text-3xl',
              'lg:text-4xl',
              'font-bold',
              'mb-2',
              'lg:mb-4'
            )}
          >
            Tags
          </h2>
          <ul className="text-lg md:text-xl list-disc ml-5">
            {sortedPairs.map(([tag, count]) => (
              <li key={`${tag}`} className="link">
                <Link to={`/tag/${tag}`}>{`${tag} (${count})`}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Tags
