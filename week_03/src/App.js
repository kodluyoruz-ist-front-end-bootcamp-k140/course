import React from "react"
import { Header } from "./components/header"
import { Products } from "./components/products"
import { ShoppingCart } from "./components/shopping-cart"
import { AppProvider } from "./context"
import "./example-app.css"

export default function () {
  
  return (
    <AppProvider>
      <Header />
      <div className="container example-app">
        <Products />
      </div>
      <ShoppingCart />
    </AppProvider>
  )
}
