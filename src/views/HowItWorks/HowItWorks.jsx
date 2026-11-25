import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import useHowItWorksViewModel from "../../viewmodels/useHowItWorksViewModel";
import styles from "./HowItWorks.module.css";
export default function HowItWorks() {
  const vm = useHowItWorksViewModel();
  return (
    <Section
      id="como-funciona"
      eyebrow="Simples de verdade"
      title="Quatro passos e nenhum carregador esquecido"
    >
      <ol className={styles.steps}>
        {vm.steps.map((step, i) => (
          <li key={step}>
            <span>{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <div className={styles.demo}>
        <div>
          <span className={styles.kicker}>Demo interativa</span>
          <h3>Arrume sua mochila</h3>
          <p>
            Escolha sua rotina, marque o que você colocou e deixe a PingPack
            conferir.
          </p>
        </div>
        <div
          className={styles.profiles}
          role="group"
          aria-label="Perfil de organização"
        >
          {vm.profiles.map((profile) => (
            <button
              key={profile.id}
              type="button"
              aria-pressed={vm.activeProfile.id === profile.id}
              className={
                vm.activeProfile.id === profile.id ? styles.activeProfile : ""
              }
              onClick={() => vm.selectProfile(profile.id)}
            >
              {profile.name}
            </button>
          ))}
        </div>
        <div className={styles.listHeader}>
          <strong>Itens para {vm.activeProfile.name.toLowerCase()}</strong>
          <span aria-live="polite">
            {vm.packedCount} de {vm.items.length} adicionados
          </span>
        </div>
        <div className={styles.checklist}>
          {vm.items.map((item) => (
            <label
              key={item.id}
              className={vm.packed.includes(item.id) ? styles.checked : ""}
            >
              <input
                type="checkbox"
                checked={vm.packed.includes(item.id)}
                onChange={() => vm.toggleItem(item.id)}
              />
              <span>{vm.packed.includes(item.id) ? "✓" : "○"}</span>
              {item.name}
            </label>
          ))}
        </div>
        <div className={styles.actions}>
          <Button onClick={vm.checkBag}>Fechar zíper e sair</Button>
          <Button variant="secondary" onClick={vm.reset}>
            Reiniciar
          </Button>
        </div>
        {vm.result && (
          <div
            role="status"
            className={`${styles.result} ${vm.result.success ? styles.success : styles.warning}`}
          >
            {vm.result.message}
          </div>
        )}
      </div>
    </Section>
  );
}
