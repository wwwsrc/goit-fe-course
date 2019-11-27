const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const takeBody = document.querySelector("body");
const start = document.querySelector('button[data-action="start"]');
const stop = document.body.querySelector('button[data-action="stop"]');

let timerOf;

start.addEventListener("click", () => {
  timerOf = setInterval(() => {
    takeBody.setAttribute(
      "style",
      `background:${colors[randomIntegerFromInterval(0, colors.length - 1)]}`
    );
    start.setAttribute("disabled", "disabled");
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(timerOf);
  start.removeAttribute("disabled");
});

////////////////PROMISE TASK#1
// const delay = ms => {
//   return (promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   }));
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

////////////////PROMISE TASK#2
// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false }
// ];
// const promise = new Promise((resolve, reject) => {});

// const toggleUserState = (allUsers, userName) => {
//   return new Promise(resolve => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     );
//     resolve(updatedUsers);
//   });
// };
// const logger = updatedUsers => console.table(updatedUsers);
// //Сейчас работает так
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);
// //Должно работать так
// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);

//********************************
///////////////PROMISE TASK#3
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let arr = [];
// const makeTransaction = transaction => {
//   const delay = randomIntegerFromInterval(200, 500);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
//       // console.log("here", canProcess);
//       // console.log(delay);
//       // console.log(transaction.id);
//       if (canProcess) {
//         // console.log(transaction.id, delay);
//         resolve([transaction.id, delay]);
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//   });
// };

// const logSuccess = ([id, time]) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Работает так
//  */
// /* makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError); */
// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);

/////////////////////////////Timer

// const daysValue = document.querySelector('span[data-value="days"]');
// const hoursValue = document.querySelector('span[data-value="hours"]');
// const minsValue = document.querySelector('span[data-value="mins"]');
// const secsValue = document.querySelector('span[data-value="secs"]');

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     console.log(this.selector);
//     this.targetDate = targetDate;
//   }
//   starttimer() {
//     setInterval(obj => {
//       const currentTime = Date.now();
//       const time = this.targetDate - currentTime;
//       const days = Math.floor(time / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//       const secs = Math.floor((time % (1000 * 60)) / 1000);
//       daysValue.textContent = days;
//       hoursValue.textContent = hours;
//       minsValue.textContent = mins;
//       secsValue.textContent = secs;
//     }, 1000);
//   }
// }
// const ST = new CountdownTimer({
//   selector: "#timer-1", //этот селектор конечно что то не изспользуется
//   targetDate: new Date("Dec 1, 2019")
// });
// ST.starttimer();

/////// another working version
// const daysValue = document.querySelector('span[data-value="days"]');
// const hoursValue = document.querySelector('span[data-value="hours"]');
// const minsValue = document.querySelector('span[data-value="mins"]');
// const secsValue = document.querySelector('span[data-value="secs"]');
// /* new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jan 1, 2020")
// }); */
// const targetDate = new Date("Jan 1, 2020");
// function starttimer() {
//   setInterval(() => {
//     const currentTime = Date.now();
//     time = targetDate - currentTime;
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     daysValue.textContent = days;
//     hoursValue.textContent = hours;
//     minsValue.textContent = mins;
//     secsValue.textContent = secs;
//   }, 1000);
// }
// console.log("hi");
// starttimer();
