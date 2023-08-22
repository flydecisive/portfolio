import { MainContact } from '../../components/main/main-contact/main-contact';
import { Header } from '../../components/header/header';
import styles from './contact.module.css';
import { Nav } from '../../components/nav/nav';

export function ContactPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainContact />
      <Nav />
    </div>
  );
}
