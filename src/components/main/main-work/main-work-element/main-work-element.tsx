import { NavLink } from 'react-router-dom';
import styles from './main-work-element.module.css';

export function MainWorkElement(props: {
  heading: string;
  imgSrc: string;
  link: string;
}) {
  return (
    <NavLink className={styles.link} to={props.link} target="_blank">
      <div className={styles.wrapper}>
        <img src={props.imgSrc} alt="" className={styles.img} />
        <h2 className={styles.heading}>{props.heading}</h2>
      </div>
    </NavLink>
  );
}
