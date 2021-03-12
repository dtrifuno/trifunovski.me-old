import React from 'react'
import { parseISO, format } from 'date-fns'
import clsx from 'clsx'

export interface DateProps {
  isoString: string
  className?: string
  dateFormat?: string
}

const Date: React.FC<DateProps> = ({
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
