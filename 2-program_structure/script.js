// Looping a tringle

let triangle = '';

while (triangle.length < 7) {
  triangle = triangle + '#';
  console.log(triangle);
}

// FizzBuzz

for (let i = 0; i < 100; i++) {
  const number = i + 1;

  if (number % 3 == 0) {
    console.log('Fizz');
  } else if (number % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
}

// Chessboard

const size = 8;
let chessboard = ' ';

for (let i = 0; i < size; i++) {
  for (let z = 0; z < size; z++) {
    if (z == 0) {
      chessboard = chessboard + chessboard.charAt(chessboard.length - 2);
    } else {
      if (chessboard.endsWith('#')) {
        chessboard = chessboard + ' ';
      } else {
        chessboard = chessboard + '#';
      }
    }
  }

  chessboard = chessboard + '\n';
}

console.log(chessboard);
