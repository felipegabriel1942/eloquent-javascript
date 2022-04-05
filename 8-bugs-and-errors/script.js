// Retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply() {
  const errorChance = Math.round(Math.random() * 10);

  try {
    if (errorChance >= 8) {
      console.log(`Result => ${5 * 3}`);
    } else {
      throw new MultiplicatorUnitFailure();
    }
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      console.log('Multiplicator Error');
    }
  }
}

primitiveMultiply();

// The Locked Box

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

function withBoxUnlocked(body) {
  let state = box.locked;

  box.unlock();

  try {
    body();
  } finally {
    if (state) {
      box.lock();
    }
  }
}

withBoxUnlocked(function () {
  box.content.push('gold piece');
});

withBoxUnlocked(function () {
  throw new Error('Pirates on the horizon! Abort!');
});
