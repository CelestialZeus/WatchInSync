import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDAN0k6qLTEJDWbO4LZxxJ3nwOV0PoYcZM",
    authDomain: "watchinsync-97f0d.firebaseapp.com",
    projectId: "watchinsync-97f0d",
    storageBucket: "watchinsync-97f0d.appspot.com",
    messagingSenderId: "250608991767",
    appId: "1:250608991767:web:64fb9139699dd447536652"
};

firebase = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };