   // Form validation to check for empty fields
   document.querySelector(".login-form").addEventListener("submit", function(event) {
    const username = document.querySelector(".input-field[type='text']").value;
    const password = document.querySelector(".input-field[type='password']").value;

    if (!usernameField || !passwordField) {
        alert("Please enter both username and password.");
        event.preventDefault(); 
    }
    
});

// Toggle password visibility
function togglePassword() {
    const passwordField = document.querySelector("#password");
    const showPasswordCheckbox = document.querySelector("#show-password");
    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Remember Me feature using localStorage
const usernameField = document.querySelector(".input-field[type='text']");
const passwordField = document.querySelector("#password");
const rememberMeCheckbox = document.createElement("input");
rememberMeCheckbox.type = "checkbox";
rememberMeCheckbox.id = "rememberMe";
rememberMeCheckbox.style.marginTop = "10px";
const label = document.createElement("label");
label.textContent = " Remember Me";
label.htmlFor = "rememberMe";

document.querySelector(".login-form").appendChild(rememberMeCheckbox);
document.querySelector(".login-form").appendChild(label);

if (localStorage.getItem("savedUsername")) {
    usernameField.value = localStorage.getItem("savedUsername");
    rememberMeCheckbox.checked = true;
}

rememberMeCheckbox.addEventListener("change", function() {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem("savedUsername", usernameField.value);
    } else {
        localStorage.removeItem("savedUsername");
    }
});

usernameField.addEventListener("input", function() {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem("savedUsername", usernameField.value);
    }
});

// Login button loading animation
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function() {
    if(usernameField.value && passwordField.value){
        loginButton.disabled = true;
    loginButton.textContent = "Logging in...";

    setTimeout(() => {
        loginButton.disabled = false;
        loginButton.textContent = "Login";
        window.location.href = "lander.html";
    }, 2000);
}
else{
    alert("Please enter both username and password.")
}

});