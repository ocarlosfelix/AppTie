// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRSY7BSD0BenB5ccitgQ6quRnEtcidW1w",
  authDomain: "apptie-f06b1.firebaseapp.com",
  projectId: "apptie-f06b1",
  storageBucket: "apptie-f06b1.appspot.com",
  messagingSenderId: "780848129482",
  appId: "1:780848129482:web:00b12324952b6dccde5b33"
};

// Initialize Firebase
if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);

}
export default firebase;

