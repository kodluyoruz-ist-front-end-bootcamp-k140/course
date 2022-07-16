import React from "react"
import { ErrorBoundary } from "./components/error-boundary"
import { Header } from "./components/header"
import { Products } from "./components/products"
import { ShoppingCart } from "./components/shopping-cart"
import { AppProvider } from "./context"
import { ToastProvider } from "./context/toast"
import "./example-app.css"

export default function () {
  
  return (
    <>
        <Header />
        <div className="container example-app">
          <Products />
        </div>
        <ErrorBoundary>
          <ShoppingCart />
          </ErrorBoundary>
    </>
  )
}
