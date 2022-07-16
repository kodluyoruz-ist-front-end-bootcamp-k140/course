import { useEffect, useState } from "react"
import { useCartStorage } from "../../hooks"
import { AddToCart } from "../add-to-cart"
import { Loading } from "../loading"
import "./style.css"

const URL = "http://localhost:4000/api/products"

export function Products() {

  useCartStorage()
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
          setItems(res.map(x => {
            x.quantity = 0
            return x
          }))
        }, 1000);
      }).catch(e => {
        console.log(e)
        setLoading(false)
      })
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
                      <AddToCart
                      item={item}
                    />
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