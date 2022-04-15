// Creating text nodes
function replaceImages() {
  const images = Array.from(document.body.getElementsByTagName('img'));

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    if (image.alt) {
      const text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}

// Creating element nodes
function elt(type, ...children) {
  let node = document.createElement(type);

  for (let child of children) {
    if (typeof child != 'string') {
      node.appendChild(child);
    } else {
      node.appendChild(document.createTextNode(child));
    }
  }

  return node;
}

document
  .getElementById('quote')
  .appendChild(
    elt(
      'footer',
      '—',
      elt('strong', 'Karl Popper'),
      ', preface to the second edition of ',
      elt('em', 'The Open Society and Its Enemies'),
      ', 1950'
    )
  );

// Attributes

let paras = document.body.getElementsByTagName('p');

for (let para of Array.from(paras)) {
  if (para.getAttribute('data-classified') == 'secret') {
    para.remove();
  }
}

// Positioning and animating

let cat = document.querySelector('img');
let angle = Math.PI / 2;

function animate(time, lastTime) {
  if (lastTime != null) {
    angle += (time - lastTime) * 0.001;
  }

  cat.style.top = Math.sin(angle) * 20 + 'px';
  cat.style.left = Math.cos(angle) * 200 + 'px';

  requestAnimationFrame((newTime) => animate(newTime, time));
}

requestAnimationFrame(animate);

// Build a table
const montains = Array.from([
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
]);

buildTable();

function buildTable() {
  const table = document.createElement('table');

  table.appendChild(buildTableHeader());
  table.appendChild(buildTableBody());

  document.getElementById('montains').appendChild(table);
}

function buildTableHeader() {
  const thead = document.createElement('thead');
  const row = document.createElement('tr');
  const columns = Object.keys(montains[0]);

  columns.forEach((key) => {
    const th = document.createElement('th');
    th.textContent = key;

    row.appendChild(th);
  });

  thead.appendChild(row);

  return thead;
}

function buildTableBody() {
  const tbody = document.createElement('tbody');

  montains.forEach((montain) => tbody.appendChild(buildTableBodyRow(montain)));

  return tbody;
}

function buildTableBodyRow(montain) {
  const row = document.createElement('tr');
  const columns = Object.keys(montains[0]);

  columns.forEach((key) =>
    row.appendChild(buildTableBodyRowCell(montain[key]))
  );

  return row;
}

function buildTableBodyRowCell(cellValue) {
  const td = document.createElement('td');
  td.innerText = cellValue;

  if (typeof cellValue == 'number') {
    td.style.textAlign = 'right';
  }

  return td;
}
