import styles from './title.module.css';

export function Title({ text }: any) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{text}</h1>
      <hr className={styles.line} />
    </div>
  );
}
