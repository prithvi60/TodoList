import firebase from "firebase";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDhxZ5LXdZt7ku6mN2cqBDN-tBZGcD_wRI",
    authDomain: "inner-period-214713.firebaseapp.com",
    projectId: "inner-period-214713",
    storageBucket: "inner-period-214713.appspot.com",
    messagingSenderId: "640017315050",
    appId: "1:640017315050:web:859ee3d8e3fcaee7609393",
    measurementId: "G-F9V1DCCZ1Q"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export {db} ;
  