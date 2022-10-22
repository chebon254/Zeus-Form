function nameCheck() {
    let formName = document.forms["formRegister"]["formRegisterName"].value;
    let nameMessage=document.getElementById('name-message');
    if (formName == "") {
        nameMessage.classList.add("active-message")
        setTimeout(() => {
            nameMessage.classList.remove("active-message");
        }, 2000);
    } else{
        nameMessage.classList.remove("active-message");
    }
}

function emailCheck() {
    let formEmail = document.forms["formRegister"]["formRegisterEmail"].value;
    let emailMessage=document.getElementById('email-message');
    if (formEmail == "") {
        emailMessage.classList.add("active-message");
        setTimeout(() => {
            emailMessage.classList.remove("active-message");
        }, 2000);
    } else{
        emailMessage.classList.remove("active-message");
    }
}




let notifyMe=document.getElementById('button__submit');
let joinText=document.getElementById('add_success');
let SuccessText=document.getElementById('complete-success');

notifyMe.addEventListener('click',(e)=>{
    e.preventDefault();
    nameCheck();
    emailCheck(); 
    buttonCheck();
});


function buttonCheck() {
    notifyMe.classList.add("success");
    joinText.style.display= "none";
    SuccessText.style.display= "block";
}