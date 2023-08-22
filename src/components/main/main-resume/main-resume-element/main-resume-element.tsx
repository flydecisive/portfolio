import { MainResumeItem } from '../main-resume-item/main-resume-item';

import styles from './main-resume-element.module.css';

export interface Content {
  years: string;
  place: string;
  value: string;
}

export function MainResumeElement(props: {
  primary: [boolean, boolean];
  heading: string;
  logo: string;
  content: Content[];
}) {
  return (
    <div className="wrapper">
      <div className={styles.head}>
        <img src={props.logo} alt="" />
        <h2 className={styles.heading}>{props.heading}</h2>
      </div>
      <div className={styles.items}>
        <MainResumeItem
          primary={props.primary[0]}
          content={props.content[0]}
        ></MainResumeItem>
        <MainResumeItem
          primary={props.primary[1]}
          content={props.content[1]}
        ></MainResumeItem>
      </div>
    </div>
  );
}
