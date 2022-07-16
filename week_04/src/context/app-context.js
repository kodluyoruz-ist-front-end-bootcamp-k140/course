import { createContext, useContext, useReducer } from "react"
import { cartStorage } from "../utils"
const items = cartStorage.get()

const initialState = {
  cart: items,
  toggleCart: false
}

const AppContext = createContext({
  state: initialState,
  dispatch: () => null
})

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext)
  return {
    state,
    dispatch,
  }
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_TO_BASKET":
      if (state.cart[payload.id]) {
        payload.quantity = payload.quantity + 1
      } else {
        payload.quantity = 1
      }
      return {...state, cart: {...state.cart, [payload.id]: payload}}
  
    case "TOGGLE_CART": {
      return {...state, toggleCart: !state.toggleCart}
    }
    case "MINUS_ITEM_FROM_CART":
      if (payload.quantity > 1) {
        payload.quantity--;
        return { ...state, cart: { ...state.cart, [payload.id]: payload } }
      } else {
        delete state.cart[payload.id]
        return {...state, cart: { ...state.cart }}
      }
    case "PLUS_ITEM_FROM_CART":
      payload.quantity++;
      return { ...state, cart: { ...state.cart, [payload.id]: payload } }
    case "REMOVE_ITEM_FROM_CART": {
       delete state.cart[payload.id]
      return {...state, cart: { ...state.cart }}
    }
    default:
      return state
  }
}

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{
      state,
      dispatch
    }}>
      {props.children}
    </AppContext.Provider>
  )
}