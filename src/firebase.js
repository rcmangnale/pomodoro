
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5GvZU0tFGARqHc4cl61YvB_yPB66rtrA",
    authDomain: "auth-mtechzilla-2dde3.firebaseapp.com",
    projectId: "auth-mtechzilla-2dde3",
    storageBucket: "auth-mtechzilla-2dde3.appspot.com",
    messagingSenderId: "584735098120",
    appId: "1:584735098120:web:5c3e785ead8bf66cd898bd"
  };
  
  const app = initializeApp(firebaseConfig);

  export const Auth = getAuth(app);