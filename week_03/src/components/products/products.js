import { useEffect, useState } from "react"
import { useAppContext } from "../../context"
import { Loading } from "../loading"


const URL = "http://localhost:4000/api/products"

export function Products() {
  const { dispatch } = useAppContext()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setLoading(true)
    fetch(URL).then(res => res.json())
      .then(res => {
        setTimeout(() => {
          setLoading(false)
          setItems(res)
        }, 1000);
      }).catch(e => {
        console.log(e)
        setLoading(false)
      })
  }

  const addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item })
  }
  return (
    <>
      <Loading show={loading} />
      {items.map((category, index) => (
          <div className="row" key={index}>
            <h4>{category.name}</h4>
            {category.products.map((item, i) => (
            <div className="col-sm-3" key={i}>
              <div className="card" style={{
                width: '18rem'
              }}>
                <img src={item.image_url} className="card-img-top product-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div>
                      <a href="#"
                        className="btn btn-primary"
                        onClick={() => addToBasket(item)}>Sepete Ekle</a>
                      <span className="price">{item.price.toFixed(2)} {'TL'}</span>
                    </div>
                </div>
              </div>
              </div>
            ))}
          <hr />
          </div>
        ))}
    </>
  )
}