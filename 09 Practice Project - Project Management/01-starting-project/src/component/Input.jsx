import { forwardRef } from "react"

export default forwardRef(function Input({ label, textarea, ...props }, ref) {
  const textClass = "bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-stone-500"

  return (
    <p>
      <label className="w-full block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">{label}</label>
      {textarea ? <textarea className={textClass} {...props} ref={ref}></textarea> : <input className={textClass} {...props} ref={ref}></input>}
    </p>
  )
})