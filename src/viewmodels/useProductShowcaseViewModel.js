// Controls the selected product representation.
import { useState } from "react";
import { images } from "../models/images";
const tabs = [
  { id: "outside", label: "Por fora", image: images.outside },
  { id: "inside", label: "Por dentro", image: images.inside },
  { id: "app", label: "No app", image: images.app },
];
export default function useProductShowcaseViewModel() {
  const [activeId, setActiveId] = useState("outside");
  return { tabs, active: tabs.find((tab) => tab.id === activeId), setActiveId };
}
