// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCy0AWSgX2vpBEmvfxtb0EiuGDCQ7-O5xQ",
    authDomain: "twitter-clone-1ab96.firebaseapp.com",
    projectId: "twitter-clone-1ab96",
    storageBucket: "twitter-clone-1ab96.appspot.com",
    messagingSenderId: "814298531411",
    appId: "1:814298531411:web:0e01dc063d77f220e8a8a6",
    measurementId: "G-HZZFKKF15D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;