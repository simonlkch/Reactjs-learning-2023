import { useState, useRef } from "react"
import ResultModel from "../components/ResultModel.jsx"

export default function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000)
  const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000

  const timer = useRef()
  const dialog = useRef()
  let result

  if ( remainingTime <= 0){
    clearInterval(timer.current)
    setRemainingTime(targetTime * 1000)
    dialog.current.show()
  }

  const handleStart = () => {
    timer.current = setInterval(()=>{
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
    }, 10 )

  }

  const handleStop = () => {
    dialog.current.show()
    clearInterval(timer.current)
  }

  return (
    <>
      {<ResultModel ref={dialog} result={result} targetTime={targetTime}/>}
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timeExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} sec {targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={isTimerActive ? handleStop : handleStart}>
          {isTimerActive ? "Stop" : "Start"}
        </button>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running" : "Time Inactive"}
        </p>
      </section>
    </>
  )
}