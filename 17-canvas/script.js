const ctx = document.querySelector('canvas').getContext('2d');

// Pie Chart
// const results = [
//   { name: 'Satisfied', count: 1043, color: 'lightblue' },
//   { name: 'Neutral', count: 563, color: 'lightgreen' },
//   { name: 'Unsatisfied', count: 510, color: 'pink' },
//   { name: 'No comment', count: 175, color: 'silver' },
// ];

// let total = results.reduce((sum, { count }) => sum + count, 0);

// let currentAngle = -0.5 * Math.PI;

// for (let result of results) {
//   let sliceAngle = (result.count / total) * 2 * Math.PI;
//   ctx.beginPath();
//   ctx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
//   currentAngle += sliceAngle;
//   ctx.lineTo(100, 100);
//   ctx.fillStyle = result.color;
//   ctx.fill();
// }

// Images

let img = document.createElement('img');
img.src = './images/player.png';

let spriteW = 24,
  spriteH = 30;

img.addEventListener('load', () => {
  let cycle = 0;

  setInterval(() => {
    ctx.clearRect(0, 0, spriteW, spriteH);
    ctx.drawImage(
      img,
      cycle * spriteW,
      0,
      spriteW,
      spriteH,
      0,
      0,
      spriteW,
      spriteH
    );

    cycle = (cycle + 1) % 8;
  }, 120);
});
