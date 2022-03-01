const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailErr = document.querySelector('#emailErr');
const password = document.querySelector('#password');
const passwordErr = document.querySelector('#passwordErr');
const confirmPass = document.querySelector('#confirmPassword');
const confirmPassErr = document.querySelector('#confirmErr');
const submit = document.querySelector('button');

form.addEventListener('submit', (e) => { submitHandler(e) });

const submitHandler = (e) => {
    if (emailErr.firstChild)
        emailErr.removeChild(emailErr.firstChild);
    if (passwordErr.firstChild)
        passwordErr.removeChild(passwordErr.firstChild);
    if (confirmPassErr.firstChild)
        confirmPassErr.removeChild(confirmPassErr.firstChild);
    email.style.borderColor = 'black';
    password.style.borderColor = 'black';
    confirmPass.style.borderColor = 'black';
    if (email.value.length == 0) {
        const err = document.createTextNode('PLEASE ENTER AN EMAIL ADDRESS');
        emailErr.appendChild(err);
        email.style.borderColor = 'red';
        e.preventDefault();
    } else if (!/^\w+@\w+\.\w+$/.test(email.value)) {
        const err = document.createTextNode('PLEASE ENTER A VALID EMAIL ADDRESS');
        emailErr.appendChild(err);
        email.style.borderColor = 'red';
        e.preventDefault();
    } else if (password.value.length == 0) {
        const err = document.createTextNode('PLEASE ENTER A PASSWORD');
        passwordErr.appendChild(err);
        password.style.borderColor = 'red';
        e.preventDefault();
    } else if (confirmPass.value.length == 0 || confirmPass.value != password.value) {
        const err = document.createTextNode("PASSWORD YOU'VE ENTERED DO NOT MATCH");
        confirmPassErr.appendChild(err);
        confirmPass.style.borderColor = 'red';
        e.preventDefault();
    }
};