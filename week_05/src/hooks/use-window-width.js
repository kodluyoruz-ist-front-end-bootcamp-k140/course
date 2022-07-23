import { useEffect, useState } from "react"

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    // componentWillUnMount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  return width
}