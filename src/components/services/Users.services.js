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

const UsersCollectionRef = collection(db, "usuarios");

class UsersDataService {
  addUsuarios = (newUser) => {
    return addDoc(UsersCollectionRef, newUser);
  };
  updateUsuario = (id, upadatedUsuario) => {
    const UsuarioDoc = doc(db, "usuarios", id);
    console.log("gafaupdated",upadatedUsuario)
    return updateDoc(UsuarioDoc, upadatedUsuario);
  };
  deleteUsuario = (id) => {
    const UsuarioDoc = doc(db, "usuarios", id);
    return deleteDoc(UsuarioDoc);
  };
    getAllUsuarios = () => {
    return getDocs(UsersCollectionRef);
}
    getUsuario = (id) => {
    const UsuarioDoc = doc(db, "usuarios", id);
    return getDoc(UsuarioDoc);
}
}

export default new UsersDataService();
