"use strict";

//*-*-*-*-*-*-*-*-*-* TASK #1 *-*-*-*-*-*-*-*-*

const categories = document.querySelectorAll(".item");

console.log(`В списке ${categories.length} категории`);

const items = document.querySelectorAll("#categories .item");
console.log(items);
const it = document.querySelectorAll(".item");
console.log(it);
items.forEach(element => {
  //console.log(element);
  const title = element.querySelector("h2");
  const el = element.querySelectorAll("ul li");
  //console.log(el);
  console.log("Категория: " + title.textContent);
  console.log(`Количество элементов: ${el.length}`);
});

//*-*-*-*-*-*-*-*-*-* TASK #2 *-*-*-*-*-*-*-*-*

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const ingredientsUl = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach(el => {
  const ingrLi = document.createElement("li");
  ingrLi.textContent = el;
  fragment.append(ingrLi);
  console.log(ingrLi);
});

ingredientsUl.appendChild(fragment);

//*-*-*-*-*-*-*-*-*-* TASK #3 *-*-*-*-*-*-*-*-*
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];
let string = "";
images.forEach(elem => {
  const img = document.createElement("img");
  string += `<li><img class="img" src="${elem.url}" alt="${elem.alt}"></li>`;
  img.classList.add("img");
  console.log(string);
});

const gallery = document.querySelector("#gallery");
// gallery.appendChild(fragment);
gallery.insertAdjacentHTML("afterbegin", string);

//селектор атрибута a[href="stuff"]///

//*-*-*-*-*-*-*-*-*-* TASK #4 *-*-*-*-*-*-*-*-*
let counterValue = 0;

const element = document.querySelector("#counter");
let countertxt = document.querySelector("span");

const increment = a => {
  counterValue += 1;
  countertxt.textContent = counterValue;
};
const decrement = b => {
  counterValue -= 1;
  countertxt.textContent = counterValue;
};

element.addEventListener("click", e => {
  if (
    e.target.nodeName === "BUTTON" &&
    e.target.dataset.action === "decrement"
  ) {
    decrement();
  }
  if (
    e.target.nodeName === "BUTTON" &&
    e.target.dataset.action === "increment"
  ) {
    increment();
  }
});

//*-*-*-*-*-*-*-*-*-* TASK #5 *-*-*-*-*-*-*-*-*

const inpt = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
inpt.addEventListener("input", handleInput);
function handleInput(e) {
  inpt.value !== ""
    ? (output.textContent = inpt.value)
    : (output.textContent = "Незнакомец");
}

//*-*-*-*-*-*-*-*-*-* TASK #6 *-*-*-*-*-*-*-*-*

const input = document.querySelector("#validation-input");
const ttt = document.querySelectorAll("#validation-input");
let long = Number(input.dataset.length);

input.addEventListener("input", handelValidation);

function handelValidation(e) {
  e.currentTarget.value.length === long
    ? input.classList.add("valid") || input.classList.remove("invalid")
    : input.classList.add("invalid") || input.classList.remove("valid");
  console.log(typeof long);
  console.log(typeof e.currentTarget.value.length);
  console.log(e.currentTarget.value.length === long);
}

//*-*-*-*-*-*-*-*-*-* TASK #7 *-*-*-*-*-*-*-*-*

const controlLever = document.getElementById("font-size-control");
controlLever.addEventListener("input", handleLever);

function handleLever(e) {
  document.querySelector("#text").style.fontSize = `${controlLever.value}px`;
}
