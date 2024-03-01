import { useContext } from "react";
import { BenefitsContext } from "../contexts/BenefitsContext";

export function useBenefits() {
  return useContext(BenefitsContext);
}
