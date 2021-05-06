import firebase from 'firebase/app';

const firebaseConfig  = {
    apiKey: "AIzaSyCdum9ey3HVdeh18HqRvNlSuivVasxh1CQ",
    authDomain: "tenedores-9322a.firebaseapp.com",
    projectId: "tenedores-9322a",
    storageBucket: "tenedores-9322a.appspot.com",
    messagingSenderId: "894531097443",
    appId: "1:894531097443:web:f9a2abe6fc7d6e883cb956"
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);
