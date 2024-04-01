import { formatDistance, parseISO } from 'date-fns'
import React from 'react'

export default function TimeStamp({timeStamp}) {
    let time =""

    if(timeStamp){
        const date = parseISO(timeStamp)
        const timePeriod = formatDistance(date, new Date())
        time = `${timePeriod} Left`
    }
  return (
    <span className="time" title={timeStamp}>
        <small>{time}</small>
  </span>
  )
}
