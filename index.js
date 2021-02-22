const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let intervalId = 0;

refs.startBtn.addEventListener('click', startHandler);
refs.stopBtn.addEventListener('click', stopHandler);

function startHandler() {
  intervalId = setInterval(() => {
    const bcgColor = colorSelect(colors);
    refs.body.style.backgroundColor = `${bcgColor}`;
  }, 1000);
  refs.body.style.backgroundColor = `${colorSelect(colors)}`;
  refs.startBtn.disabled = true;
}
function stopHandler() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function colorSelect(colorPalette) {
  return colorPalette[randomIntegerFromInterval(0, colorPalette.length - 1)];
}
