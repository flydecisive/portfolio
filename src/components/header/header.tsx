import styles from './header.module.css';

export function Header() {
  return (
    <header className="header">
      <p className={styles.logo}>
        Мухин <span className={styles.orange}>Максим</span>
      </p>
    </header>
  );
}
