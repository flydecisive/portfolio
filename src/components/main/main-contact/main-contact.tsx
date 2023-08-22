import { useState } from 'react';
import { User } from '../../user/user';
import { Title } from '../../title/title';
import { MainContactElement } from './main-contact-element/main-contact-element';
import { contentContact } from '../../../consts/consts';
import { NavLink } from 'react-router-dom';
import { sendForm } from '../../../api/api';

import styles from './main-contact.module.css';

export function MainContact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    sent: false,
    error: null,
  });

  const formSubmittionHandler = (event: any) => {
    event.preventDefault();
    sendForm(formState);
  };
  return (
    <div className={styles.wrapper}>
      <User />
      <div className={styles.content}>
        <Title text={'Контакты'} />
        <div className={styles.contacts}>
          <NavLink className={styles.link} to={'tel: +79044262217'}>
            <MainContactElement primary={true} content={contentContact[0]} />
          </NavLink>
          <NavLink className={styles.link} to={'mailto: flydecisive@yandex.ru'}>
            <MainContactElement primary={false} content={contentContact[1]} />
          </NavLink>
        </div>
        <form action="send.php" method="POST" className={styles.form}>
          <p>
            Я всегда открыт к обсуждениям, напишите мне и я свяжусь с вами. Либо
            вы можете самостоятельно связаться со мной.
          </p>
          <input
            type="text"
            placeholder="Ваше имя"
            name="name"
            required
            className={styles.input}
            onChange={(event) => {
              setFormState({
                ...formState,
                name: event.target.value,
              });
            }}
          />
          <input
            type="text"
            placeholder="Почта"
            name="email"
            required
            className={styles.input}
            onChange={(event) => {
              setFormState({
                ...formState,
                email: event.target.value,
              });
            }}
          />
          <input
            className={styles.input}
            name="message"
            placeholder="Сообщение"
            id="message"
            required
            onChange={(event) => {
              setFormState({
                ...formState,
                message: event.target.value,
              });
            }}
          />
          <button
            type="submit"
            className={styles.button}
            onClick={(event) => formSubmittionHandler(event)}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
