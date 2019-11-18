import users from "./users.js";
console.log(users);
//("use strict");

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Получить массив имен всех пользователей (поле name).

const getUserNames = users.map(users => users.name);
console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).

//const getUsersWithEyeColor = users.filter(users => {
//return users.eyeColor === "blue";
//});
const getUsersWithEyeColor = users.filter(users => users.eyeColor === "blue");

console.log(getUsersWithEyeColor); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = users
  .filter(users => users.gender === "male")
  .map(users => users.name);

console.log(getUsersWithGender); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users.filter(users => users.isActive === true);
console.log(getInactiveUsers); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson, объект Sheree Anthony]

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #5 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const getUserWithEmail = (users, email) =>
  users.find(users => users.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #6 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter(users => users.age >= min && users.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #7 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users.reduce((acc, users) => {
  return (acc += users.balance);
}, 0);
console.log(calculateTotalBalance);

//console.log(calculateTotalBalance(users)); // 20916

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #8 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friends) =>
  users
    .filter(users => users.friends.includes(friends))
    .map(users => users.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #9 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users
  .sort((x, y) => (x.friends.length > y.friends.length ? 1 : -1))
  .map(users => users.name);

console.log(getNamesSortedByFriendsCount);
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//>>>>>>>>>>>>>>>>>>>>>>>> TASK #10 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const getSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.sort();
  }, []);
  return [...new Set(getSkills)];
};

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//>>>>>>>> Ч Е Р Н О В И К >>>>>>>>>
/* const getSortedUniqueSkills = users => {
  const getUsersSkills = users.reduce((arrSkill, users) => {
    return arrSkill.push(...users.skills);
  }, []);
  let newarr = getUsersSkills;
  console.log(newarr);
  const sortSkill = newarr.map((arr, elem) => {
    if (!arr.includes(elem)) {
      arr += [...rest];
    }
    return arr;
  }, []);
  return sortSkill.sort();
};
console.log(getSortedUniqueSkills(users));
 */
