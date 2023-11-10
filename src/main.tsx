import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCKowGchVnR915ZhaPvWUbo0rdjH3USlys",
  authDomain: "chat-60ae4.firebaseapp.com",
  projectId: "chat-60ae4",
  storageBucket: "chat-60ae4.appspot.com",
  messagingSenderId: "507752392710",
  appId: "1:507752392710:web:8fa8b7476038a96d3afb87"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
