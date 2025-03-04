import { initializeApp, getApps } from "firebase/app"; // Importar funciones para inicializar la app de Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"; // Importar funciones de autenticación de Firebase
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, setDoc } from "firebase/firestore"; // Importar funciones de Firestore

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPlA3jH9k8iyKB3-k3uvQlzfwGrjbLBF0",
  authDomain: "recordatorios1-17375.firebaseapp.com",
  projectId: "recordatorios1-17375",
  storageBucket: "recordatorios1-17375.appspot.com",
  messagingSenderId: "569620056346",
};

// Inicializar la app de Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig); // Inicializar la app si no hay ninguna inicializada
} else {
  app = getApps()[0]; // Usar la app ya inicializada
}

// Inicializar Firestore y Auth
const db = getFirestore(app); // Inicializar Firestore
const auth = getAuth(app); // Inicializar Auth
const provider = new GoogleAuthProvider(); // Crear un proveedor de autenticación de Google

// Función para iniciar sesión con Google
const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider); // Iniciar sesión con un popup de Google
    const user = result.user; // Obtener la información del usuario
    localStorage.setItem('user', JSON.stringify(user)); // Guardar la información del usuario en localStorage
    return user; // Devolver la información del usuario
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error); // Mostrar error en la consola si ocurre
    throw error; // Lanzar el error para manejarlo en otro lugar
  }
};

// Función para registrar con Google
const registerWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider); // Registrar con un popup de Google
    const user = result.user; // Obtener la información del usuario
    localStorage.setItem('user', JSON.stringify(user)); // Guardar la información del usuario en localStorage
    return user; // Devolver la información del usuario
  } catch (error) {
    console.error('Error al registrarse con Google:', error); // Mostrar error en la consola si ocurre
    throw error; // Lanzar el error para manejarlo en otro lugar
  }
};

// Función para guardar la información del usuario en Firestore
const saveUserToFirestore = async (user) => {
  try {
    const userRef = doc(db, 'users', user.uid); // Referencia al documento del usuario en Firestore
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }, { merge: true }); // Guardar la información del usuario en Firestore, fusionando con los datos existentes
  } catch (error) {
    console.error('Error al guardar la información del usuario en Firestore:', error); // Mostrar error en la consola si ocurre
    throw error; // Lanzar el error para manejarlo en otro lugar
  }
};

// Función para cerrar sesión
const logout = async () => {
  try {
    await signOut(auth); // Cerrar sesión
    localStorage.removeItem('user'); // Eliminar la información del usuario de localStorage
  } catch (error) {
    console.error('Error al cerrar sesión:', error); // Mostrar error en la consola si ocurre
    throw error; // Lanzar el error para manejarlo en otro lugar
  }
};

// Exportar las funciones y constantes necesarias
export { db, loginWithGoogle, registerWithGoogle, saveUserToFirestore, logout, auth, collection, addDoc, getDocs, updateDoc, deleteDoc, doc };