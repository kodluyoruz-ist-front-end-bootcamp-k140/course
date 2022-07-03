import { useAppContext } from "../../context"

export function Header() {
  const { state, dispatch } = useAppContext()
  

  const getCartCount = () => {
    let count = 0
    Object.keys(state.cart).forEach(x => {
      const item = state.cart[x]
      count += item.quantity ? item.quantity: 1
    })
    return count
  }
  

  const toogleCart = () => {
    dispatch({ type: "TOGGLE_CART", payload: null })
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">React Bootcamp Restaurant Menu</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          <div className="d-flex">
            <button
              onClick={toogleCart}
              className="btn btn-outline-success">Sepetim {`(${getCartCount()})`}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}