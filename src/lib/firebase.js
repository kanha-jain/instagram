import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// here i want t import the seed file, call it only once
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyClvEz-JscM5bzdZxsBlcWWwtXzGRUGyAk",
  authDomain: "instagram-clone-cee4e.firebaseapp.com",
  projectId: "instagram-clone-cee4e",
  storageBucket: "instagram-clone-cee4e.appspot.com",
  messagingSenderId: "1007452759918",
  appId: "1:1007452759918:web:5791f877224eef4db7437f",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log("firebase", firebase);

// seedDatabase(firebase);

export { firebase, FieldValue };
