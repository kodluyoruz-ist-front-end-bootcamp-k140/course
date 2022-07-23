import { useAppContext } from "../context";

export function useActions() {
  const { state, dispatch } = useAppContext()
  
  const getCartCount = () => {
    let count = 0
    Object.keys(state.cart).forEach(x => {
      const item = state.cart[x]
      count += item.quantity ? item.quantity: 1
    })
    return count
  }

  const getTotalPrice = () => {
    let price = 0
    Object.keys(state.cart).forEach(x => {
      const item = state.cart[x]
      price += item.quantity * (parseFloat(item.price))
    })
    return price.toFixed(2)
  }

  const toogleCart = () => {
    dispatch({ type: "TOGGLE_CART", payload: null })
  }

  const addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item })
  }

  const changeItemCount = (item, value) => {
    dispatch({
      type: value,
      payload: item
    })
  }

  const removeItemFromCart = item => {
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: item
    })
  }
  
  const hasItemFromCart = (item) => {
    return state.cart[item.id] ? true: false
  }
  return {
    getCartCount,
    getTotalPrice,
    toogleCart,
    addToBasket,
    changeItemCount,
    removeItemFromCart,
    hasItemFromCart
  }
}