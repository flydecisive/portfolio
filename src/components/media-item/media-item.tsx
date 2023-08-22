import styles from './media-item.module.css';
import { NavLink } from 'react-router-dom';

export function MediaItem({ item }: any) {
  return (
    <NavLink to={item.link} target="blank">
      <div className={styles.item}>
        <img className={styles.logo} src={item.logoPath} alt="icon" />
      </div>
    </NavLink>
  );
}
