console.log(`Welcome to Praj's World`)

let Name = document.getElementById('user');
let email = document.getElementById('email');
let phone = document.getElementById('phone')
let validName = false;
let validemail = false;
let validphone = false;

Name.addEventListener('blur', function () {
    let regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    if (regex.test(str)) {
        console.log("you name is valid")
        Name.classList.remove('is-invalid')
        validName = true;
    }
    else {
        console.log("Your name is invalid")
        Name.classList.add('is-invalid')
        validName = false;
    }


})

email.addEventListener('blur', function () {
    let regex = /^([\_0-9a-zA-Z]+)@([a-zA_Z]+)\.([a-z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log("you email is valid")
        email.classList.remove('is-invalid')
        validemail = true;
    }
    else {
        console.log("Your email is invalid")
        email.classList.add('is-invalid')
        validemail = false;
    }


})
phone.addEventListener('blur', function () {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log("you phone number is valid")
        phone.classList.remove('is-invalid')
        validphone = true;
    }
    else {
        console.log("Your phone number is invalid")
        phone.classList.add('is-invalid')
        validphone = false;
    }
})
let submit = document.getElementById('submit')
submit.addEventListener('click', function (e) {
    console.log('you clicked on submit')
    console.log(validName, validemail, validphone)

    if (validName && validemail && validphone) {
        let success = document.getElementById('success')
        success.classList.add("show")    
    }
    else{
        let faliure = document.getElementById('faliure')
        faliure.classList.add("show")
        }

})
