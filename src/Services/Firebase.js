
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs , doc, getDoc, query, where} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjb9x0jOR9TM3xJmztlYa88PJWz1ktzNM",
  authDomain: "tiendarhlop.firebaseapp.com",
  projectId: "tiendarhlop",
  storageBucket: "tiendarhlop.appspot.com",
  messagingSenderId: "270062999136",
  appId: "1:270062999136:web:d042a3989367b7ddbb1505",

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export async function getProductos() {
    const collectionRef = collection (db , "productos tienda")
    const results = await getDocs(collectionRef);
    const dataProductos =results.docs.map( (doc) => {
        return {id: doc.id , ...doc.data()};
    })
    return dataProductos;
}


export async function getProducto (idProducto) {
    const productoRef = doc (db, "productos tienda", idProducto)
    const docResults = await getDoc(productoRef);
    return {id: docResults.id , ...docResults.data()}
    
}

export async function getProductoXCategoria (categoria) {
  const queryProductos = collection (db, "productos tienda")
  const queryCat = query (queryProductos,
     where ("categoria","==", categoria ))
  const queryResults = await getDocs(queryCat)
  const dataXCategoria = queryResults.docs.map( (doc) => {
    return {id: doc.id , ...doc.data()};
});
return dataXCategoria;

};


export default firebaseApp;