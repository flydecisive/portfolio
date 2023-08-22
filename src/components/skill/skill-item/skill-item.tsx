import styles from './skill-item.module.css';

export function SkillItem(props: { skill: string }) {
  return <div className={styles.item}>{props.skill}</div>;
}
