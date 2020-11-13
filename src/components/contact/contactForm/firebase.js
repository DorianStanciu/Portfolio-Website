import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfJA5aPahewFwYWVuYMao77-hbjeGf4xA",
    authDomain: "react-contact-form-12096.firebaseapp.com",
    databaseURL: "https://react-contact-form-12096.firebaseio.com",
    projectId: "react-contact-form-12096",
    storageBucket: "react-contact-form-12096.appspot.com",
    messagingSenderId: "506107176180",
    appId: "1:506107176180:web:52fd15a06fe7139811eaa1"
});

var db = firebaseApp.firestore();

export { db };