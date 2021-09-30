function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (var x = 1; x <= 5; x++) {
    yield x;
  }
}

function* insideGenerator2() {
  for (var x = 10; x <= 15; x++) {
    yield x;
  }
}

function* insideGenerator3() {
  for (var x = 6; x <= 9; x++) {
    yield x;
  }
}

var iterator = myGenerator();

var fifteenArray = [];

for (var i = 0; i < 16; i++) {
  if (i == 15) {
    fifteenArray.push(iterator.next().value + "!");
    break;
  }
  fifteenArray.push(iterator.next().value + "#, ");
}

console.log(...fifteenArray);

module.exports = { fifteenArray, myGenerator };
