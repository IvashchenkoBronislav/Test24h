import logoSVG from '../img/vavada_logo.svg';
import './header.scss';

const navigationItems = [
    {
        label:"Home",
        color:"#17eada"
    }, 
    {
        label:"Review",
        color:"#de593e"
    },
    {
        label:"Bonus",
        color:"#9a5cff"
    },
    {
        label:"Spin",
        color:"#e8ce3a"
    }
]


let header = document.createElement('header');
header.classList.add('header');

let headerCase = document.createElement('div');
headerCase.classList.add('header-case');

let logo = document.createElement('img');
logo.src = logoSVG
logo.classList.add('header-logo');

let navigation = document.createElement('nav');
navigation.classList.add('header-navigation');

// ======= User =======

let headerUserCase = document.createElement('div');
headerUserCase.classList.add('header-user-case');

let uesrLogIn = document.createElement('button');
uesrLogIn.classList.add('user-login');
uesrLogIn.innerHTML = `<a href="#log-in">Login</a>`;

let userRegister = document.createElement('button');
userRegister.classList.add('user-register');
userRegister.innerHTML = `<a href="#reg">Registration</a>`;



headerUserCase.appendChild(uesrLogIn);
headerUserCase.appendChild(userRegister);

header.appendChild(headerCase);
headerCase.appendChild(logo);
headerCase.appendChild(navigation);
headerCase.appendChild(headerUserCase);

navigationItems.map((item, index) => {
    let navigationItem = document.createElement('a');
    navigationItem.classList.add('header-navigation-item');
    navigationItem.style.color = item.color; // Встанов
    navigationItem.textContent = item.label; // Встановлення тексту    
    navigation.appendChild(navigationItem); // Додаємо елемент в навігацію
});

// ======= Pop-Up =======
let popUpActive = false;
let popUp = document.createElement('div');
popUp.classList.add('header-pop-up');
popUp.style.display = "none";

uesrLogIn.addEventListener("click", function () {
    popUpActive = !popUpActive;
    popUp.style.display = popUpActive ? "block" : "none";
});

let form = document.createElement("form");
form.name = "user_login_form";
form.method = "post";
form.action = "/login_check";
form.classList.add("snowplow-form", "login");

function createInputBox(labelText, inputType, inputId, inputName, placeholder, extraClass = "") {
    let boxFormInput = document.createElement("div");
    boxFormInput.classList.add("box-form-input");

    let label = document.createElement("label");
    label.htmlFor = inputId;
    label.classList.add("required");
    label.textContent = labelText;

    let boxInputText = document.createElement("div");
    boxInputText.classList.add("box-input-text");
    if (extraClass) boxInputText.classList.add(extraClass);

    let input = document.createElement("input");
    input.type = inputType;
    input.id = inputId;
    input.name = inputName;
    input.required = true;
    input.placeholder = placeholder;
    if (extraClass === "password") input.classList.add("private-field");

    boxInputText.appendChild(input);
    boxFormInput.appendChild(label);
    boxFormInput.appendChild(boxInputText);

    return boxFormInput;
}

let closeButton = document.createElement("button");
closeButton.classList.add("pop-up_button-close");
closeButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.714c-4.591 0-8.312 3.71-8.312 8.286 0 .953.161 1.868.457 2.718A8.313 8.313 0 0 0 10 18.285c2.294 0 4.37-.925 5.875-2.424a8.243 8.243 0 0 0 2.438-5.862A8.228 8.228 0 0 0 16.82 5.26 8.312 8.312 0 0 0 10 1.714ZM0 10C0 4.477 4.477 0 10 0a9.989 9.989 0 0 1 8.203 4.28A9.96 9.96 0 0 1 20 10a9.972 9.972 0 0 1-2.933 7.075A9.968 9.968 0 0 1 10 20a9.986 9.986 0 0 1-3.644-.685A10.024 10.024 0 0 1 .551 13.28 9.982 9.982 0 0 1 0 10Z"></path>
        <path d="m11.238 10 2.632-2.631a.876.876 0 0 0-1.238-1.237L10 8.763 7.37 6.131a.876.876 0 0 0-1.237 1.237L8.763 10l-2.63 2.631a.877.877 0 0 0 0 1.238c.34.34.896.34 1.237 0L10 11.237l2.632 2.632a.877.877 0 0 0 1.238 0 .877.877 0 0 0 0-1.238L11.238 10Z"></path>
    </svg>
`;

closeButton.addEventListener("click", function () {
    popUpActive = false
    popUp.style.display = popUpActive ? "block" : "none";
});


popUp.appendChild(closeButton);


form.appendChild(createInputBox("Phone or email", "text", "username", "username", "Phone or email"));

let passwordBox = createInputBox("Password", "password", "password", "password", "Password", "password");

let passwordWrapper = document.createElement("div");
passwordWrapper.classList.add("password-wrapper");

let passwordInput = passwordBox.querySelector("input");
passwordWrapper.appendChild(passwordInput);

let passwordEye = document.createElement("div");
passwordEye.classList.add("password-eye");
passwordEye.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.41 16.5" width="22.41" height="16.5">
        <g class="svg_eye">
            <path d="M11.2,4.39C4.59,4.39.75,10.3.75,10.3s3.84,5.45,10.45,5.45S21.66,10.3,21.66,10.3,17.82,4.39,11.2,4.39Z"></path>
            <path d="M15.14,6.66a4.55,4.55,0,1,1-7.88,0"></path>
            <path d="M.75,5.75c2.31-2.46,6.13-5,10.45-5s8.14,2.54,10.45,5"></path>
            <circle cx="11.2" cy="8.93" r="1.36"></circle>
        </g>
    </svg>
`;

passwordEye.addEventListener("click", function () {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

passwordWrapper.appendChild(passwordEye);
passwordBox.querySelector(".box-input-text").appendChild(passwordWrapper);
form.appendChild(passwordBox);

let boxCheckbox = document.createElement("div");
boxCheckbox.classList.add("box-checkbox");

let rememberMe = document.createElement("input");
rememberMe.type = "checkbox";
rememberMe.id = "remember_me";
rememberMe.name = "remember_me";
rememberMe.value = "1";

let rememberLabel = document.createElement("label");
rememberLabel.htmlFor = "remember_me";
rememberLabel.textContent = "Remember me";

boxCheckbox.appendChild(rememberMe);
boxCheckbox.appendChild(rememberLabel);
form.appendChild(boxCheckbox);

let boxBtn = document.createElement("div");
boxBtn.classList.add("box-button");

let submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.id = "submit";
submitButton.name = "submit";
submitButton.value = "Log in";
submitButton.classList.add("button-submit");

boxBtn.appendChild(submitButton);

let forgetPassword = document.createElement("div");
forgetPassword.classList.add("forget_password");

let forgetPasswordLink = document.createElement("a");
forgetPasswordLink.href = "#forget-password";
forgetPasswordLink.textContent = "Forget password?";

forgetPassword.appendChild(forgetPasswordLink);
boxBtn.appendChild(forgetPassword);
form.appendChild(boxBtn);

popUp.appendChild(form);

headerUserCase.appendChild(popUp);

export {header};