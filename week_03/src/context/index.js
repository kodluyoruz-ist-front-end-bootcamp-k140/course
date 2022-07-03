import { createContext, useContext, useReducer } from "react"

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

const initialState = {
  cart: {},
  toggleCart: false
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