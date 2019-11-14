"use strict";

//==>==>==>==>==>==>==> TASK #1 <==<==<==<==<==<==<==

/* const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
  //console.log(this);
  //console.log(`${this.login[keys]}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo(); // Login: Poly, Email: poly@mail.com */

//==>==>==>==>==>==>==> TASK #2 <==<==<==<==<==<==<==

/* class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const mango = new User({ name: "Mango", age: 2, followers: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({ name: "Poly", age: 3, followers: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 followers */

//==>==>==>==>==>==>==> TASK #3 <==<==<==<==<==<==<==

/* class Storage {
  constructor(_items) {
    this.items = _items;
    console.log(typeof this.items);
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }
  removeItem(item) {
    let rv = this.items.indexOf(item);
    //delete this.items[rv];
    this.items.splice(rv, 1);
    return this.items;


const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);
console.log(typeof storage);

const items = storage.getItems();
console.table(items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items);
 // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items);
// [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
 */
//==>==>==>==>==>==>==> TASK #4 <==<==<==<==<==<==<==

/* class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  set value(string) {
    return (this._value = string);
  }
  append(string) {
    this._value = this._value + string;
  }
  prepend(string) {
    this._value = string + this._value;
  }
  pad(string) {
    this._value = string + this.value + string;
  }
}

const builder = new StringBuilder(".");
console.log(builder);

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^=' */

//==>==>==>==>==>==>==> TASK #5 <==<==<==<==<==<==<==

/* class Car {
  static getSpecs(Car) {
    return console.log(
      `maxSpeed: ${Car._maxSpeed}, speed: ${Car._speed}, isOn: ${Car._isOn}, distance: ${Car._distance}, price: ${Car._price}`
    );
  }

  //* Добавь статический метод `getSpecs(car)`,
  //* который принимает объект-машину как параметр и выводит
  //* в консоль значения свойств maxSpeed, speed, isOn, distance и price.

  // * Конструктор получает объект настроек.
  //*
  //* Добавь свойства будущеего экземпляра класса:
  //*  speed - текущая скорость, изначально 0
  //*  price - цена автомобиля
  //*  maxSpeed - максимальная скорость
  //*  isOn - заведен ли автомобиль, значения true или false. Изначально false
  //*  distance - общий киллометраж, изначально 0

  constructor(maxSpeed, price) {
    this._speed = 0;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }

  //* Добавь геттер и сеттер для свойства price,
  //* который будет работать с свойством цены автомобиля.

  get price() {
    //console.log(this._price);
    return this._price;
  }
  set price(price) {
    this._price = price;
  }

  // * Добавь код для того чтобы завести автомобиль
  //* Записывает в свойство isOn значение true

  turnOn() {
    return (this._isOn = true);
  }

  // * Добавь код для того чтобы заглушить автомобиль
  // * Записывает в свойство isOn значение false,
  // * и сбрасывает текущую скорость в 0

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  // * Добавялет к свойству speed полученное значение,
  //* при условии что результирующая скорость
  //* не больше чем значение свойства maxSpeed

  accelerate(value) {
    if (this._speed <= this._maxSpeed) {
      //console.log((this._speed += value));
      return (this._speed += value);
    }
  }

  // * Отнимает от свойства speed полученное значение,
  // * при условии что результирующая скорость не меньше нуля

  decelerate(value) {
    if (this._speed > 0) {
      return (this._speed -= value);
    }
  }

  //* Добавляет в поле distance киллометраж (hours * speed),
  //* но только в том случае если машина заведена!

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
    return this._distance;
  }
}

const mustang = new Car(200, 2000);
//console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
//console.log(mustang);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
//Car.getSpecs(mustang);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
 */
