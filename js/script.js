// selectors
const form = document.querySelector('.form'),
      email = document.querySelector('.form__input'),
      errorIcon = document.querySelector('.form__error-icon'),
      errorMsg = document.querySelector('.form__error-msg'),
      pattern = /^(?:[a-zA-Z0-9]){2,20}@{1}(?:[a-z]){2,20}\.{1}(?:[a-z]){2,20}((\.(?:[a-z]){2,20})?)$/;

// listeners
form.addEventListener('submit', (e) => {
  if(email.value.match(pattern)){
    return;
  } else{
    e.preventDefault();
  }
  displayErrors();
})

// functions
function displayErrors(){
  if(!email.value.match(pattern)){
    email.classList.add('form__input--error');
    errorIcon.style.display = 'block';
    errorMsg.style.display = 'block';
  } else{
    email.classList.remove('form__input--error');
    errorIcon.style.display = 'none';
    errorMsg.style.display = 'none';
  }
}