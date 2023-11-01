import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyCHSGGhmdhhOb-ynoc0WzyAl0AKhU2GZnY",
    authDomain: "codewar-61af3.firebaseapp.com",
    databaseURL: "https://codewar-61af3-default-rtdb.firebaseio.com",
    projectId: "codewar-61af3",
    storageBucket: "codewar-61af3.appspot.com",
    messagingSenderId: "614754692740",
    appId: "1:614754692740:web:af763c85163f4dfec45cd1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}