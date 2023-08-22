import githubLogo from '../assets/img/github-142-svgrepo-com.svg';
import telegramLogo from '../assets/img/telegram-svgrepo-com.svg';
import vkLogo from '../assets/img/vk-1-logo-svgrepo-com.svg';
import codeIcon from '../assets/img/code-icon.svg';
import mentorIcon from '../assets/img/Mentor-icon.svg';
import phoneLogo from '../assets/img/Phone.svg';
import emailLogo from '../assets/img/fluent-emoji-high-contrast_e-mail.svg';

// media
export interface Media {
  name: string;
  logoPath: string;
  link: string;
}

export const media: Media[] = [
  {
    name: 'github',
    logoPath: githubLogo,
    link: 'https://github.com/flydecisive',
  },
  {
    name: 'telegram',
    logoPath: telegramLogo,
    link: 'https://t.me/flydecisive_original',
  },
  {
    name: 'vk',
    logoPath: vkLogo,
    link: 'https://vk.com/flydecisive',
  },
];

export const contentHome = [
  {
    heading: 'WEB-разработка',
    img: codeIcon,
    text: `Как разработчик, я больше
    всего восхищаюсь мощью и гибкостью
    React . Я всегда стремлюсь погрузиться в новые
    проекты, которые используют React и
    открывать для себя инновационные способы создания быстрых,
    масштабируемых и удобных в использовании сайтов и приложений.`,
  },
  {
    heading: 'Менторство',
    img: mentorIcon,
    text: `В качестве ментора я помогал своим одногруппникам с курса делать домашнее задание. 
    Если брать прошлый опыт, то в банке ВТБ я обучал вновь прибывших сотрудников.`,
  },
];

export const contentContact = [
  {
    heading: 'Phone:',
    img: phoneLogo,
    text: '+79044262217',
  },
  {
    heading: 'Email:',
    img: emailLogo,
    text: 'flydecisive@yandex.ru',
  },
];

export const education = [
  {
    years: '2022 - по н.в.',
    place: 'sky.pro',
    value: 'WEB-разработка',
  },
  {
    years: '2014 - не закончил',
    place: 'ВолгГТУ',
    value: 'Учился на 3 разных специальностях',
  },
];

export const experience = [
  {
    years: '2022 - по н.в.',
    place: 'sky.pro',
    value: 'WEB-разработка',
  },
  {
    years: '2020 - 2022',
    place: 'Банк ВТБ',
    value: 'Отдел автокредитования',
  },
];

export const hardSkills = [
  'React',
  'Git',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'Flex / Grid',
  'Redux',
  'Webpack',
  'API',
  'HTML5',
  'CSS',
];

export const softSkills = [
  'Обучаемость',
  'Коммуникабельность',
  'Усидчивость',
  'Тайм-менеджмент',
  'Командная работа',
  'Проактивность',
  'Гибкость',
];
