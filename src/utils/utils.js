import {doc, getDoc } from "firebase/firestore";
import db from "./firebase";


export const handleGet = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
};
