import { useAppContext } from "../../context"
import "./style.css"

export function ShoppingCart() {
  const { state } = useAppContext()

  const renderItem = (item) => {
    console.log(item)
    return (
      <div key={item.id} className="cart-item">
        <img src={item.image_url} />
        <div>
          <p>{item.name}</p>
          <p>Fiyat: {item.price.toFixed(2)}</p>
          <p>Adet: {item.quantity}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="shopping-cart"
      style={{ display: state.toggleCart ? "block" : "none" }}>
      {Object.keys(state.cart).map(x => renderItem(state.cart[x]))}
    </div>
  )
}