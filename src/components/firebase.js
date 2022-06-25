import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBl2HPVIxgMVk0_IA-B3a31B_wrmAv1q-Q",
  authDomain: "clone-f1246.firebaseapp.com",
  projectId: "clone-f1246",
  storageBucket: "clone-f1246.appspot.com",
  messagingSenderId: "344043750226",
  appId: "1:344043750226:web:eac8a5b073c0a7501f308b",
  measurementId: "G-0MYS6H65ES"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};