var register = document.querySelector('#register') ;
var form = document.querySelector('#login-form');
var signIn = document.querySelector('#signIn')

function jstRegistered(){
  alert('You have just registered. Please login again.');
}

function registerino(mail, password, _form){
  element_mail = _form.querySelector(`input[name=${mail}]`)
  element_password = _form.querySelector(`input[name=${password}]`)
  
  let identifying_string = 'MAIL'+element_mail.value + 'PASSWORD'+element_password.value ;

  let len = sessionStorage.length

  
  let inSStorage = false
  
  for (var i = 0; i < len; i++ ) {
      if(sessionStorage.getItem(i) == identifying_string) {
          inSStorage = true
      }
  }
  
  if (inSStorage) {
    console.log('Successful login')
    window.location.href = 'intro.html';
    // addComent(element_firstname.value);
    console.log('defining')

} else {
    sessionStorage.setItem(len,identifying_string)
    jstRegistered();
    console.log('You just registered')
}
}

function loginerino(mail, password, _form){
  element_mail = _form.querySelector(`input[name=${mail}]`)
  element_password = _form.querySelector(`input[name=${password}]`)
  
  let identifying_string = 'MAIL'+element_mail.value + 'PASSWORD'+element_password.value ;

  let len = sessionStorage.length

  
  let inSStorage = false
  
  for (var i = 0; i < len; i++ ) {
      if(sessionStorage.getItem(i) == identifying_string) {
          inSStorage = true
      }
  }
  
  if (inSStorage) {
    console.log('Successful login')
    window.location.href = 'intro.html';
    // addComent(element_firstname.value);
    console.log('defining')

} else {
  alert('Unknown username / password');
}
}

register.addEventListener('click', (e) => {
  e.preventDefault();
  registerino('mail','password',form) ;
  return false
})

signIn.addEventListener('click', (e) => {
  e.preventDefault();
  loginerino('mail','password',form) ;
  return false
})