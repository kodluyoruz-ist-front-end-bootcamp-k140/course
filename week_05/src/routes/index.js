import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CategoryPage } from "./category"
import { HomePage } from "./home"
import { ProductPage } from "./product-detail"
import { ErrorPage } from "./error-page"
import { ShoopingCartPage } from "./shopping-cart"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shopping-cart" element={<ShoopingCartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}