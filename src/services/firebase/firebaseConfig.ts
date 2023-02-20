
import { initializeApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0OaRvOjOA2j_EI93BLfa6elt6wYw0hyg",
  authDomain: "docs-be8dc.firebaseapp.com",
  projectId: "docs-be8dc",
  storageBucket: "docs-be8dc.appspot.com",
  messagingSenderId: "28130263715",
  appId: "1:28130263715:web:5eb2bc3f101c5e3c6f3516",
  measurementId: "G-PHN0BTJ30Z"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);