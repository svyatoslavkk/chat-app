import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuRbiIBo1ulaFrBaxbu8Snt1vn-A_aZ1k",
  authDomain: "chat-app-2e5d2.firebaseapp.com",
  projectId: "chat-app-2e5d2",
  storageBucket: "chat-app-2e5d2.appspot.com",
  messagingSenderId: "794471008070",
  appId: "1:794471008070:web:b0a8d8f2b967715d6b4747"
};
 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();