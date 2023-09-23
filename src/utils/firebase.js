import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect, browserPopupRedirectResolver, signOut } from 'firebase/auth'
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD_fG22cdTtzNgn8tkBvJ6TiZiDz-l1ifU",
    authDomain: "portfolio-50012.firebaseapp.com",
    projectId: "portfolio-50012",
    storageBucket: "portfolio-50012.appspot.com",
    messagingSenderId: "907243775900",
    appId: "1:907243775900:web:1d6960bb1bb35401400a59"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithRedirect(auth, provider, browserPopupRedirectResolver);
export const signOutFromApp = () => signOut(auth);

export const storage = getStorage(app);

export const functions = getFunctions(app);

export default getFirestore(app)

