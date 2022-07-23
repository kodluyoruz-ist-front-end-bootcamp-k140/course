import React, { useRef, useState } from "react"
import { createPortal } from "react-dom"

export const AppToastContext = React.createContext({
  showToast: () => null,
  hideToast: () => null
})

const Toast = React.forwardRef(({ info, hide }, ref) => {
  return createPortal(
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className="toast" role="alert" ref={ref}>
        <div className="toast-header">
            <strong className="me-auto">{info.title}</strong>
          <button type="button" className="btn-close" onClick={hide}></button>
        </div>
        <div className="toast-body">
          {info.description}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  )
})


export const ToastProvider = ({ children }) => {
  
  const [info, setInfo] = useState({
    title: "",
    description: ""
  })

  const ref = useRef(null)

  const hide = () => {
   ref.current.classList.remove("show")
  }

  const show = ({ title, description }) => {
    ref.current.classList.add("show")
    setInfo({ title, description })

    setTimeout(() => {
      hide()
    }, 1000);
  }
  return (
    <AppToastContext.Provider value={{
      showToast: show,
      hideToast: hide
    }}>
      <Toast
        hide={hide}
        info={info}
        ref={ref}
      />
      {children}
    </AppToastContext.Provider>
  )
}