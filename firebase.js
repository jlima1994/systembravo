<!-- firebase.js -->
<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
  getFirestore, 
  collection, 
  addDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔴 COLE SUA CONFIG AQUI
const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.db = db;
window.auth = auth;

// LOGIN
window.loginGoogle = async function(){
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

// USUÁRIO LOGADO
window.getUser = function(){
  return auth.currentUser;
};

</script>