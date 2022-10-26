// function nameCheck() {
//     let formName = document.forms["formRegister"]["formRegisterName"].value;
//     let nameMessage=document.getElementById('name-message');
//     if (formName == "") {
//         nameMessage.classList.add("active-message");
//         setTimeout(() => {
//             nameMessage.classList.remove("active-message");
//         }, 2000);
//     } else{
//         nameMessage.classList.remove("active-message");
//     }
// }

// function emailCheck() {
//     let formEmail = document.forms["formRegister"]["formRegisterEmail"].value;
//     let emailMessage=document.getElementById('email-message');
//     if (formEmail == "") {
//         emailMessage.classList.add("active-message");
//         setTimeout(() => {
//             emailMessage.classList.remove("active-message");
//         }, 2000);
//     } else{
//         emailMessage.classList.remove("active-message");
//     }
// }




// let notifyMe=document.getElementById('button__submit');
// let joinText=document.getElementById('add_success');
// let SuccessText=document.getElementById('complete-success');

// notifyMe.addEventListener('click',(e)=>{
//     e.preventDefault();
//     nameCheck();
//     emailCheck();
//     buttonCheck(); 
// });


// function buttonCheck() {
//     let formName = document.forms["formRegister"]["formRegisterName"].value;
//     let formEmail = document.forms["formRegister"]["formRegisterEmail"].value;
//     if (formEmail == "" && formName == "") {
//         return false;
//     } else if (formEmail == "" || formName == "") {
//         return false;
//     } else{
//         notifyMe.classList.add("success");
//         joinText.style.display= "none";
//         SuccessText.style.display= "block";
//     }
// }


let notifyMe=document.getElementById('button__submit');
const form = document.getElementById('formRegister');
const username = document.getElementById('formRegisterName');
const email = document.getElementById('formRegisterEmail');
let joinText=document.getElementById('add_success');
let SuccessText=document.getElementById('complete-success');

notifyMe.addEventListener('click', (e) => {
    e.preventDefault();

    validateInputs();
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
        notifyMe.classList.add("success");
        joinText.style.display= "none";
        SuccessText.style.display= "block";
    }
};
