import getData from './services/apiServices.js';
import photocard from './template/photocard.hbs';
import 'pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import './styles/styles.css';
// import 'material-design-icons';
// import './styles/hbsStyle.css';
// import { stat } from 'fs';
//const debounce = require('lodash.debounce');

('use strict');

const state = {
  searchValue: '',
  pageNumber: 1,
};

const refs = {
  form: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  input: document.querySelector('.input'),
  button: document.querySelector('.morePhoto'),
};
/* function getDataGlobal(searchValue, pageNumber) {
  const DATA = getData(state.searchValue, state.pageNumber);
  console.log(DATA);
  let string = photocard(DATA);

  console.log(string);
  refs.gallery.insertAdjacentHTML('beforeend', string);
} */
function getDataGlobal(searchValue, pageNumber) {
  getData(searchValue, pageNumber)
    .then(data => {
      let string = photocard(data);
      return string;
    })
    .then(string => refs.gallery.insertAdjacentHTML('beforeend', string));
}
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  state.searchValue = e.target.query.value;
  state.pageNumber = 1;
  getDataGlobal(state.searchValue, state.pageNumber);
});

refs.button.addEventListener('click', e => {
  state.pageNumber += 1;
  getDataGlobal(state.searchValue, state.pageNumber);
  setTimeout(() => {
    let pos = refs.button.offsetTop;
    console.log(pos);
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }, 500);
});

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const perPage = 12;
// let page = 1;
// let cat = 'cat';

// const getImg = () => {
//   return axios(
//     `?image_type=photo&orientation=horizontal&q=${cat}&page=${page}&per_page=${perPage}&key=14480712-b9ee94ec7c2d056c8d193af52`,
//   )
// };

// getImg().then(({ data }) => {
//   console.log(data.hits);
// });

// picDraw();

//const insertCard =
