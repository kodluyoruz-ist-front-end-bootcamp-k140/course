import { useAppContext } from "../context";

export function useAppState() {
  const { state } = useAppContext()
  return state
}