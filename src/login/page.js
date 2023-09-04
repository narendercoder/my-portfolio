// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBlFZR9b-6bsZmvFbu3UF7qS44sdYJuEA",
  authDomain: "news-auth-311f7.firebaseapp.com",
  projectId: "news-auth-311f7",
  storageBucket: "news-auth-311f7.appspot.com",
  messagingSenderId: "291293242703",
  appId: "1:291293242703:web:a9f4878277666e03fbd13a",
  measurementId: "G-4FDJ4WWMRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
