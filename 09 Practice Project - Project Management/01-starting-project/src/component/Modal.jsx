import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

import Button from './Button.jsx'

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return createPortal((
    <dialog className="backdrop:bg-stone-900/80 px-4 py-4 rounded-md shadow-md" ref={dialog}>
      {children}
      <form method="dialog" className="text-right">
        {/* i dont know why below "Button"(custom component) can not close the box */}
        <Button onClick={() => dialog.current.close()}>Close</Button>
      </form>
    </dialog>

  ), document.getElementById("modal-root"))
})

export default Modal