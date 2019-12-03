import axios from 'axios';

const pixabayKey = '&key=14480712-b9ee94ec7c2d056c8d193af52';
export default function getData(searchValue, pageNumber) {
  return axios(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12${pixabayKey}`,
  ).then(({ data }) => data.hits);
}

// const refs{
// form: document.getElementById("searchForm");
// gallery: document.querySelector(".gallery");

// }

// const baseUrl = 'https://pixabay.com/api/&key=14480712-b9ee94ec7c2d056c8d193af52';
// getImg() {
//     const getData = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}`;
//     return axios(baseUrl + reguest);
//   },

//   getImg().then
