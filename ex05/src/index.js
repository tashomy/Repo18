let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);

var arrKey = [];
var arrValue = [];
for (let keys of shoppingList.entries()) {
  arrKey.push("groceries: " + keys[0]);
}

for (let values of shoppingList.entries()) {
  arrValue.push("amount: " + values[1]);
}

arrKey.forEach((element) => {
  console.log(element);
});

arrValue.forEach((element) => {
  console.log(element);
});

for (let [key, value] of shoppingList) {
  console.log([key, value]);
}

module.exports = { shoppingList, arrKey, arrValue };
