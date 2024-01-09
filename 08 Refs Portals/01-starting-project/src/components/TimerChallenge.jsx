import { useState, useRef } from "react"

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false)
  const [timeStarted, setTimeStarted] = useState(false)

  const timer = useRef()

  const handleStart = () => {

    timer.current =   setTimeout(() => {
      setTimeExpired(true)
    }, targetTime * 1000)
    setTimeStarted(true)
  }

  const handleStop = () => {
    clearTimeout(timer.current)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} sec {targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={ timeStarted ? handleStop : handleStart}>
        {timeStarted ? "Stop" : "Start"}
      </button>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Time is running": "Time Inactive"}
      </p>
    </section>
  )
}