import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_fG22cdTtzNgn8tkBvJ6TiZiDz-l1ifU",
    authDomain: "portfolio-50012.firebaseapp.com",
    projectId: "portfolio-50012",
    storageBucket: "portfolio-50012.appspot.com",
    messagingSenderId: "907243775900",
    appId: "1:907243775900:web:1d6960bb1bb35401400a59"
};

const app = initializeApp(firebaseConfig);
export default getFirestore()
