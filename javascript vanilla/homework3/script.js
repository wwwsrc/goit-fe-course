/*
const key = "name";
const value = 10;

const obj = {
  a: 1,
  [key]: value
};

console.log(obj);

console.log(obj.name); */

//**************************  TASK #1  ***********************************

/* const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "javascript";
user.premium = false;
console.log(user);

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
} */

//**************************  TASK #2  ***********************************

/*
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

const countProps = user => {
  const keys = Object.keys(user);
  return keys.length;
};

console.log(countProps(user)); //4
console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
*/

//**************************  TASK #3  ***********************************
/* const employees = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
}; */

/* const findBestEmployee = employees => {
  let maxSalary = 0;
  let nameEmployee;
  const keys = Object.keys(employees);
  console.log(keys);
  for (const key of keys) {
    if (maxSalary < employees[key]) {
      maxSalary = employees[key];
      nameEmployee = key;
    }
  }
  return nameEmployee;
}; */

/* const findBestEmployee = rabotniki => {
  let maxSalary = 0;
  const entries = Object.entries(rabotniki);
  for (const entry of entries) {
    if (maxSalary < entry[1]) {
      maxSalary = entry[1];
      name = entry[0];
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
 */
//**************************  TASK #4  ***********************************
/* const countTotalSalary = obj => {
  let total = 0;
  let massiveSalary = Object.values(obj);
  for (const value of massiveSalary) {
    total += value;
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400 */

//**************************  TASK #5  ***********************************
/* const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = (arr, prop) => {
  const values = [];
  for (const user of arr) {
    if (prop in user) {
      console.log(user);
      values.push(user[prop]);
    }
  }
  return values;
}; */

//console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

//console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

//console.log(getAllPropValues(products, "category")); // []

//**************************  TASK #6  ***********************************

/* const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = (arr, productName) => {
  for (const prod of arr) {
    if (productName === prod.name) {
      return prod.price * prod.quantity;
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
 */
