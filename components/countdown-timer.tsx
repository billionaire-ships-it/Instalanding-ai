"use client"

import { useState, useEffect } from "react"

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timeComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timeComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-bold bg-primary/10 text-primary rounded-md px-4 py-2 min-w-[80px]">
          {timeLeft[interval]}
        </div>
        <span className="text-xs uppercase mt-1 text-muted-foreground">{interval}</span>
      </div>,
    )
  })

  return (
    <div className="w-full">
      <p className="text-center mb-4 font-medium">Limited Time Offer Ends In:</p>
      <div className="flex justify-center gap-4">
        {timeComponents.length ? timeComponents : <span>Offer expired!</span>}
      </div>
    </div>
  )
}
