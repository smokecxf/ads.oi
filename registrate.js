

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqmovdPfYG4-CX8CQ9XSyDx6OTcKSPx1U",
    authDomain: "log-in-and-sign-in-dfb64.firebaseapp.com",
    projectId: "log-in-and-sign-in-dfb64",
    storageBucket: "log-in-and-sign-in-dfb64.firebasestorage.app",
    messagingSenderId: "190600295302",
    appId: "1:190600295302:web:34e5f351adc1ca974db207"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

   // <!-- Log In Form -->
  // submit button
  const submit = document.getElementById('submit');
  submit.addEventListener('click', function(event) {
  event.preventDefault()
  // input
  const gmail = document.getElementById('login-email').value; 
  const passw = document.getElementById('login-password').value; 
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
  })
