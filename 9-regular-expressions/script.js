let re1 = new RegExp('abc');
let re2 = /abc/;

console.log(re1.test('abcde'));
console.log(re1.test('abxcde'));

console.log(/^\d/.test('1992'));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test('01-30-2003 15:20'));

let notBinary = /[^01]/;
console.log(notBinary.test('1100100010100110'));
console.log(notBinary.test('1100100010200110'));

console.log(/'\d+'/.test("'123'"));

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test('1-1-2003 08:45'));

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying);
console.log(cartoonCrying.test('Boohoooohooohooo'));

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

console.log(getDate('4-5-2022'));

let animalCount = /\d+ (pig|cow|chicken)s?/;

console.log(animalCount.test('15 pig'));

console.log(/\bcat\b/.test('con cat enate'));

console.log('papa'.replace('p', 'm'));

console.log('Borobudur'.replace(/[ou]/, 'a'));
console.log('Borobudur'.replace(/[ou]/g, 'a'));

console.log(
  'Liskov, Barbara\nMcCarthy, John\nWadler, Philip'.replace(
    /(\w+), (\w+)/g,
    '$2 $1'
  )
);

let s = 'the cia and fbi';
console.log(s.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase()));

let stock = '1 lemon, 2 cabbages, and 101 eggs';

function minusOne(match, amount, unit) {
  console.log(unit);
  amount = Number(amount) - 1;

  if (amount == 1) {
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = 'no';
  }

  return amount + ' ' + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}

console.log(stripComments('1 + /* 2 */ 3'));
console.log(stripComments('x = 10;// ten!'));
console.log(stripComments('1 /* a */+/* b */ 1'));

let name = 'harry';
let text = 'Harry is a suspicious character';
let regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_'));

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec('xyzzy');
console.log(match.index);
console.log(pattern.lastIndex);

let global = /abc/g;
console.log(global.exec('xyz abc'));

let sticky = /abc/y;
console.log(sticky.exec('xyz abc'));

let input = 'A string with 3 number in it... 42 and 88.';
let number = /\b\d+\b/g;
let match2;

while ((match2 = number.exec(input))) {
  console.log(match2);
  console.log('Found', match2[0], 'at', match2.index);
}

const iniFILE = 'aaaaaaaaaaaaaaaaaaaaa\r\nbbbbbbbbbbbbbbbbbbbb';

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach((line) => {
    let match;

    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error('Line ' + line + 'is not valid.');
    }
  });

  return result;
}

console.log(
  parseINI(`
name=Vasilis
[address]
city=Tessaloniki`)
);

// REGEXP GOLF

// 1. Car and Cat
let pattern1 = /ca(t|r)/;
console.log(pattern1.test('car'));
console.log(pattern1.test('cat'));

// 2. Pop and Prop
let pattern2 = /p(r?)op/;
console.log(pattern2.test('pop'));
console.log(pattern2.test('prop'));

// 3. Ferret, ferry, and ferrari
let pattern3 = /ferr(et|y|ari)/;
console.log(pattern3.test('ferret'));
console.log(pattern3.test('ferry'));
console.log(pattern3.test('ferrari'));

// 4. Any word ending in ious
let pattern4 = /.*(ious)/;
console.log(pattern4.test('glorious'));
console.log(pattern4.test('copious'));
console.log(pattern4.test('devious'));

// 5. A whitespace character followed by a period, comma, colon, or semicolon
let pattern5 = /\s(.|,|:|;)/;
console.log(pattern5.test(' .'));
console.log(pattern5.test(' ,'));
console.log(pattern5.test(' :'));
console.log(pattern5.test(' ;'));

// 6. A word longer than six letters
let pattern6 = /\w{6,}/;
console.log(pattern6.test('felipe'));
console.log(pattern6.test('joao'));

// 7. A word without the letter e (or E)
let pattern7 = /^[^eE]*$/;
console.log(pattern7.test('felipe'));
console.log(pattern7.test('jax'));

// QUOTING STYLE
const story =
  "This goes against all when he said: 'I kill tem all', so aren't this guy crazy?";

console.log(story.replace(/(\W')|('\W)/g, '"'));

// NUMBERS AGAIN
let numberPattern = /^(\+|-)?((\d+(\.\d*)?)|(\.\d+))(((e|E)(\+|-)?)\d+)?$/;
// or
// number = /^[+\-]?((\d+(\.\d*)?)|(\.\d+))(([eE][+\-]?)\d+)?$/;
// Tests:
[
  '1',
  '-1',
  '+15',
  '1.55',
  '.5',
  '5.',
  '1.3e2',
  '1E-4',
  '1e+12',
  '+1.e3',
  '.8e-3',
].forEach(function (s) {
  if (!numberPattern.test(s)) {
    console.log("Failed to match '" + s + "'");
  } else {
    console.log(s, 'matched correctly!');
  }
});
['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5', '.'].forEach(function (s) {
  if (numberPattern.test(s)) {
    console.log("Incorrectly accepted '" + s + "'");
  } else {
    console.log(s, 'not matched correctly!');
  }
});
