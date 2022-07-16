import { useEffect } from "react";
import { useAppContext } from "../context/app-context";
import { cartStorage } from "../utils";

export function useCartStorage() {
  const { state } = useAppContext();

  useEffect(() => {
    cartStorage.set(state.cart)
  }, [state.cart])

  return {
    getItem: () => cartStorage.get()
  }
}