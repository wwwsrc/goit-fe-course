//*******************************************Task #1*****************************************************

/* const logItems = function(array) {
  for (let i = 0; i < array.length; i++) {
    //const element = array[i];
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]); */

//*******************************************Task #2*****************************************************

/* function calculateEngravingPrice(message = "", pricePerWord = 10) {
  a = message.split(" ").length;
  b = pricePerWord;
  sum = a * b;
  return sum;
}
console.log(calculateEngravingPrice());
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); */

//*******************************************Task #3*****************************************************

/* function findLongestWord(string) {
  arr = string.split(" ");
  //console.log(arr);
  let longestWord = 0;
  let word;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
      word = arr[i];
    }
  }
  //console.log(word);
  return word;
}
findLongestWord("Trulala letter sounlonsesdnd box");
console.log(findLongestWord("Trulala letter sounlonsesdnd box")); */
//c циклом for of
/* function findLongestWord(string) {
  arr = string.split(" ");
}
 */
//*******************************************Task #4*****************************************************
/* const formatString = function(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40).concat("...");
  }
};
console.log(formatString("Lorem Ipsum dollor sit ame more nore amin"));
 */

//*******************************************Task #5*****************************************************

/* const checkForSpam = function(str) {
  arr = str.toLowerCase().split(" ");
  if (arr.includes("spam") || arr.includes("sale")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam("elevator zhaba tratata Spsam saLe spram"));
console.log(checkForSpam("elevator zhaba tratata KsaLe spram")); */

//*******************************************Task #6*****************************************************
/* let input;
numbers = [];
let total = 0;
do {
  input = prompt(
    "введите число которое будет суммированно со следущим вводом числа, для остановки суммирование нажмите отмена"
  );
  if (isNaN(input) && input !== null) {
    alert("Вводи только цифры!");
  } else if (input !== null) {
    numbers.push(Number(input));
    console.log(numbers);
  } else {
  }
  //console.log(input);
} while (input !== null);
//console.log(numbers);
if (numbers.length === 0) {
  alert("Отменено пользователем, считать ничего не будем!");
} else {
  for (let i = 0; i < numbers.length; i++) {
    total += Number(numbers[i]);
  }
  console.log("Общая сумма чисел равна " + total);
}
 */

//*******************************************Task #7***********************************************************************************

/*
//const allLogins = ["Alex", "Ziesh"];
const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("введите логин, от 4 до 16 символов");

const isLoginValid = login => {
  return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = (allLogins, login) => {
  return allLogins.includes(login);
};

const addLogin = (allLogins, login) => {
  if (login) {
    if (isLoginValid(login)) {
      if (!isLoginUnique(allLogins, login)) {
        allLogins.push(login);
        console.log(`Логин ${login} успешно добавлен!`);
      } else {
        console.log(`Логин ${login} уже используется!`);
      }
    } else {
      console.log("Ошибка, логин должен быть от 4 до 16 символов!");
    }
  } else {
    alert("Отменено пользователем!");
  }
};

//addLogin(allLogins, login);
//console.log(addLogin(allLogins, "robotGoogles")); // 'Такой логин уже используется!'
//console.log(addLogin(allLogins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//console.log(addLogin(allLogins, "Ajax")); // 'Логин успешно добавлен!'
//console.log(addLogin(allLogins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
 */
