import styles from './user.module.css';
import { MediaItem } from '../media-item/media-item';
import { media } from '../../consts/consts';
import { NavLink } from 'react-router-dom';
import phoneLogo from '../../assets/img/gridicons_phone.svg';
import mailLogo from '../../assets/img/mdi_email-open-outline.svg';
import locationLogo from '../../assets/img/ion_location-outline.svg';
import downloadLogo from '../../assets/img/material-symbols_download.svg';
import avatar from '../../assets/img/avatar.jpeg';
const resume: any = require('../../static/resume.pdf');

export function User() {
  const mediaItems = media?.map((item) => {
    return <MediaItem item={item} key={item.name} />;
  });

  return (
    <div className={styles.wrapper}>
      <img src={avatar} className={styles.avatar} alt="avatar" />
      <h2 className={styles.title}>Мухин Максим</h2>
      <p className={styles.text}>WEB-разработчик</p>
      <div className={styles.media}>{mediaItems}</div>
      <div className={styles.contacts}>
        <div className={styles['contact-item']}>
          <img src={phoneLogo} alt="phone logo" />
          <div className={styles['contact-content']}>
            <h3 className={styles['contact-title']}>Телефон</h3>
            <NavLink className={styles.link} to={'tel: +79044262217'}>
              <p className={styles['contact-value']}>+79044262217</p>
            </NavLink>
          </div>
        </div>
        <hr className={styles.line} />

        <div className={styles['contact-item']}>
          <img src={mailLogo} alt="phone logo" />
          <div className={styles['contact-content']}>
            <h3 className={styles['contact-title']}>Email</h3>
            <NavLink
              className={styles.link}
              to={'mailto: flydecisive@yandex.ru'}
            >
              <p className={styles['contact-value']}>flydecisive@yandex.ru</p>
            </NavLink>
          </div>
        </div>
        <hr className={styles.line} />

        <div className={styles['contact-item']}>
          <img src={locationLogo} alt="phone logo" />
          <div className={styles['contact-content']}>
            <h3 className={styles['contact-title']}>Локация</h3>
            <p className={styles['contact-value']}>Россия, Волгоград</p>
          </div>
        </div>

        <hr className={styles.line} />

        <NavLink
          to={resume}
          download
          rel="noopener noreferrer"
          className={styles['download-link']}
          reloadDocument
        >
          <button className={styles.button}>
            <img src={downloadLogo} alt="download" /> Скачать резюме
          </button>
        </NavLink>
      </div>
    </div>
  );
}
