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

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYgqDAU5GTRA4MNlIDGeT-PCQ1c4Vp-ow",
    authDomain: "systembravo.firebaseapp.com",
    projectId: "systembravo",
    storageBucket: "systembravo.firebasestorage.app",
    messagingSenderId: "699081831021",
    appId: "1:699081831021:web:2d5a43981cd4fbe65bc564",
    measurementId: "G-3L0H9KYLK1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
