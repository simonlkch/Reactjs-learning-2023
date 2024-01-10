import { useRef, forwardRef, useImperativeHandle } from "react"

const ResultModel = forwardRef(function ({ result, targetTime }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return{
      show(){
        dialog.current.showModal()
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>The target is {targetTime} second(s)</p>
      <p>You stop the timer with x second(s) left</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModel