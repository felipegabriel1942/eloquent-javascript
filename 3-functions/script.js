// Minimum

function min(a, b) {
  let min;
  if (b > a) {
    min = a;
  } else if (a > b) {
    min = b;
  } else {
    min = a;
  }

  return min;
}

console.log(min(6, 8));

//Recursion

function isEven(num) {
  if (num < 0) {
    num = num * -1;
  }

  if (num > 1) {
    return isEven(num - 2);
  }

  return num === 0;
}

console.log(isEven(75));

// Bean Counting

function countBs(string) {
  return countChar(string, 'B');
}

function countChar(string, char) {
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) total++;
  }

  return total;
}

console.log(countChar('BarBassenaBdddddbbbbb', 'd'));

console.log(countBs('BarBassenaBdddddbbbbb'));
