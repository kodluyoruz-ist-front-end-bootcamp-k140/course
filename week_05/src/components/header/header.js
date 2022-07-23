import { Link } from "react-router-dom";
import { useActions } from "../../hooks"

export function Header() {
  const { getCartCount } = useActions();
  
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>React Bootcamp Restaurant Menu</Link>
        <div className="" id="">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <Link
              to={"/shopping-cart"}
              className="btn btn-outline-success">Sepetim {`(${getCartCount()})`}</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}