import { Header } from '../../components/header/header';
import { MainWork } from '../../components/main/main-work/main-work';
import styles from './work.module.css';
import { Nav } from '../../components/nav/nav';

export function WorkPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainWork />
      <Nav />
    </div>
  );
}
