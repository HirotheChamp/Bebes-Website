import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBeILqCkiWIea5hrp7hjNRLlecO0xXX3zA",
    authDomain: "bebe-s-website.firebaseapp.com",
    projectId: "bebe-s-website",
    storageBucket: "bebe-s-website.appspot.com",
    messagingSenderId: "984913396656",
    appId: "1:984913396656:web:6d332dd9395763acb2cc75"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};

