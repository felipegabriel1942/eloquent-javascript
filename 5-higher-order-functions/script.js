// Flattenning
function flatArray(array = []) {
  return array.reduce((total, amount) => {
    return total.concat(amount);
  }, []);
}

console.log(flatArray([1, 2, 3, [1, 5]]));

// Your own loop
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  0,
  (n) => n < 10,
  (n) => n + 1,
  console.log
);

// Everything
function every(array = [], test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }

  return true;
}

function everyWithSome(array = [], test) {
  return !array.some((element) => !test(element));
}

console.log(every([1, 2, 3, 4, 5, 6], (n) => n > 2));
console.log(everyWithSome([1, 2, 3, 4, 5, 6], (n) => n > 0));
