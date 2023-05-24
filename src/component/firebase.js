import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOFzwJNbw3MeX_CDibsDdzLoHXfpqqAwY",
    authDomain: "backend-e78a5.firebaseapp.com",
    projectId: "backend-e78a5",
    storageBucket: "backend-e78a5.appspot.com",
    messagingSenderId: "236389813481",
    appId: "1:236389813481:web:f73d39f6a77934aa2d7478",
    measurementId: "G-V7R349WFRD"
};

const app = initializeApp(firebaseConfig);

// Получение доступа к Firestore
const firestore = getFirestore(app);

// Экспорт нужных объектов
export { app, firestore };
