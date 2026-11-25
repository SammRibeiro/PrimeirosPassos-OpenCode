// Owns the interactive packing demo state and verification rules.
import { useState } from "react";
import { bagProfiles, getMissingItems } from "../models/bagItems";
import { steps } from "../models/steps";
export default function useHowItWorksViewModel() {
  const [activeProfileId, setActiveProfileId] = useState(bagProfiles[0].id);
  const [packed, setPacked] = useState([]);
  const [result, setResult] = useState(null);
  const activeProfile = bagProfiles.find(
    (profile) => profile.id === activeProfileId,
  );

  function selectProfile(id) {
    if (id === activeProfileId) return;

    setActiveProfileId(id);
    setPacked([]);
    setResult(null);
  }

  function toggleItem(id) {
    setPacked((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));
    setResult(null);
  }

  function checkBag() {
    const missing = getMissingItems(activeProfile.items, packed);
    setResult({
      success: !missing.length,
      message: missing.length
        ? `Ping! Você esqueceu: ${missing.map((item) => item.name).join(", ")}.`
        : `Tudo certo para a rotina de ${activeProfile.name.toLowerCase()}!`,
    });
  }

  function reset() {
    setPacked([]);
    setResult(null);
  }

  return {
    profiles: bagProfiles,
    activeProfile,
    items: activeProfile.items,
    steps,
    packed,
    packedCount: packed.length,
    result,
    selectProfile,
    toggleItem,
    checkBag,
    reset,
  };
}
