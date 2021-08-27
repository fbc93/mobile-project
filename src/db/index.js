import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqTq-SFJOkCGB1ASKKETO0IqMfZ9-8hys",
    authDomain: "mobile-project-bb448.firebaseapp.com",
    projectId: "mobile-project-bb448",
    storageBucket: "mobile-project-bb448.appspot.com",
    messagingSenderId: "866125625264",
    appId: "1:866125625264:web:5dadd0b232a8678d310875"
 };

 // Initialize Firebase
 const firebaseapp = firebase.initializeApp(firebaseConfig);
 export default firebaseapp.firestore();