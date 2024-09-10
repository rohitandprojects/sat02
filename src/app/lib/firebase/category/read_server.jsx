import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getCategoryFirst = async (id) => {
    return await getDoc(doc(db, `categories/${id}`)).then((snap) => snap.data());
}

export const getCategory = async (id) => {
    return await getDoc(doc(db, `categories/${id}`)).then((snap) => snap.data());
}

export const getAllCategories = async () => {
    return await getDocs(collection(db, 'categories')).then((snaps) => snaps.docs.map((d) => d.data()));
}

 