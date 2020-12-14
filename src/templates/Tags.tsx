import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

interface Props {
  pageContext: {
    sortedPairs: [string, number][]
  }
}

const Tags: React.FC<Props> = ({ pageContext }) => {
  const { sortedPairs } = pageContext

  return (
    <Layout>
      <SEO title="Tags" />
      <div className={clsx('my-3')}>
        <div className={clsx('max-w-4xl', 'mx-auto')}>
          <h2 className={clsx('text-3xl', 'lg:text-4xl', 'font-bold', 'mb-0')}>
            Tags
          </h2>
          <div className="mb-4">
            <Link
              className={clsx('text-xl', 'text-primary-500', 'hover:underline')}
              to="/posts"
            >
              (view most recent posts instead)
            </Link>
          </div>
          <ul className="text-lg md:text-xl list-disc ml-5 space-y-1">
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
