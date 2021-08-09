import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7vn5ql-gGz11rasF2COc3bJlVaHIYw-8",
    authDomain: "clone-b749b.firebaseapp.com",
    projectId: "clone-b749b",
    storageBucket: "clone-b749b.appspot.com",
    messagingSenderId: "493775033392",
    appId: "1:493775033392:web:a66f8b497358b280c3c9f5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };