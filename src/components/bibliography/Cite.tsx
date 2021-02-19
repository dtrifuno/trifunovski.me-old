import React from 'react'
import clsx from 'clsx'

import { BibliographyData, CitationKey } from '../../types'
import { Link } from 'gatsby'

interface CiteProps {
  bibliographyData: BibliographyData
  citationKey: CitationKey
}

const Cite: React.FC<CiteProps> = ({ bibliographyData, citationKey }) => {
  const { label, elem } = bibliographyData[citationKey]
  return (
    <span>
      [<Link to={`#cite-key-${citationKey}`}>{label}</Link>]
    </span>
  )
}

export default Cite
