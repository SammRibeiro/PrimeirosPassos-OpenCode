// Controls the selected product representation.
import { useState } from "react";
const tabs = [
  { id: "outside", label: "Por fora" },
  { id: "inside", label: "Por dentro" },
  { id: "app", label: "No app" },
];
export default function useProductShowcaseViewModel() {
  const [activeId, setActiveId] = useState("outside");
  return { tabs, active: tabs.find((tab) => tab.id === activeId), setActiveId };
}
