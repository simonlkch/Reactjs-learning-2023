import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"

const ResultModel = forwardRef(function ({ targetTime, remainingTime, handleReset }, ref) {
  const dialog = useRef()
  const userLost = remainingTime <= 0
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  const score =  Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return{
      show(){
        dialog.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lose</h2>}
      {!userLost && <h2>You Score: {score}</h2>}
      <p>The target is {targetTime} second(s)</p>
      <p>You stop the timer with { formattedRemainingTime} second(s) left</p>
      <form method="dialog">
        <button onClick={handleReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModel