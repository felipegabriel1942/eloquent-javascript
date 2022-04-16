// Event listener
let button1 = document.getElementById('click-me');

button1.addEventListener('click', () => {
  console.log('Button clicked.');
});

// Remove event listener
let button2 = document.getElementById('click-me-once');

function once() {
  console.log('Done.');
  button2.removeEventListener('click', once);
}

button2.addEventListener('click', once);

// Event Objects
let button3 = document.getElementById('btn-event-object');

button3.addEventListener('mousedown', (event) => {
  if (event.button == 0) {
    console.log('Left button');
  } else if (event.button == 1) {
    console.log('Middle button');
  } else if (event.button == 2) {
    console.log('Right button');
  }
});

// Propagation
let para = document.getElementById('p-propagation');
let button4 = document.getElementById('btn-propagation');

para.addEventListener('mousedown', (event) => {
  console.log('Handler for paragraph.');
});

button4.addEventListener('mousedown', (event) => {
  console.log('Handler for button.');

  if (event.button == 2) {
    event.stopPropagation();
  }
});

// Pointer events
// window.addEventListener('click', event => {
//     let dot = document.createElement('div');
//     dot.className = 'dot';
//     dot.style.left = (event.pageX - 4) + 'px';
//     dot.style.top = (event.pageY - 4) + 'px';
//     document.body.appendChild(dot);
// })

// Mouse motion
// let lastX;
// let bar = document.getElementById('drag-bar');
// bar.addEventListener('mousedown', (event) => {
//   lastX = event.clientX;
//   window.addEventListener('mousemove', moved);
//   event.preventDefault();
// });

// function moved(event) {
//   if (event.buttons == 0) {
//     window.removeEventListener('mousedown', moved);
//   } else {
//     let dist = event.clientX - lastX;
//     let newWidth = Math.max(10, bar.offsetWidth + dist);
//     bar.style.width = newWidth + 'px';
//     lastX = event.clientX;
//   }
// }

// Deboucing
let textarea = document.querySelector('textarea');
let timeout;

textarea.addEventListener('input', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log('Typed!'), 500);
});

// Ballon
let ballonArea = document.getElementById('ballon-area');
let ballon = document.createTextNode('🎈');
let explosion = document.createTextNode('💥');

ballonArea.appendChild(ballon);

window.addEventListener('keydown', (event) => {
  if (ballonArea.innerText == '💥') {
    return;
  }

  const fontSize = +ballonArea.style.fontSize.replace('px', '');

  if (fontSize > 200) {
    ballonArea.removeChild(ballon);
    ballonArea.appendChild(explosion);
    window.removeEventListener('keydown', () => {});
  }

  if (event.key == 'ArrowUp') {
    ballonArea.style.fontSize = (fontSize == '' ? 17 : fontSize * 1.1) + 'px';
  } else {
    ballonArea.style.fontSize = (fontSize == '' ? 17 : fontSize / 1.1) + 'px';
  }

  event.preventDefault();
});

// Mouse Trail
// window.addEventListener('mousemove', (event) => {
//   let dot = document.createElement('div');
//   dot.className = 'dot';
//   dot.style.left = event.pageX - 4 + 'px';
//   dot.style.top = event.pageY - 4 + 'px';
//   document.body.appendChild(dot);
// });

// Tabs
function asTabs(node) {
  let buttons = Array.from(node.children);

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.style.backgroundColor =  i > 0 ? '' : 'red';
    button.addEventListener('click', (event) => {
      changeTab(node, i);
    });

    const tab = document.createElement('div');
    tab.style.height = '100px';
    tab.style.width = '100px';
    tab.style.backgroundColor = 'gray';
    tab.style.display = i > 0 ? 'none' : '';
    tab.innerText = button.attributes[0].value;

    node.appendChild(tab);
  }
}

function changeTab(node, index) {
  const tabs = Array.from(node.querySelectorAll('div'));
  const buttons = Array.from(node.querySelectorAll('button'));

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    const button = buttons[i];

    if (i == index) {
      tab.style.display = '';
      button.style.backgroundColor = 'red';
    } else {
      tab.style.display = 'none';
      button.style.backgroundColor = '';
    }
  }
}

asTabs(document.getElementById('tab-wrapper'));
