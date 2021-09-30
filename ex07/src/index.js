var numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
var set = new Set(numberArray);
var uniqueArray = [];
for (item of set) {
  uniqueArray.push(item);
}
console.log(uniqueArray.sort((a, b) => a - b));

module.exports = { numberArray, uniqueArray };
