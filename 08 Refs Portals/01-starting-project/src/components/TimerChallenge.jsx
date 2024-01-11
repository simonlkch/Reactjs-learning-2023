import { useState, useRef } from "react"
import ResultModel from "../components/ResultModel.jsx"

export default function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000)
  const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000

  const timer = useRef()
  const dialog = useRef()

  if ( remainingTime <= 0){
    clearInterval(timer.current)
    
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

  const handleReset = () => {
    // need to pass function to ResultModel, if reset time in here,
    // the finally step will reset the time and pass to ResultModel
    // do that the ResultModel get the targetTime, not the RemainingTime
    setRemainingTime(targetTime * 1000)
  }

  return (
    <>
      {<ResultModel ref={dialog} targetTime={targetTime} remainingTime={remainingTime} handleReset={handleReset}/>}
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