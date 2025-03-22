import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_CC6wJLq52uqnxNiIF1XB0PnEDvFW7bU",
    authDomain: "chat-app-5c3ff.firebaseapp.com",
    projectId: "chat-app-5c3ff",
    storageBucket: "chat-app-5c3ff.firebasestorage.app",
    messagingSenderId: "191005756147",
    appId: "1:191005756147:web:ba6c5cfbb12c7f6c868586",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
