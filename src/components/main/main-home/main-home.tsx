import { User } from '../../user/user';
import { Title } from '../../title/title';
import { MainHomeElement } from './main-home-element/main-home-element';
import { contentHome } from '../../../consts/consts';

import styles from './main-home.module.css';

export function MainHome() {
  return (
    <div className={styles.wrapper}>
      <User />
      <div className={styles.content}>
        <Title text={'Обо мне'} />
        <p className={styles.text}>
          Привет! Я рад приветствовать вас в моем портфолио. Я увлеченный и
          разносторонний WEB-разработчик с большим интересом к изучению новейших
          передовых технологий. Мое путешествие в мир WEB-разработки началось с
          курсов sky.pro, и Я постоянно стремлюсь совершенствовать свои навыки и
          учитывать новые тенденции в отрасли.
        </p>
        <h2 className={styles.heading}>Что я делаю!</h2>
        <div className={styles.elements}>
          <MainHomeElement
            primary={true}
            content={contentHome[0]}
          ></MainHomeElement>
          <MainHomeElement
            primary={false}
            content={contentHome[1]}
          ></MainHomeElement>
          {/* <MainHomeElement
            primary={false}
            content={contentHome[3]}
          ></MainHomeElement>
          <MainHomeElement
            primary={true}
            content={contentHome[4]}
          ></MainHomeElement> */}
        </div>
      </div>
    </div>
  );
}
