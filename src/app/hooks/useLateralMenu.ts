import { useContext } from "react";
import { LateralMenuContext } from "../contexts/LateralMenuContext";

export function useLateralMenu() {
  return useContext(LateralMenuContext);
}
