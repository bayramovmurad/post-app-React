import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCHeOkYY9juiOoIaxECE6tv88iSvqeVuGE",
    authDomain: "curious-clone-403517.firebaseapp.com",
    projectId: "curious-clone-403517",
    storageBucket: "curious-clone-403517.appspot.com",
    messagingSenderId: "563166128555",
    appId: "1:563166128555:web:2a26e6416b8ece6bd54aee"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);