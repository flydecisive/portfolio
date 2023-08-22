import { Header } from '../../components/header/header';
import { MainResume } from '../../components/main/main-resume/main-resume';
import styles from './resume.module.css';
import { Nav } from '../../components/nav/nav';

export function ResumePage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainResume />
      <Nav />
    </div>
  );
}
