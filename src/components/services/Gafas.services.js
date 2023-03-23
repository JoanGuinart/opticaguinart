import { db } from "../../Firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const GafasCollectionRef = collection(db, "gafas");

class GafasDataService {
  addGafas = (newGafa) => {
    return addDoc(GafasCollectionRef, newGafa);
  };
  updateGafa = (id, updatedGafa) => {
    const gafaDoc = doc(db, "gafas", id);
    console.log("gafaupdated",updatedGafa)
    return updateDoc(gafaDoc, updatedGafa);
  };
  deleteGafa = (id) => {
    const gafaDoc = doc(db, "gafas", id);
    return deleteDoc(gafaDoc);
  };
    getAllGafas = () => {
    return getDocs(GafasCollectionRef);
}
    getGafa = (id) => {
    const gafaDoc = doc(db, "gafas", id);
    return getDoc(gafaDoc);
}
}

export default new GafasDataService();
