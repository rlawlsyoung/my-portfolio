import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWBdFHezQnDZ9Gwjdxv1qhByy0mt0tGY8",
  authDomain: "portfolio-data-a9faa.firebaseapp.com",
  projectId: "portfolio-data-a9faa",
  storageBucket: "portfolio-data-a9faa.appspot.com",
  messagingSenderId: "283222525396",
  appId: "1:283222525396:web:d844c029927c827c158241",
  measurementId: "G-B6ZX0DXWFK",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
