import { AddToCart } from "../../components/add-to-cart";
import { Layout } from "../../components/layout";
import { useActions, useAppState } from "../../hooks";
import "./style.css"
export function ShoopingCartPage() {
  const { cart } = useAppState()
  const { removeItemFromCart, getCartCount, getTotalPrice } = useActions()
  const hasItems = Object.keys(cart).length > 0
  return (
    <Layout>
      {!hasItems && (
        <div>Henüz sepetinize bir ürün eklemediniz!</div>
      )}
      {Object.keys(cart).map((key, i) => {
        const item = cart[key]
        return (
          <div className="row shopping-cart-row" key={i}>
              <div className="col-2">
                <img src={item.image_url} />
              </div>
              <div className="col-10 shopping-cart-item-block">
              <p>{item.name}</p>
              <p>{`Birim Fiyat: ${item.price.toFixed(2)} TL`} </p>
              <p>{`Toplam Fiyat: ${(item.price * item.quantity).toFixed(2)} TL`} </p>
              <AddToCart item={item} />
              <div className="remove-cart">
                <button onClick={() => removeItemFromCart(item)} type="button" className="btn-close"></button>
              </div>
              </div>
          </div>
        )
      })}
      {hasItems && (
        <>
        <div className="row cart-footer">
          <div>
            <label className="total-count">{`Toplam Ürün Adedi: ${getCartCount()}`}</label>
            <label className="total-price">{`Toplam Ürün Fiyat: ${getTotalPrice()} TL`}</label>
            </div>
          </div>
          <div className="row pay-row">
            <button className="btn btn-primary btn-block">Ödeme Yap</button>
          </div>
        </>
      )}
    </Layout>
  )
}