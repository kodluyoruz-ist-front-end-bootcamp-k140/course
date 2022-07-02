import { useEffect, useState } from "react"

export function useFetch(url) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  
  useEffect(() => {
    loadData()
  }, [])
  
  const loadData = () => {
    setLoading(true)
    fetch(url)
      .then(x => x.json())
      .then(response => {
        setData(response)
        setLoading(false)
    }).catch(e => {
      console.log(e)
      setLoading(false)
    })
  }
  return {
    loading,
    data
  }
}