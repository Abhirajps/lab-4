import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwy-D8ukbx4YMqMJtTY3waZZARuOzgU48",
  authDomain: "new-lab-04.firebaseapp.com",
  projectId: "new-lab-04",
  storageBucket: "new-lab-04.appspot.com",
  messagingSenderId: "643539956626",
  appId: "1:643539956626:web:1088a03fee3555ee33c74b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
