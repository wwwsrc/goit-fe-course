import menuList from './menu.json';
import template from './template.hbs';
import './styles.css';

const refs = {
  menuItems: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  switcher: document.querySelector('#theme-switch-control'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const string = template(menuList);
refs.menuItems.innerHTML = string;

refs.body.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.switcher.checked = true;
} else refs.body.setAttribute('class', 'light-theme');

refs.body.addEventListener('change', () => {
  if (refs.switcher.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.setAttribute('class', 'dark-theme');
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.setAttribute('class', 'light-theme');
  }
});
