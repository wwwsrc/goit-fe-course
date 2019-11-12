/* const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  }
}; */

//account.changeDiscount(0.15);
//console.log(account.discount);

//console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

//account.addOrder(5000, "order-4");
//console.log(account.balance); // 19000
//console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// Задание 2
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction("Аптечка", inventory.add.bind(inventory));
// Invoking action on Аптечка
// Adding Аптечка to inventory

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction("Фильтр", inventory.remove.bind(inventory));
// Invoking action on Фильтр
// Removing Фильтр from inventory

console.log(inventory.items); // ['Монорельса', 'Аптечка']
