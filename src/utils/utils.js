import {collection, doc, getDoc, addDoc} from "firebase/firestore";
import db from "./firebase";


export const handleGet = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
};

export const handleNew = async (collectionName, document) => {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, document);
    return docRef.id
};
