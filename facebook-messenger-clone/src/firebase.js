import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDdCycOpLpFOYS0Bp4cHL4CvqbJquA6t5Q",
    authDomain: "ft-a1-facebook-messenger-clone.firebaseapp.com",
    databaseURL: "https://ft-a1-facebook-messenger-clone.firebaseio.com",
    projectId: "ft-a1-facebook-messenger-clone",
    storageBucket: "ft-a1-facebook-messenger-clone.appspot.com",
    messagingSenderId: "108746406881",
    appId: "1:108746406881:web:659c55f7b1932df92a30a0",
    measurementId: "G-DTXVHTLT50"

});

const db = firebaseApp.firestore();

export default db;