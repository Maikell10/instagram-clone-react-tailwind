import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyBkcMVK8nyn9ONnNltdIcYlP_NZ9O2ScTo",
    authDomain: "instagram-kayleh.firebaseapp.com",
    projectId: "instagram-kayleh",
    storageBucket: "instagram-kayleh.appspot.com",
    messagingSenderId: "1052328448360",
    appId: "1:1052328448360:web:4c015931ba5be2e00746dd",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };
