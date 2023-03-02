import './style.css'
import { displayWorking } from './helper.js'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL9Vfw5AJKfmeeXFRlFuyMKvH16C8lyGk",
  authDomain: "pwofibeta.firebaseapp.com",
  projectId: "pwofibeta",
  storageBucket: "pwofibeta.appspot.com",
  messagingSenderId: "612729901997",
  appId: "1:612729901997:web:cbfddce6f2bf647eb20724"
};

//Query HTML elements
const registerForm = document.querySelector("#registration-form");
const registerEmail = document.querySelector("#registration-email");
const registerPass = document.querySelector("#registration-password");
const checkAuthButton = document.querySelector("#check-auth");
const signOutButton = document.querySelector("#sign-out");
const signInForm = document.querySelector("#sign-in-form");
const signInEmail = document.querySelector("#sign-in-email");
const signInPass = document.querySelector("#sign-in-password");




// testing function (local import)
displayWorking();

//Init firebase app
const app = initializeApp(firebaseConfig);
console.log(app);

//Initialize Firestore DB
const db = getFirestore(app);


const auth = getAuth();

//register email user
registerForm.addEventListener("submit", event => {
  event.preventDefault();

  console.log("registration submitted")

  createUserWithEmailAndPassword(auth, registerEmail.value, registerPass.value)
  .then(userCredential => {
    const user = userCredential.user;
    console.log(`signed in as ${user.email}`);
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(error.code, error.message);
  }).finally(() => {
    console.log("finally occured (registration)");
  })
});

//sign user in
signInForm.addEventListener("submit", event => {
  event.preventDefault();

  console.log("Sign in attempted");

  signInWithEmailAndPassword(auth, signInEmail.value, signInPass.value)
  .then(userCredential => {
    const user = userCredential.user;
    console.log(`signed in as ${user.email}`);
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(error.code, error.message);
  }).finally(() => {
    console.log("finally occured (sign-in)");
  })

});


//check auth status
checkAuthButton.addEventListener("click", () => {
  console.log(auth.currentUser);
});

//sign user out
signOutButton.addEventListener("click", () => {
  signOut(auth).then(() => {
    console.log("Sign-out successful")
  }).catch((error) => {
    console.error(error);
  });
})



















//vite boiler plate
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// // `
// setupCounter(document.querySelector('#counter'))


