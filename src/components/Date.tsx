import React from 'react'
import { parseISO, format } from 'date-fns'
import clsx from 'clsx'

interface Props {
  isoString: string
  className?: string
  dateFormat?: string
}

const Date: React.FC<Props> = ({
  isoString,
  className,
  dateFormat = 'MMMM d, yyyy',
}) => {
  const date = parseISO(isoString)

  return (
    <time className={clsx(className)} dateTime={format(date, 'yyyy-MM-dd')}>
      {format(date, dateFormat)}
    </time>
  )
}

export default Date
