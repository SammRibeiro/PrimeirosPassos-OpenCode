// Controls which FAQ item is expanded.
import { useState } from "react";
import { faqItems } from "../models/faq";
export default function useFaqViewModel() {
  const [openIndex, setOpenIndex] = useState(0);
  return {
    faqItems,
    openIndex,
    toggle: (index) => setOpenIndex((v) => (v === index ? null : index)),
  };
}
