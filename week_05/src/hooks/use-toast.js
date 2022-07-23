import { useContext } from "react";
import { AppToastContext } from "../context";

export const useToast = () => useContext(AppToastContext)