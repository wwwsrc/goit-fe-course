import gallery from "./gallery-items.js";

const ul = document.querySelector(".gallery");
let string = "";
gallery.forEach(elem => {
  string += `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${elem.original}"
    >
      <img
        class="gallery__image"
        src="${elem.preview}"
        data-source="${elem.original}"
        alt="${elem.description}"
      />

      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;
  //   console.log(string);
});

ul.insertAdjacentHTML("afterbegin", string);

const ulListner = document.querySelector(".js-gallery");
const modalListner = document.querySelector(".lightbox");
const modal = document.querySelector(".js-lightbox");
const fullImg = document.querySelector(".lightbox__image");

function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName != "IMG") {
    return;
  }
  modal.classList.add("is-open");
  const bigImgTake = event.target.dataset.source;
  const altTake = event.target.getAttribute("alt");
  fullImg.setAttribute("src", `${bigImgTake}`);
  fullImg.setAttribute("alt", `${altTake}`);
}

function hideModal(event) {
  if (
    event.target.dataset.action != "close-lightbox" &&
    event.target.nodeName != "I" &&
    event.target.classList != "lightbox__content" &&
    event.code != "Escape"
  )
    return;
  modal.classList.remove("is-open");
  fullImg.setAttribute("src", `#`);
}

ulListner.addEventListener("click", showModal);
modalListner.addEventListener("click", hideModal);
document.addEventListener("keydown", hideModal);

//slider control
/* document.addEventListener("keydown", ctrlSlider);

const imgArr = gallery.map(elem => elem.original);
console.log(imgArr.length - 1);

function ctrlSlider(event) {
  let imgCurrentLink = fullImg.getAttribute("src");
  console.log(imgCurrentLink);
  console.log(event.keyCode);

  if (event.code === "ArrowRight") {
    imgArr.forEach((item, i) => imgCurrentLink === item);
    console.log(item);
    fullImg.setAttribute("src", imgArr[i]);
  }

  if (event.code === "ArrowLeft") {
  }
} */
