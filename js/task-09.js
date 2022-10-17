const changeColorEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
changeColorEl.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  const bodyElem = document.querySelector('body');
  bodyElem.style.backgroundColor = color;
  spanEl.textContent = color;
}