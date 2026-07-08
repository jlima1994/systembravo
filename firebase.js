import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// LOGIN
window.loginGoogle = async function(){
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

// SALVAR
window.salvarRegistro = async function(dados){
  const user = auth.currentUser;

  await addDoc(collection(db, "registros"), {
    uid: user.uid,
    ...dados,
    createdAt: new Date()
  });
};

// BUSCAR
window.buscarRegistros = async function(){
  const user = auth.currentUser;

  const q = query(
    collection(db, "registros"),
    where("uid", "==", user.uid)
  );

  return await getDocs(q);
};
