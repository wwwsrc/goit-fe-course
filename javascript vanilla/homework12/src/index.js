import axios from 'axios';
import countryList from './template/countryList.hbs';
import country from './template/country.hbs';
import 'pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import './styles/styles.css';
import './styles/hbsStyle.css';
const debounce = require('lodash.debounce');

('use strict');
const input = document.querySelector('#input');
const container = document.querySelector('.container');

const getCountry = name => {
  console.log(input.value);
  return axios.get(`https://restcountries.eu/rest/v2/name/${input.value}`);
};
input.addEventListener('input', debounce(inputHandler, 500));
function inputHandler(e) {
  let list;
  getCountry(name)
    .then(({ data }) => {
      console.log(data);
      if (data.length === 1) {
        console.log('one country');
        return (container.innerHTML = list = country(data));
      } else if (data.length > 10) {
        console.log('to many country');
        container.innerHTML = '';
        PNotify.alert('Too many matches found, please specify your request!');
      } else if (data.length <= 10 && data.length > 1) {
        console.log('list of country');
        container.innerHTML = list = countryList(data);
      } else if (!data === false) {
        console.log('!!!!!!!!!!!!');
      }
    })
    .catch(
      error => PNotify.alert('Such country is not exist!'),
      (container.innerHTML = ''),
    );
}
