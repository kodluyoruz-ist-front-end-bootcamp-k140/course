import { useActions, useAppState } from "../../hooks"
import { AddToCart } from "../add-to-cart"
import "./style.css"

export function ShoppingCart() {
  const state = useAppState()
  const { getCartCount, getTotalPrice, removeItemFromCart } = useActions()

  const renderItem = (item) => {
    return (
      <div key={item.id} className="cart-item">
        <img src={item.image_url} />
        <div>
          <p>{item.name}</p>
          <p>Fiyat: {item.price.toFixed(2)}</p>
          <AddToCart
            item={item}
          />
        </div>
        <div className="remove-cart">
          <button onClick={() => removeItemFromCart(item)} type="button" className="btn-close"></button>
        </div>
      </div>
    )
  }

  const hasItems = Object.keys(state.cart).length > 0
  return (
    <div className="shopping-cart"
      style={{ display: state.toggleCart ? "block" : "none" }}>
      {hasItems && (
      <div className="cart-items">
        {Object.keys(state.cart).map(x => renderItem(state.cart[x]))}
        </div>
      )}
      {!hasItems ? (
        <p className="empty-cart">Sepetinize henüz bir ürün eklemediniz.</p>
      ) : (
          <div className="cart-footer">
            <label>Toplam Ürün Adedi: { getCartCount()} | Toplam Fiyat: {getTotalPrice()} TL</label>
          </div>
      )}
    </div>
  )
}