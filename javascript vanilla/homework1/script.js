"use strict";
//TASK #1

/* const name = 'Генератор защитного поля';
let price = 1000;

console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);
console.log("Присваеваем новый прайс генератору>>>");

price = 2000;

console.log(`Выбран "${name}", цена за штуку ${price} кредитов`); */

// TASK #2

/* let total = 100;
let ordered = 50;

if (ordered > total){
    console.log('На складе нет столько товара, давай досвидания!');
} else{
    console.log('Заказ оформлен, надейся и жди');
}
console.log("Увеличиваем количество товара в заказе свыше наличия на складе>>>>")
ordered = 130;
let message;
if (ordered > total){
    let message = "На складе нет столько товара, давай досвидания!";
    console.log(message);
} else{
    let message = "Заказ оформлен, надейся и жди";
    console.log(message);
} */

//TASK #3
/* const ADMIN_PASSWORD = "pass";
let message;

const passwordUser = prompt("введите пароль, у вас есть одна попытка");

if ( passwordUser === ADMIN_PASSWORD){
    message = "Hello admin!";
} else if (passwordUser === null){
    message = "охрана отмена!";
}   else {
    message = 'ты кто такой, давай досвидания!';
}

console.log(message);
alert(message); */

//TASK #4

/* let credits = 23580;

let pricePerDroid = 3000;

let message;

const buyDroid = prompt("Псс, сколько роботов ннада?");
let totalPrice = buyDroid*pricePerDroid;
if (buyDroid === null){
    console.log("Отмена, дроиды не нужны!");
    } else if(!isNaN(buyDroid) && (totalPrice <= credits) && (totalPrice >= 0)) {
            let creditBalance = credits-totalPrice;
            message = `Вы купили ${buyDroid} дроида, ваш остаток ${creditBalance} кредитов`;
            }
            else if(totalPrice > credits){
                let creditBalance = credits-totalPrice;
                message = `дядя, no money no droid! ты хочешь купить ${buyDroid} дроида и тебе для этого не хватает ${creditBalance} кредитов, сам понимаешь никак. Торга нет.`
            }
            else if(totalPrice <= 0){
                message = "Нельзя купить отрицательное количество дроидов!!!"
            }
     else {
         message = "давай по новой, попробуй вводить только цифры";
    }
console.log(message);
*/

// TASK #5

/* const countryChina = "Китай";
const countryChilie = "Чили";
const countryAusrtalia = "Австралия";
const countryIndia = "Индия";
const countryJamaica = "Ямайка";
const cancel = null;

const userCountry = prompt("Введите вашу страну для доставки:");
let deliveryCost;
if (userCountry === null){
    alert("пользователь нажал отмена")
} else{
switch (userCountry.toLowerCase()) {

    case countryChina.toLowerCase():
    deliveryCost = 100;
    alert(`Доставка в ${China} будет стоить ${deliveryCost} кредитов`);
    break;

    case countryChilie.toLowerCase():
    deliveryCost = 250;
    alert(`доставка в ${Chilie} будет стоить ${deliveryCost} кредитов`);
    break;

    case countryAusrtalia.toLowerCase():
    deliveryCost = 170;
    alert(`Доставка в ${Ausrtalia} будет стоить ${deliveryCost} кредитов`);
    break;

    case countryIndia.toLowerCase():
    deliveryCost = 80;
    alert(`Доставка в ${countryIndia} будет стоить ${deliveryCost} кредитов`);
    break;

    case countryJamaica.toLowerCase():
    deliveryCost = 120;
    alert(`Доставка в ${countryJamaica} будет стоить ${deliveryCost} кредитов`);
    break;

    default:
    alert(" в вашу страну нет доставки");
    }
}
console.log(userCountry); */

//Task #6

////////////////////// with flag variant//////////////////
/* let flag = true;
let result = 0;
let inputNumber;
while (flag === true) {
    let inputNumber = prompt(
        "введите число которое будет суммированно со следущим вводом числа, для остановки суммирование нажмите cancel"
    );
    if (isNaN(inputNumber)) {
        alert("Вводи цифры только! Соберись!");
    } else if(inputNumber===null){
        alert("Охрана, отмена!")
        flag = false;
    }
    else {
        result += Number(inputNumber);
        console.log("vse putem");
        console.log(result);
   }
}
console.log(`тотал ${result}`); */

/////////////////// DO _WHILE VARIANT//////////////////////////////////

/* let result = 0;
let inputNumber;
do {
  inputNumber = prompt(
    "введите число которое будет суммированно со следущим вводом числа, для остановки суммирование нажмите отмена"
  );

  if (isNaN(inputNumber)) {
    alert("Вводи только цифры!");
    //break;
  } else {
    result += Number(inputNumber);
    console.log(result);
  }
  console.log(inputNumber);
} while (inputNumber !== null);

console.log(`общая сумма ${result}`); */


/////////////тернарый оператор do while///////////////////

/* let result = 0;
let inputNumber;
do { inputNumber = prompt(
   "введите числа для суммирования, отмена для завершения");
  (isNaN(inputNumber)) ? alert("Вводи только цифры!") : result += Number(inputNumber);
} while (inputNumber !== null);
console.log(`Общая сумма ${result}`); */
