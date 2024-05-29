const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.close');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

checkboxPass.onclick = () =>{
    if (checkboxPass.checked){
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';
    }
}