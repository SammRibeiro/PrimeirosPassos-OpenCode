import Section from "../../components/Section/Section";
import ProductImage from "../../components/ProductImage/ProductImage";
import BackpackOutside from "../../components/illustrations/BackpackOutside";
import BackpackInside from "../../components/illustrations/BackpackInside";
import AppScreen from "../../components/illustrations/AppScreen";
import useProductShowcaseViewModel from "../../viewmodels/useProductShowcaseViewModel";
import styles from "./ProductShowcase.module.css";
const fallbacks = {
  outside: <BackpackOutside />,
  inside: <BackpackInside />,
  app: <AppScreen />,
};
export default function ProductShowcase() {
  const vm = useProductShowcaseViewModel();
  return (
    <Section
      eyebrow="Conheça a PingPack"
      title="Bonita por fora. Esperta por dentro."
      intro="Explore cada detalhe sem tirar a mochila do lugar."
    >
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Visualizações do produto"
      >
        {vm.tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={vm.active.id === tab.id}
            className={vm.active.id === tab.id ? styles.active : ""}
            onClick={() => vm.setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className={`${styles.image} ${vm.active.id === "app" ? styles.phone : ""}`}
      >
        <ProductImage {...vm.active.image} fallback={fallbacks[vm.active.id]} />
      </div>
    </Section>
  );
}
