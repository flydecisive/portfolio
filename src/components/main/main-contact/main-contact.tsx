import { useState } from 'react';
import { User } from '../../user/user';
import { Title } from '../../title/title';
import { MainContactElement } from './main-contact-element/main-contact-element';
import { contentContact } from '../../../consts/consts';
import { NavLink } from 'react-router-dom';
import emailjs, { init } from '@emailjs/browser';
import { useRef } from 'react';

import styles from './main-contact.module.css';

const validateEmail = (email: string) => {
  const emailMatch = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return emailMatch ? true : false;
};

export function MainContact() {
  init('LkN6MTf9CK9MkYpyp');
  const form: any = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formSubmitionHandler = (event: any) => {
    const emailInput: HTMLInputElement = document.querySelector(
      'input[name="email"]'
    )!;
    const nameInput: HTMLInputElement =
      document.querySelector('input[name="name"]')!;
    const messageInput: HTMLInputElement = document.querySelector(
      'input[name="message"]'
    )!;
    event.preventDefault();

    if (
      formState.name.length !== 0 &&
      formState.email.length !== 0 &&
      validateEmail(formState.email) &&
      formState.message.length !== 0
    ) {
      emailInput.style.border = 'none';
      emailInput.style.borderBottom = '2px solid #b5b5b5';

      messageInput.style.border = 'none';
      messageInput.style.borderBottom = '2px solid #b5b5b5';

      nameInput.style.border = 'none';
      nameInput.style.borderBottom = '2px solid #b5b5b5';

      if (form.current !== null) {
        setLoading(true);
        emailjs
          .sendForm('default_service', 'template_2qyxgyg', form.current)
          .then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text);
            },
            function (error) {
              console.log('FAILED...', error);
            }
          )
          .finally(() => {
            const formEl: HTMLFormElement = document.querySelector(
              'form[name="contact"]'
            )!;
            formEl.reset();

            setFormState({ ...formState, email: '', name: '', message: '' });

            setLoading(false);
          });
      }
    } else {
      if (!validateEmail(formState.email) || formState.email.length === 0) {
        emailInput.style.border = '2px solid red';
      } else {
        emailInput.style.border = 'none';
        emailInput.style.borderBottom = '2px solid #b5b5b5';
      }

      if (formState.message.length === 0) {
        messageInput.style.border = '2px solid red';
      } else {
        messageInput.style.border = 'none';
        messageInput.style.borderBottom = '2px solid #b5b5b5';
      }

      if (formState.name.length === 0) {
        nameInput.style.border = '2px solid red';
      } else {
        nameInput.style.border = 'none';
        nameInput.style.borderBottom = '2px solid #b5b5b5';
      }
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
        <form name="contact" className={styles.form} ref={form}>
          <p>
            Я всегда открыт к обсуждениям, напишите мне и я свяжусь с вами. Либо
            вы можете самостоятельно связаться со мной.
          </p>
          <input
            type="text"
            placeholder="Ваше имя"
            name="name"
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
            onClick={(event) => formSubmitionHandler(event)}
            disabled={loading}
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
}
