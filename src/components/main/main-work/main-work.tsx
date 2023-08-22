import { User } from '../../user/user';
import { Title } from '../../title/title';

import styles from './main-work.module.css';
import { MainWorkElement } from './main-work-element/main-work-element';
import player from '../../../assets/img/projects/player.png';
import cards from '../../../assets/img/projects/cards.png';

export function MainWork() {
  return (
    <div className={styles.wrapper}>
      <User />
      <div className={styles.content}>
        <Title text={'Работы'} />
        <div className={styles.elements}>
          <MainWorkElement
            heading="Музыкальный плеер"
            imgSrc={player}
            link="https://github.com/flydecisive/react-music-player"
          />
          <MainWorkElement
            heading="Карточная игра"
            imgSrc={cards}
            link="https://github.com/flydecisive/card_game"
          />
        </div>
      </div>
    </div>
  );
}
