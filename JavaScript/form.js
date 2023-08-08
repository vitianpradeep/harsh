// 83% of storage used … If you run out, you won't have enough storage to create, edit, and upload files. Get 100 GB of storage for ₹130.00 ₹35.00/month for 3 months.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCG_0np5n74fRPjvhL3z8ryqmSpK0t_jU8",
  authDomain: "vit-project-9ec2f.firebaseapp.com",
  projectId: "vit-project-9ec2f",
  storageBucket: "vit-project-9ec2f.appspot.com",
  messagingSenderId: "415706929290",
  appId: "1:415706929290:web:fa5db0b9faf99d74b6b573",
  measurementId: "G-4XPJ5VK5GG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "inline";
  document.getElementById("login-div").style.display = "none";
});

document.getElementById("log-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "none";
  document.getElementById("login-div").style.display = "inline";
});

document.getElementById("login-btn").addEventListener("click", function () {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        window.location = "LoggedIn.html";

        //After successful login, user will be redirected to home.html
      }
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("login-div").style.display = "none";
      document.getElementById("result").innerHTML =
        "Welcome Back<br>" + loginEmail + " was Login Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("login-div").style.display = "none";
      document.getElementById("result").innerHTML =
        "Sorry ! <br>" + errorMessage;
    });
});

document.getElementById("register-btn").addEventListener("click", function () {
  const registerEmail = document.getElementById("register-email").value;
  const registerPassword = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML =
        "Welcome <br>" + registerEmail + " was Registered Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML =
        "Sorry ! <br>" + errorMessage;
    });
});

document.getElementById("log-out-btn").addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      document.getElementById("result-box").style.display = "none";
      document.getElementById("login-div").style.display = "inline";
    })
    .catch((error) => {
      document.getElementById("result").innerHTML =
        "Sorry ! <br>" + errorMessage;
    });
});
