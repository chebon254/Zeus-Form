const validateInput = () => {
    var firstname = document.formRegister.formRegisterName.value;
    var email = document.formRegister.formRegisterEmail.value;
    if ((firstname == null || firstname == "") && (email == null || email == "" || !validateEmail(email))) {
        document.getElementById("firstnameError").innerHTML = "This field is required";
        document.getElementById("emailError").innerHTML = "Please enter your email address";
        document.getElementById("brief__required").style.color = "#FF6F6F"
        document.getElementById("email").classList.add("pyramidIcon")
        document.getElementById("firstname").classList.add("pyramidIcon")
        return false;
    } else if (firstname == null || firstname == "") {
        document.getElementById("firstnameError").innerHTML = "This field is required";
        document.getElementById("brief__required").style.color = "#FF6F6F"
        document.getElementById("firstname").classList.add("pyramidIcon")
        return false;
    } else if (email == null || email == "" || !validateEmail(email)) {
        console.log(validateEmail(email))
        document.getElementById("emailError").innerHTML = "Please enter your email address";
        document.getElementById("brief__required").style.color = "#FF6F6F"
        document.getElementById("email").classList.add("pyramidIcon")
        return false
    } else {
        document.getElementById("firstnameError").innerHTML = ""
        document.getElementById("emailError").innerHTML = ""
        document.getElementById("submitButton").style.background = "rgba(75, 211, 123, 0.63)"
        document.getElementById("submitButton").classList.add('success_button')
        document.getElementById("submitButton").value = "Success"
        document.getElementById("submitButton").classList.add("doneIcon")
            //  return false;
    }
    console.log("Hello Ethiopia")
}
const submitForm = () => {
    document.getElementById("button__submit").style.background = "rgba(75, 211, 123, 0.63)"
    document.getElementById("button__submit").style.border = "1px solid rgba(75, 211, 123, 0.63)"
    document.getElementById("button__submit").classList.add('success_button')
    document.getElementById("add_success").innerHTML = "Success"
    document.getElementById("button__submit").classList.add("doneIcon")

}
const checkfirstname = () => {
    if ((firstname !== null || firstname !== "") && (email !== null || email !== "")) {
        document.getElementById("firstnameError").innerHTML = ""
        document.getElementById("emailError").innerHTML = ""
        document.getElementById("brief__required").style.color = "#fff"
        document.getElementById("email").classList.remove("pyramidIcon")
        document.getElementById("firstname").classList.remove("pyramidIcon")
        return false;
    } else if (firstname !== null || firstname !== "") {
        document.getElementById("firstnameError").innerHTML = ""
        document.getElementById("firstname").classList.remove("pyramidIcon")
        return false;
    }
}
const checkEmail = () => {
    if ((firstname !== null || firstname !== "") && (email !== null || email !== "")) {
        document.getElementById("firstnameError").innerHTML = ""
        document.getElementById("emailError").innerHTML = ""
        document.getElementById("brief__required").style.color = "#fff"
        document.getElementById("email").classList.remove("pyramidIcon")
        document.getElementById("firstname").classList.remove("pyramidIcon")
        return false;
    } else if (email !== null || email !== "") {
        document.getElementById("emailError").innerHTML = ""
        document.getElementById("email").classList.remove("pyramidIcon")
        return false
    }
}
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}



function checkform() {
    var f = document.forms["formRegister"].elements;
    var email = document.formRegister.formRegisterEmail.value;
    var firstname = document.formRegister.formRegisterName.value;
    var cansubmit = true;
    for (var i = 0; i < f.length; i++) {
        if (email.length == 0 || firstname.length == 0)
            cansubmit = false;
        console.log(cansubmit)
    }
    if (firstname.length > 0) {
        document.getElementById('formRegisterName').classList.add("input__field-valid")
        document.getElementById('firstNameSpan').classList.add('input__field_input__label-content')
    } else {
        document.getElementById('formRegisterName').classList.remove("input__field-valid")
        document.getElementById('firstNameSpan').classList.remove('input__field_input__label-content')
    }
    if (email.length > 0) {
        document.getElementById('formRegisterEmail').classList.add("input__field-valid")
        document.getElementById('emailSpan').classList.add('input__field_input__label-content')
    } else {
        document.getElementById('formRegisterEmail').classList.remove("input__field-valid")
        document.getElementById('emailSpan').classList.remove('input__field_input__label-content')
    }
    if (!validateEmail(email)) cansubmit = false;
    console.log(cansubmit)
    document.getElementById('button__submit').disabled = !cansubmit;
    if (cansubmit === true) {
        document.getElementById('button__submit').style.opacity = '1';
        document.getElementById('button__submit').style.cursor = 'pointer';
    } else document.getElementById('button__submit').style.opacity = '0.2';

}
window.onload = checkform;