function* myGenerator(a, b, c) {
  yield* [1, 2, 3, 4, 5];
  yield* "Arena";
  yield* arguments;
}

var iterator = myGenerator(6, 7, 8);

var generatorArray = [];

for (it of iterator) {
  generatorArray.push(it);
}

console.log(generatorArray);

module.exports = { generatorArray, myGenerator };
