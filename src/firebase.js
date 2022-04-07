import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcI-EJTie4lRVgmybMsqY4eI3b5Lmk1BU",
  authDomain: "twitter-practice-2f384.firebaseapp.com",
  projectId: "twitter-practice-2f384",
  storageBucket: "twitter-practice-2f384.appspot.com",
  messagingSenderId: "452601940536",
  appId: "1:452601940536:web:14f4e1450377c4c5bb74cd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();

const provider = new GoogleAuthProvider();

export { auth, db, provider, storage };
