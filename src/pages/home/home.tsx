import { MainHome } from '../../components/main/main-home/main-home';
import { Header } from '../../components/header/header';
import styles from './home.module.css';
import { Nav } from '../../components/nav/nav';

export function HomePage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainHome />
      <Nav />
    </div>
  );
}
