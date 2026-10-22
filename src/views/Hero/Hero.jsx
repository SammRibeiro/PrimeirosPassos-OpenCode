import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import BackpackOutside from "../../components/illustrations/BackpackOutside";
import useHeroViewModel from "../../viewmodels/useHeroViewModel";
import styles from "./Hero.module.css";
export default function Hero({ onWaitlist }) {
  const { product } = useHeroViewModel();
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.copy}>
        <Badge>● Pré-venda aberta</Badge>
        <h1>{product.slogan}</h1>
        <p>{product.description}</p>
        <div className={styles.actions}>
          <Button onClick={() => onWaitlist()}>Quero minha PingPack</Button>
          <a href="#como-funciona" className={styles.secondary}>
            Ver como funciona
          </a>
        </div>
        <small>{product.trust}</small>
      </div>
      <div className={styles.visual}>
        <BackpackOutside />
        <i className={styles.ping} />
        <i className={styles.pingTwo} />
      </div>
    </section>
  );
}
