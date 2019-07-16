// listen for auth status changes
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    HideLogin();
  } else {
    console.log('user logged out');
    ShowLogin();
  }
});

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().languageCode = 'pt';

document.getElementById("LoginWithGoogle").onclick = OnLogin;

async function OnLogin() {
  console.log("We have hit the login button");
  firebase.auth().signInWithPopup(provider).then(async function(result) {
    console.log("Something happend");
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().signOut();
});

//
//-------------------------Register && login with email part of this damed script

// signup
const signupForm = document.querySelector('#register-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);

    // close the signup modal & reset form
    RegisterModal.style.display = "none";
    signupForm.reset();

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    document.getElementById("RegisterErrorText").innerText = errorMessage;
  });
});

// login
const loginForm = document.querySelector('#LoginEmail-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  firebase.auth().signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    LoginEmailModal.style.display = "none";
    Loginmodal.style.display = "none";
    loginForm.reset();

  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    document.getElementById("LoginEmailErrorText").innerText = errorMessage;
  });

});




//---------------------------Modal stuff and things

// Get the modal
var Loginmodal = document.getElementById("LoginModal");
var RegisterModal = document.getElementById("RegisterModal");
var LoginEmailModal = document.getElementById("LoginEmailModal");

// Get the button that opens the modal
var Loginbtn = document.getElementById("LoginButtonClick");
var RegisterBtn = document.getElementById("RegisterButtonClick");
var LoginEmailBtn = document.getElementById("LoginEmailClick");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
Loginbtn.onclick = function() {
  Loginmodal.style.display = "block";
  LoginPart.style.display = "none";
};

LoginEmailBtn.onclick = function(){
  LoginEmailModal.style.display = "block";
  Loginmodal.style.display = "none";
};

RegisterBtn.onclick = function(){
  RegisterModal.style.display = "block";
  LoginPart.style.display = "none";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  Loginmodal.style.display = "none";
  RegisterModal.style.display = "none";
  LoginEmailModal.style.display = "none";
  LoginPart.style.display = "block";
};



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Loginmodal || event.target == RegisterModal || event.target == LoginEmailModal) {
    Loginmodal.style.display = "none";
    RegisterModal.style.display = "none";
    LoginEmailModal.style.display = "none";
    LoginPart.style.display = "block";
  }
};

//Hide or show the login stuff login-part
const LoginPart = document.getElementById("login-part");
function HideLogin() {
  LoginPart.style.display = "none";
}

function ShowLogin() {
  LoginPart.style.display = "block";
}

