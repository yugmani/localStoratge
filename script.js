var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // Fill in code here to retrieve the last email and password.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storgage
  if (userEmail && userPassword ) {
      return;
  }
  else {
    var userEmail = localStorage.getItem("email");
    var userPassword = localStorage.getItem("password");

    userEmailSpan.textContent = userEmail;
    userPasswordSpan.textContent = userPassword;
  }
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // Save email and password to localStorage and render the last registered.
  var userEmail = emailInput.value;
  var userPassword = passwordInput.value;
  
  userEmailSpan.textContent = userEmail;
  userPasswordSpan.textContent = userPassword;

  localStorage.setItem("email", userEmail);
  localStorage.setItem("password", userPassword);
  }
});
