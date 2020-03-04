const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['pink', 'green', 'yellow', 'teal', 'grey'];
//                0       1         2        3         4
body.style.backgroundColor = 'violet';

button.addEventListener('click', changeBackground);

function changeBackground() {
  const colorIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
