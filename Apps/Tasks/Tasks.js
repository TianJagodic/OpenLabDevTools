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
