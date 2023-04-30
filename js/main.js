let signInForm = document.getElementById('signInForm');
let signUpForm = document.getElementById('signUpForm');
let logOutNav = document.getElementById('logOutNav');
let mainSection = document.getElementById('mainSection');
let signInBtn = document.querySelector('#signIn');
let signUpBtn = document.querySelector('#signUp');
let logOutBtn = document.getElementById('logout');
let userNameDisplay = document.getElementById('userName');
let goSignUp = document.getElementById('gosignup')
let goSignIn = document.getElementById('goSignIn')
let signInEmail = document.getElementById('signinemail');
let signUpEmail = document.getElementById('signupemail');
let signInPassword = document.getElementById('signinpassword');
let signUpPassword = document.getElementById('signuppassword');
let userName = document.getElementById('name');

// Array of all users Data
let userArray = []


// Check if the local Storage is empty
if (localStorage.getItem('userData' != null)) {
    userArray = JSON.parse(localStorage.getItem('userData'))
} else {
    userArray = [];
}


// signUp page
function signUp() {

    if (userName.value == '' || signUpPassword.value == '' || signUpEmail.value == '') {
        document.getElementById('warningSignUp').innerHTML = `<p>All inputs are required</p>`
    } else {
        let signUpData = {
            name: userName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
        }
        userArray.push(signUpData);
        localStorage.setItem('userData', JSON.stringify(userArray))
        goIn()
    }
}
signUpBtn.addEventListener('click', signUp);

// signIn page
function signIn() {
    if (signInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('warningSignIn').innerHTML = `<p>All inputs are required</p>`
    } else {
        checkUser()

    }
}

function checkUser() {
    for (let i = 0; i < userArray.length; i++) {
        if (signInEmail.value == userArray[i].email && signInPassword.value == userArray[i].password) {
            goHome()
            let displayName = userArray[i].name;
            localStorage.setItem('userName', displayName);
            userNameDisplay.innerHTML = displayName;
            
        }
    }
}

// navigate bettwen the sign in/up pages with the link
goSignUp.onclick = () => goUp();

goSignIn.onclick = () => goIn();

logOutBtn.onclick = () => goOut();

signInBtn.onclick = () => signIn();


// navigation function
function goIn() {
    signInForm.classList.replace("d-none", "d-block");
    signUpForm.classList.replace("d-block", 'd-none');
    return false;
}
function goUp() {
    signInForm.classList.replace("d-block", "d-none");
    signUpForm.classList.replace("d-none", "d-block");
    return false;
}
function goOut() {
    logOutNav.classList.replace("d-block", "d-none");
    signInForm.classList.replace("d-none", "d-block");
}

function goHome() {
    signInForm.classList.replace("d-block", "d-none");
    logOutNav.classList.replace("d-none", "d-block");
    mainSection.classList.replace("d-none", "d-flex");
}