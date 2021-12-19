import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBg7DJ3HihDY7AQnJTy1fRn7ipR-6BWmx0",
    authDomain: "final-hackathon-project-45479.firebaseapp.com",
    projectId: "final-hackathon-project-45479",
    storageBucket: "final-hackathon-project-45479.appspot.com",
    messagingSenderId: "114603837713",
    appId: "1:114603837713:web:03078a63e617edf347a4b0",
    measurementId: "G-0G1ZPN9TH0"
});

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    
};