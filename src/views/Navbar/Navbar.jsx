import Button from "../../components/Button/Button";
import useNavbarViewModel from "../../viewmodels/useNavbarViewModel";
import styles from "./Navbar.module.css";
export default function Navbar({ onWaitlist }) {
  const vm = useNavbarViewModel();
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="#inicio" className={styles.logo} onClick={vm.closeMenu}>
          <span>◉</span>
          {vm.product.name}
        </a>
        <button
          className={styles.hamburger}
          onClick={vm.toggleMenu}
          aria-expanded={vm.isOpen}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`${styles.links} ${vm.isOpen ? styles.open : ""}`}>
          {vm.menuItems.map((item) => (
            <a key={item.href} href={item.href} onClick={vm.closeMenu}>
              {item.label}
            </a>
          ))}
          <Button
            onClick={() => {
              vm.closeMenu();
              onWaitlist();
            }}
          >
            Entrar na lista
          </Button>
        </div>
      </nav>
    </header>
  );
}
