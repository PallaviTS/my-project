const button = document.querySelector('button');
const body = document.querySelector('body');

body.style.backgroundColor = 'violet';

button.addEventListener('click', changeBackground);

function changeBackground() {
  const colorIndex = Math.floor(Math.random() * 16777216);
  body.style.backgroundColor = '#' + colorIndex.toString(16);
}
