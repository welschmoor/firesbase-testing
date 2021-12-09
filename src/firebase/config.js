
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBBYMkaFVIS0o5LrK-fqfrZYQjW7oFrpC4",
  authDomain: "learn-firebase-bae1c.firebaseapp.com",
  projectId: "learn-firebase-bae1c",
  storageBucket: "learn-firebase-bae1c.appspot.com",
  messagingSenderId: "517491713165",
  appId: "1:517491713165:web:535cfc96c975be8c776ec4"
};

firebase.initializeApp(firebaseConfig)  // this connects to firebase

const projectFirestore = firebase.firestore() // this is to interact with db

export { projectFirestore }