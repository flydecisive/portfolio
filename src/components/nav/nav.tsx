import styles from './nav.module.css';
import { ReactComponent as HomeLogo } from '../../assets/img/Home-icon.svg';
import { ReactComponent as ResumeLogo } from '../../assets/img/resume-icon.svg';
import { ReactComponent as WorkLogo } from '../../assets/img/work-icon.svg';
import { ReactComponent as ContactLogo } from '../../assets/img/contact-icon.svg';
import { usePageContext } from '../../contexts';
import { useSelector } from 'react-redux/es/hooks/useSelector';

// Сделать состояние для нажатах кнопок

export function Nav() {
  const { toggleClick } = usePageContext();

  const navState: any = useSelector((store: any) => store.nav);

  return (
    <div className={styles.nav}>
      <ul className={styles.items}>
        <li
          id="0"
          className={
            navState[0]
              ? `${styles.item} ${styles['active-item']}`
              : `${styles.item}`
          }
          onClick={(e) => {
            toggleClick(e);
          }}
        >
          <HomeLogo
            className={
              navState[0]
                ? `${styles.logo} ${styles['active-logo']}`
                : `${styles.logo}`
            }
          />
          <p
            className={
              navState[0]
                ? `${styles.text} ${styles['active-text']}`
                : `${styles.text}`
            }
          >
            Домашняя
          </p>
        </li>

        <li
          id="1"
          className={
            navState[1]
              ? `${styles.item} ${styles['active-item']}`
              : `${styles.item}`
          }
          onClick={(event) => {
            toggleClick(event);
          }}
        >
          <ResumeLogo
            className={
              navState[1]
                ? `${styles.logo} ${styles['active-logo']}`
                : `${styles.logo}`
            }
          />
          <p
            className={
              navState[1]
                ? `${styles.text} ${styles['active-text']}`
                : `${styles.text}`
            }
          >
            Резюме
          </p>
        </li>

        <li
          id="2"
          className={
            navState[2]
              ? `${styles.item} ${styles['active-item']}`
              : `${styles.item}`
          }
          onClick={(event) => {
            toggleClick(event);
          }}
        >
          <WorkLogo
            className={
              navState[2]
                ? `${styles.logo} ${styles['active-logo']}`
                : `${styles.logo}`
            }
          />
          <p
            className={
              navState[2]
                ? `${styles.text} ${styles['active-text']}`
                : `${styles.text}`
            }
          >
            Работы
          </p>
        </li>

        <li
          id="3"
          className={
            navState[3]
              ? `${styles.item} ${styles['active-item']}`
              : `${styles.item}`
          }
          onClick={(event) => {
            toggleClick(event);
          }}
        >
          <ContactLogo
            className={
              navState[3]
                ? `${styles.logo} ${styles['active-logo']}`
                : `${styles.logo}`
            }
          />
          <p
            className={
              navState[3]
                ? `${styles.text} ${styles['active-text']}`
                : `${styles.text}`
            }
          >
            Контакты
          </p>
        </li>
      </ul>
    </div>
  );
}
