// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCG_0np5n74fRPjvhL3z8ryqmSpK0t_jU8",
  authDomain: "vit-project-9ec2f.firebaseapp.com",
  projectId: "vit-project-9ec2f",
  storageBucket: "vit-project-9ec2f.appspot.com",
  messagingSenderId: "415706929290",
  appId: "1:415706929290:web:fa5db0b9faf99d74b6b573",
  measurementId: "G-4XPJ5VK5GG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

// Register 
document.getElementById("Signup").addEventListener('click', function(){

  // const fname = document.getElementById("FirstName").value;
  // const lname = document.getElementById("LastName").value;
  const email = document.getElementById("EmailId").value;
  const pass = document.getElementById("Password").value;

  createUserWithEmailAndPassword(auth, email, pass)
 .then((userCredential) => {
   const user = userCredential.user;
   alert("User is created successfully");
 }).catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert("Error");
   alert(errorCode)
   alert(errorMessage)
    // document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
 });
});



document.getElementById("login").addEventListener('click', function(){
const loginEmail= document.getElementById("EmailId").value;
const loginPassword =document.getElementById("Password").value;

signInWithEmailAndPassword(auth, loginEmail, loginPassword)
.then((userCredential) => {
 const user = userCredential.user;
//  document.getElementById("result-box").style.display="inline";
//   document.getElementById("login-div").style.display="none";
//   document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
})
.catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
//  document.getElementById("result-box").style.display="inline";
//   document.getElementById("login-div").style.display="none";
//   document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

});
});
