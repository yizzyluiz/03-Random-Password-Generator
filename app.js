const generatePass = document.querySelector('.btn1');
const copyPass = document.querySelector('.btn2');
const randomPassword =  document.getElementById('password');

generatePass.addEventListener('click', () => genPassword())
copyPass.addEventListener('click', () => copyPassword())

function genPassword () {
  let chars = "0123456789abcdefghijkmnlopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKMNLOPQRSTUVWXYZ"
  passwordLength = 7;
  password = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  randomPassword.value = password;
}

function copyPassword () {
  let copyText = randomPassword;
  copyText.select()
  document.execCommand('copy');
}