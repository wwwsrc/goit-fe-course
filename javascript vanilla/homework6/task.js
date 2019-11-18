"use strict";

const scientist = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];
// 1) отримати масив вчених що народилися в 19 ст

//const born = scientist.filter(elem => elem.year > 1800 && elem.year < 1901);

/* const born = scientist.filter(function(elem) {
  return elem.year > 1800 && elem.year < 1901;
});
console.log(born); */

// 2) знайти суму років скільки прожили всі вченні
/* const summ = scientist.reduce((acc, elem) => {
  return (acc += elem.passed - elem.year);
}, 0);
console.log(summ); */

// 3) Відсортувати вчених по алфавіту
//const alphabet = scientist.map(elem => elem.first).sort();
//console.log(alphabet);

/* const sortAlphabet = scientist.sort((x, z) => (x.first > z.first ? 1 : -1));
console.log(sortAlphabet); */

// 4) Відсортувати вчених по даті народження
//const startBorn = scientist.sort((x, z) => (x.year > z.year ? 1 : -1));
//console.log(startBorn);

// 5) Відсортувати вчених по кількості прожитих років
/* const startLife = scientist.sort((x, z) =>
  x.passed - x.year > z.passed - z.year ? 1 : -1
);
console.log(startLife);
 */

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

/* const delScientist = scientist.filter(
  elem => elem.year <= 1400 || elem.year > 1700
);
console.log(delScientist);
 */
// 7) Знайти вченого який народився найпізніше.
//const moreYounger = scientist.sort((a, b) => (a.year < b.year ? 1 : -1));
//console.log(moreYounger[0]);

// 8) Знайти рік народження Albert Einstein
//const findEinstein = scientist.find(
//elem => elem.first === "Albert" && elem.last === "Einstein"
//);
//console.log(findEinstein.year);
// 9) Знайти вчених прізвище яких починається на літеру С
//const findClast = scientist.filter(elem => elem.last[0] === "C");
//console.log(findClast);

// 10) Видалити з масива всіх вчених імя яких починається на A
//const delScientistA = scientist.filter(elem => elem.first[0] !== "A");
//console.log(delScientistA);
