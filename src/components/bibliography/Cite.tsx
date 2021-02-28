import React from 'react'
import clsx from 'clsx'

import { BibliographyData, CitationKey } from './types'
import { Link } from 'gatsby'

interface CiteProps {
  bibliographyData: BibliographyData
  citationKey: CitationKey
}

const Cite: React.FC<CiteProps> = ({ bibliographyData, citationKey }) => {
  const entry = bibliographyData[citationKey]
  console.log(bibliographyData)
  if (entry) {
    return (
      <span>
        <Link to={`#cite-key-${citationKey}`}>[{entry.label}]</Link>
      </span>
    )
  } else {
    return (
      <span>
        <strong style={{ color: 'red' }}>
          {`ERROR: Cannot find citation key ${citationKey} in bibliography.]`}
        </strong>
      </span>
    )
  }
}

export default Cite
