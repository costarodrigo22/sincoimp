import { useContext } from "react";
import { AdvantagesContext } from "../contexts/AdvantagesContext";

export function useAdvantages() {
  return useContext(AdvantagesContext);
}
