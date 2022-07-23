export const cartStorage = {
  get: () => {
    const value = window.localStorage.getItem("cart")
    return value ? JSON.parse(value) : {}
  },
  set: (value) => window.localStorage.setItem("cart", JSON.stringify(value))
}