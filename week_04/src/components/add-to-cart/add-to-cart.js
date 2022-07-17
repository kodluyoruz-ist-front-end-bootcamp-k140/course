import { useActions, useAppState, useToast } from "../../hooks"

export function AddToCart({ item }) {
  const { hasItemFromCart, changeItemCount, addToBasket } = useActions()
  const { showToast } = useToast()
  const { cart } = useAppState()
  if (hasItemFromCart(item)) {
    item.quantity = cart[item.id].quantity;
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={() => changeItemCount(item,"MINUS_ITEM_FROM_CART")} type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-primary">Adet:{item.quantity}</button>
        <button onClick={() => changeItemCount(item, "PLUS_ITEM_FROM_CART")} type="button" className="btn btn-primary">+</button>
      </div>
    )
  }

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        addToBasket(item)
        showToast({ title: item.name, description: "Ürün ekleme işlemi başarıyla gerçekleşti."})
      }}>Sepete Ekle</button>
  )
}