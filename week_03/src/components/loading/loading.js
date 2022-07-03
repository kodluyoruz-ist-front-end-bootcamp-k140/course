
import "./style.css"
export function Loading({ show }) {
  if (!show) return null
  
  return (
    <div className="loading-wrapper">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}