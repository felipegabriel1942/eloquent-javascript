let div = document.querySelector('a');

setTimeout(logMessages, 1000);

function logMessages() {
  console.log('loggin...');
}

let fifteen = Promise.resolve(15);

fifteen.then((value) => console.log(`Got ${value}`));

function storage(itemName) {
  return new Promise((resolve) => {
    resolve(itemName);
  });
}

storage('teste').then((value) => console.log(value));

new Promise((_, reject) => reject(new Error('Fail')))
  .then((value) => console.log('Handler 1'))
  .catch((reason) => {
    console.log('Caught failure ' + reason);
    return 'nothing';
  })
  .then((value) => console.log('Handler 2', value));

class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;

    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout('Timed out'));
      }, 200);
    }
    attempt(1);
  });
}



console.log(div);

if (div) {
  div.addEventListener('click', event => {
    console.log('fui clicado')
  });
  
}