import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyBRSY7BSD0BenB5ccitgQ6quRnEtcidW1w",
  authDomain: "apptie-f06b1.firebaseapp.com",
  databaseURL: "https://apptie-f06b1-default-rtdb.firebaseio.com",
  projectId: "apptie-f06b1",
  storageBucket: "apptie-f06b1.appspot.com",
  messagingSenderId: "780848129482",
  appId: "1:780848129482:web:00b12324952b6dccde5b33"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);