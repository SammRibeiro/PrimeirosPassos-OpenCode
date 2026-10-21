// Formats plan prices and controls the payment display mode.
import { useState } from "react";
import { plans } from "../models/plans";
export default function usePricingViewModel() {
  const [installments, setInstallments] = useState(false);
  const formatPrice = (plan) =>
    installments
      ? `10x de R$ ${(plan.price / 10).toFixed(2).replace(".", ",")}`
      : `R$ ${plan.price}`;
  return {
    plans,
    installments,
    togglePayment: () => setInstallments((v) => !v),
    formatPrice,
  };
}
