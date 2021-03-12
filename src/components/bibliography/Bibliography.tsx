import React from 'react'
import _ from 'lodash'

import { BibliographyData, BibliographyItem } from './types'

export interface BibliographyProps {
  bibliographyData: BibliographyData
}

const Bibliography: React.FC<BibliographyProps> = ({ bibliographyData }) => {
  const sortedItems = _.sortBy(_.values(bibliographyData), item =>
    _.lowerCase(item?.label)
  ) as BibliographyItem[]
  return (
    <div>
      <dl>
        {sortedItems.map(({ label, elem, citationKey }) => (
          <div
            key={citationKey}
            id={`cite-key-${citationKey}`}
            className="py-3 sm:grid sm:grid-cols-10"
          >
            <dt className="sm:col-span-2 lg:col-span-1 sm:text-right text-primary-500 font-semibold">{`[${label}]`}</dt>
            <dd className="sm:pl-3 sm:col-span-8 lg:col-span-9">
              <div dangerouslySetInnerHTML={{ __html: elem }} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Bibliography
