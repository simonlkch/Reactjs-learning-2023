import { useState, useRef } from "react"
import ResultModel from "../components/ResultModel.jsx"

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false)
  const [timeStarted, setTimeStarted] = useState(false)

  const timer = useRef()
  const dialog = useRef()
  let result

  const handleStart = () => {

    timer.current = setTimeout(() => {
      setTimeExpired(true)
      dialog.current.show()
    }, targetTime * 1000)
    setTimeStarted(true)
  }

  const handleStop = () => {
    if (timeStarted){
      result = timer.current
    }
    clearTimeout(timer.current)
  }

  return (
    <>
      {timeStarted && <ResultModel ref={dialog} result={result} targetTime={targetTime}/>}
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} sec {targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"}
        </button>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is running" : "Time Inactive"}
        </p>
      </section>
    </>
  )
}