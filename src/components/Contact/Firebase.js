import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   // Your web app's Firebase configuration
  
    apiKey: "AIzaSyC5CCvMfuPKS-psBIhn75p6JoL4sC83QgY",
    authDomain: "react-contact-form-446e6.firebaseapp.com",
    projectId: "react-contact-form-446e6",
    storageBucket: "react-contact-form-446e6.appspot.com",
    messagingSenderId: "592514153302",
    appId: "1:592514153302:web:4369ba25babc19849574f7"

})

 const database = firebaseApp.firestore()

 export {database}
