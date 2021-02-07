import _ from 'lodash'

import { BibtexEntry } from '../../types'

interface Author {
  firstName?: string
  lastName: string
}

const parseAuthorName = (name: string): Author => {
  name = name.trim()

  const afterCommaSplit = name.split(/,/)
  if (afterCommaSplit.length === 2) {
    return {
      firstName: afterCommaSplit[1].trim(),
      lastName: afterCommaSplit[0].trim(),
    }
  } else if (afterCommaSplit.length > 2) {
    console.error(`Too many commas in name ${name}`)
  }

  const afterSpaceSplit = name.split(/ /)
  const numNames = afterSpaceSplit.length
  if (numNames === 1) {
    return {
      lastName: name,
    }
  }
  const firstName = afterSpaceSplit.slice(0, -1).join(' ')
  const lastName = afterSpaceSplit.slice(-1)[0]
  return {
    firstName,
    lastName,
  }
}

const extractShortInitial = ({ lastName }: Author): string =>
  _.flatMap(lastName.split(/ /), x => x.split(/-/))
    .map(x => x[0])
    .join('')

const extractLongInitial = ({ lastName }: Author): string => {
  const shortInitial = extractShortInitial({ lastName })
  if (shortInitial.length > 1) {
    return shortInitial
  }
  return lastName.slice(0, 3)
}

const createCandidateLabel = (entry: BibtexEntry): string => {
  const { year, author: authorString } = entry.entryTags
  const authors = authorString
    .split(' and ')
    .map(x => parseAuthorName(x.trim()))

  let initials
  if (authors.length === 1) {
    initials = extractLongInitial(authors[0])
  } else if (authors.length >= 5) {
    initials = authors.slice(0, 3).map(extractShortInitial).join('') + '+'
  } else {
    initials = authors.map(extractShortInitial).join('')
  }

  return `${initials}${year ? year.slice(-2) : ''}`
}
