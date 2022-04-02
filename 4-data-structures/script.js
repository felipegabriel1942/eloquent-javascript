// The Sum Of A Range

function range(start, end, step = 1) {
  let result = [];

  if (step > 0) {
    while (start <= end) {
      result.push(start);
      start += step;
    }
  } else {
    while (end <= start) {
      result.push(start);
      start += step;
    }
  }

  return result;
}

function sum(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// Reversing an array
function reverseArray(array = []) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[array.length - (1 + i)]);
  }

  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// A list

function arrayToList(array = []) {
  let list = {};
  let previous = {};
  let actual = {};

  for (let i = array.length - 1; i >= 0; i--) {
    actual = {
      value: array[i],
      rest: i == array.length - 1 ? null : previous,
    };

    list = actual;

    previous = list;
  }

  return list;
}

console.log(arrayToList([1, 2, 3]));

// Deep comparison

function deepEqual(value1, value2) {
  if (value1 != null && typeof value1 == 'object') {
    const keys = Object.keys(value1);

    for (let i = 0; i < keys.length; i++) {
      const comparison = deepEqual(value1[keys[i]], value2[keys[i]]);

      if (!comparison) {
        return false;
      }
    }

    return true;
  }

  return value1 === value2;
}

const person1 = {
  nome: 'Jose',
  idade: 25,
  contatos: { telefone: '(85) 99999-9999' },
};

const person2 = {
  nome: 'Jose',
  idade: 25,
  contatos: { telefone: '(85) 99999-9999' },
};

console.log(deepEqual(person1, person2));
console.log(deepEqual('1559', '1559'));


let array2 = [1, 2, 3, 4, 5];

console.log(array2.filter(a => a > 2));
console.log(array2);
