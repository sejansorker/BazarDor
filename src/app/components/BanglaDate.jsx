"use client"
import { useEffect, useState } from "react"

const formatBanglaDate = () =>
  new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date())

const BanglaDate = ({ className = "" }) => {
  const [date, setDate] = useState("")

  useEffect(() => {
    setDate(formatBanglaDate())

    const timer = setInterval(() => setDate(formatBanglaDate()), 60 * 1000)
    return () => clearInterval(timer)
  }, [])

  return <p className={className}>{date || "\u00A0"}</p>
}

export default BanglaDate