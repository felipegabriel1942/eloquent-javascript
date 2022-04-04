// prototype
let rabbit = {};

rabbit.speak = function (line) {
  console.log(`The rabbit says ${line}`);
};

let whiteRabbit = { type: 'white' };

whiteRabbit.speak = function (line) {
  console.log(`The ${this.type} rabbit says ${line}`);
};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");

let blackRabbit = {};

blackRabbit.speak = function () {
  console.log(`The ${this.type} rabbit says ${this.line}`);
};

blackRabbit.speak.call({
  type: 'black',
  line: "Oh my ears and whiskers, how late it's getting!",
});

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKREEEE!');

let okIterator = 'OK'[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

// Class, Getters, Setters and Iterators

class Matrix {
  constructor(width, heigth, element = (x, y) => undefined) {
    this.width = width;
    this.heigth = heigth;
    this.content = [];

    for (let y = 0; y < heigth; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.heigth) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };

    this.x++;

    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);

for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}

// A Vector Type

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2));
  }
}

let vector1 = new Vec(1, 2);
let vector2 = new Vec(3, 4);

console.log(vector1.minus(vector2));
console.log(vector1.plus(vector2));
console.log(vector1.length);
console.log(vector2.length);

// Groups

class Group {
  constructor() {
    this.entries = [];
  }

  add(value) {
    if (this.has(value)) {
      return;
    }
    this.entries.push({
      value: value,
    });
  }

  delete(value) {
    let index;

    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].value === value) {
        index = i;
      }
    }

    this.entries.splice(index, 1);
  }

  has(value) {
    for (let i = 0; i < this.entries.length; i++) {
      if (this.entries[i].value === value) {
        return true;
      }
    }

    return false;
  }

  hasOwnProperty() {
    console.log('objected')
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index === this.group.entries.length) {
      return { done: true };
    }

    let value = { value: this.group.entries[this.index] };

    this.index++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

let group = new Group();
group.add('teste');
group.add('teste2');
group.add('teste3');
console.log(group);
console.log(group.has('testse'));

group.delete('teste3');
console.log(group);

for (let value of group) {
  console.log(value);
}

// Borrowing a method
console.log(hasOwnProperty.call(group, 'entries'));