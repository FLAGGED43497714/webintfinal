/*

inspiration: 
https://dribbble.com/shots/2292415-Daily-UI-001-Day-001-Sign-Up

*/

let form = document.querySelecter('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  
  return false;
});

function hover(element) {
  element.setAttribute('src', 'img\\sus.png');
}

function unhover(element) {
  element.setAttribute('src', 'img\\webcam1.png');
}