let notifyMe=document.getElementById('button__submit');
const form = document.getElementById('formRegister');
const username = document.getElementById('formRegisterName');
const email = document.getElementById('formRegisterEmail');
let joinText=document.getElementById('add_success');
let joinIcon=document.getElementById('add_success_load_icon');
let SuccessText=document.getElementById('complete-success');

username.addEventListener("invalid", function(event){
    event.preventDefault()
  });

  email.addEventListener("invalid", function(event){
    event.preventDefault()
  });

  notifyMe.addEventListener('click', () => {
    validateInputs();
  });
  form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
      } else {
      }
    });
    return false;
  });
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');
    const briefMessage = document.querySelector('#brief-message');

    errorDisplay.innerHTML = "<i class=\"fa-solid fa-triangle-exclamation\"></i><p>" + message + "</p>";
    briefMessage.style.color = "#ff6f6f";
    setTimeout(() => {
        errorDisplay.innerHTML = "";
        briefMessage.style.color = "#ffffff";
    }, 4000);
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerHTML = "<i class=\"fa-solid fa-check\"></i>";
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    console.log("Success");

    if(usernameValue === '') {
        setError(username, 'This field is required.');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Please enter your email address.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (!usernameValue == '' && !emailValue == '' && !isValidEmail(emailValue) == false) {
      setTimeout(function(){
        SuccessText.style.display= "block";
        notifyMe.classList.add("success");
      },2000); 
      setTimeout(function(){
        joinText.style.display= "none";
      },0); 
      setTimeout(function(){
        joinIcon.style.display= "block";
      },100); 
      setTimeout(function(){
        joinIcon.style.display= "none";
      },2000); 
      setTimeout(function(){
        location.reload();
      },8000); 
    }
};
