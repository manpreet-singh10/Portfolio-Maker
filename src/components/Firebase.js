import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJCs67s1jwOdwMYd7nHlo0Cwl0FElrMCA",
  authDomain: "portfolio-website-7e5f6.firebaseapp.com",
  projectId: "portfolio-website-7e5f6",
  storageBucket: "portfolio-website-7e5f6.appspot.com",
  messagingSenderId: "32100031712",
  appId: "1:32100031712:web:0d3d8c5819d2efc0df0485"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}