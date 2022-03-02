const email = document.querySelector('#email');
const emailErr = document.querySelector('#emailErr');
const password = document.querySelector('#password');
const passwordErr = document.querySelector('#passwordErr');
const confirmPassword = document.querySelector('#confirmPassword');
const confirmPassErr = document.querySelector('#confirmErr');
const submit = document.querySelector('button');

const empty = () => {
  emailErr.textContent = '';
  passwordErr.textContent = '';
  confirmPassErr.textContent = '';
};

const errorHandle = (errorText, inputBox, errorLabel, e) => {
  const err = document.createTextNode(errorText);
  errorLabel.appendChild(err);
  // eslint-disable-next-line no-param-reassign
  inputBox.style.borderColor = '#ff4500';
  e.preventDefault();
};

const submitHandler = (event) => {
  if (email.validity.valueMissing) {
    empty();
    errorHandle('Please enter an email address', email, emailErr, event);
  } else if (email.validity.typeMismatch) {
    empty();
    errorHandle('Please enter a valid email address', email, emailErr, event);
  } else if (password.validity.valueMissing) {
    empty();
    errorHandle('Please enter a password', password, passwordErr, event);
  } else if (password.value.length < 8) {
    empty();
    errorHandle('Please enter at least 8 charachters', password, passwordErr, event);
  } else if (confirmPassword.validity.valueMissing) {
    empty();
    errorHandle('Please confirm the password', confirmPassword, confirmPassErr, event);
  } else if (password.value !== confirmPassword.value) {
    empty();
    errorHandle('Please confirm the password', confirmPassword, confirmPassErr, event);
  }
};

submit.addEventListener('click', (e) => {
  submitHandler(e);
});
