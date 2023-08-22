import styles from './skill.module.css';
import { SkillItem } from './skill-item/skill-item';

export function Skill(props: { title: string; skills: string[] }) {
  const elements = props.skills.map((el: string) => {
    return <SkillItem skill={el} key={el} />;
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.skills}>{elements}</div>
    </div>
  );
}
