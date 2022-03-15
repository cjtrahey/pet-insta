import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7oG5eq-8hLUl59mTaO-fC5jPeHZ_jzDQ",
    authDomain: "pet-insta-react.firebaseapp.com",
    projectId: "pet-insta-react",
    storageBucket: "pet-insta-react.appspot.com",
    messagingSenderId: "851152537744",
    appId: "1:851152537744:web:d167c5677544a06ee13015",
    measurementId: "G-1F94VE393V"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//   export default db;
