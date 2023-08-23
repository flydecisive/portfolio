import { useState } from 'react';
import { User } from '../../user/user';
import { Title } from '../../title/title';
import { MainContactElement } from './main-contact-element/main-contact-element';
import { contentContact } from '../../../consts/consts';
import { NavLink } from 'react-router-dom';
import emailjs, { init } from '@emailjs/browser';
import { useRef } from 'react';

import styles from './main-contact.module.css';

export function MainContact() {
  init('LkN6MTf9CK9MkYpyp');
  const form = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formSubmittionHandler = (event: any) => {
    event.preventDefault();
    if (form.current !== null) {
      emailjs
        .sendForm('default_service', 'template_2qyxgyg', form.current)
        .then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
          },
          function (error) {
            console.log('FAILED...', error);
          }
        );
    }
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
        <form className={styles.form} ref={form}>
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
