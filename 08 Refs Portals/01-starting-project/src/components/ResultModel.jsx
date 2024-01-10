import { forwardRef } from "react"

const ResultModel = forwardRef(function ({ result, targetTime }, ref) {
    return (
        <dialog ref={ref} className="result-modal">
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