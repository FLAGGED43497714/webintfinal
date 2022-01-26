var sendButton = document.querySelector('#formButton');
var chatForm = document.querySelector('#chatForm');
var chat = document.querySelector('#chat');


sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    saveTheCom('msg',chatForm) ;
    postTheCom('msg', chatForm) ;
})
  
function saveTheCom(msg, _form){

    element_comment = _form.querySelector(`input[name=${msg}]`)
    // element_comment = _form.querySelector(`textaera[name=${msg}]`)

    comText = element_comment.value
    if (comText != ''){
        let newComText = 'comText' + Math.floor(localStorage.length/3) 
        localStorage.setItem(newComText,comText)    
    }
}

function postTheCom(msg, _form){

    let indexNewCom = Math.floor(localStorage.length/3)

    let newTime = 'time'+ indexNewCom
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()+ ', Today ' ;
    localStorage.setItem(newTime,time)

    timeNewCom = time

    element_comment = _form.querySelector(`input[name=${msg}]`)

    comText = element_comment.value

    if (comText != ''){
        
        let newH3 = document.createElement('h3'); 
        newH3.textContent = timeNewCom

        let newH2 = document.createElement('h2'); 
        newH2.textContent = 'You'

        let newSpan = document.createElement('span'); 
        newSpan.className = 'status blue'

        let newEntete = document.createElement('div'); 
        newEntete.className = 'entete'

        newEntete.appendChild(newH3);
        newEntete.appendChild(newH2);
        newEntete.appendChild(newSpan);

        let newTriangle = document.createElement('div'); 
        newTriangle.className = 'triangle'

        let newDivMes = document.createElement('div');
        newDivMes.className = 'message'
        newDivMes.textContent = comText 

        let newLi = document.createElement('li');
        newLi.className = 'me'

        newLi.appendChild(newEntete);
        newLi.appendChild(newTriangle);
        newLi.appendChild(newDivMes);
        

        chat.appendChild(newLi);
    }
}