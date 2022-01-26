var login = document.querySelector('#join')


login.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'chat.html';
})

function change(newPage) {
  window.location.href = newPage;
}
  

function hover(element) {
  element.setAttribute('src', 'img\\sus.png');
}

function unhover(element, source) {
  element.setAttribute('src', source);
}


