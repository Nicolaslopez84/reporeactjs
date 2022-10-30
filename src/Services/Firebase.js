
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs , doc, getDoc, query, where, addDoc} from "firebase/firestore";


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
    const collectionRef = collection (db , "productos tienda 2")
    const results = await getDocs(collectionRef);
    const dataProductos =results.docs.map( (doc) => {
        return {id: doc.id , ...doc.data()};
    })
    return dataProductos;
}


export async function getProducto (idProducto) {
    const productoRef = doc (db, "productos tienda 2", idProducto)
    const docResults = await getDoc(productoRef);
    if(docResults.exists()){
        return {id: docResults.id , ...docResults.data()}
    }
}

export async function getProductoXCategoria (categoria) {
  const queryProductos = collection (db, "productos tienda 2")
  const queryCat = query (queryProductos,
     where ("categoria","==", categoria ))
  const queryResults = await getDocs(queryCat)
  const dataXCategoria = queryResults.docs.map( (doc) => {
    return {id: doc.id , ...doc.data()};
});
return dataXCategoria;

};

export async function crearCompra(ordenData){
  const collectionRef = collection (db , "compras")
  let respuesta = await addDoc(collectionRef, ordenData)
}

export async function sendDataToFirebase(){
  const data = [{"id":1,"nombre":"Escalade","precio":3000,"categoria":"SUV","marca":"Cadillac","stock":4,"imagen":"/images/escalade.png","descripcion":"Nulla nisl."},
  {"id":2,"nombre":"525","precio":2500,"categoria":"Sedan","marca":"BMW","stock":6,"imagen": "/images/BMW525.png" ,"descripcion":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis."},
  {"id":3,"nombre":"Capri","precio":5000,"categoria":"Deportivos","marca":"Mercury","stock":5,"imagen":"/images/capri.png","descripcion":"Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum."},
  {"id":4,"nombre":"Jimmy","precio":12000,"categoria":"Pickup","marca":"GMC","stock":1,"imagen":"/images/jimmy.png","descripcion":"Quisque ut erat."},
  {"id":5,"nombre":"Continental Super","precio":10000,"categoria":"Deportivos","marca":"Bentley","stock":1,"imagen":"/images/bentley.png","descripcion":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."},
  {"id":6,"nombre":"Accent","precio":4000,"categoria":"Sedan","marca":"Hyundai","stock":2,"imagen":"/images/acent.png","descripcion":"In hac habitasse platea dictumst."},
  {"id":7,"nombre":"Venture","precio":4000,"categoria":"SUV","marca":"Chevrolet","stock":1,"imagen":"/images/venture.png","descripcion":"Nulla suscipit ligula in lacus."},
  {"id":8,"nombre":"Mighty Max","precio":13000,"categoria":"Pickup","marca":"Mitsubishi","stock":2,"imagen":"/images/mightymax.png","descripcion":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat."},
  {"id":9,"nombre":"Datsun/Nissan Z-car","precio":9000,"categoria":"Deportivos","marca":"Nissan","stock":5,"imagen":"/images/datsun.png","descripcion":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus."},
  {"id":10,"nombre":"F250","precio":8000,"categoria":"Pickup","marca":"Ford","stock":1,"imagen":"/images/f250.png","descripcion":"Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh."},
  {"id":11,"nombre":"W201","precio":7000,"categoria":"Sedan","marca":"Mercedes-Benz","stock":5,"imagen":"/images/w201.png","descripcion":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."},
  {"id":12,"nombre":"B-Series","precio":6500,"categoria":"Pickup","marca":"Mazda","stock":3,"imagen":"/images/bseries.png","descripcion":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit."},
  {"id":13,"nombre":"MX-5","precio":7800,"categoria":"Deportivos","marca":"Mazda","stock":3,"imagen":"/images/mx5.png","descripcion":"Nulla tellus."},
  {"id":14,"nombre":"Century","precio":6200,"categoria":"Sedan","marca":"Buick","stock":2,"imagen":"/images/century.png","descripcion":"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."},
  {"id":15,"nombre":"tC","precio":3000,"categoria":"Sedan","marca":"Scion","stock":6,"imagen":"/images/tc.png","descripcion":"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."},
  {"id":16,"nombre":"MR2","precio":9000,"categoria":"Deportivos","marca":"Toyota","stock":4,"imagen":"/images/mr2.png","descripcion":"Duis bibendum. Morbi non quam nec dui luctus rutrum."},
  {"id":17,"nombre":"Town Car","precio":4000,"categoria":"Sedan","marca":"Lincoln","stock":5,"imagen":"/images/towncar.png","descripcion":"Vivamus in felis eu sapien cursus vestibulum."},
  {"id":18,"nombre":"Murciélago","precio":15000,"categoria":"Deportivos","marca":"Lamborghini","stock":2,"imagen":"/images/murcielago.png","descripcion":"Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."},
  {"id":19,"nombre":"B-Series","precio":9000,"categoria":"Pickup","marca":"Mazda","stock":3,"imagen":"/images/bseries2.png","descripcion":"Etiam justo."},
  {"id":20,"nombre":"Firebird Trans Am","precio":13000,"categoria":"Deportivos","marca":"Pontiac","stock":8,"imagen":"/images/firebird.png","descripcion":"Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti."},
  {"id":21,"nombre":"Mirage","precio":7800,"categoria":"Sedan","marca":"Mitsubishi","stock":3,"imagen":"/images/mirage.png","descripcion":"Nulla facilisi."},
  {"id":22,"nombre":"3500","precio":7000,"categoria":"Pickup","marca":"GMC","stock":7,"imagen":"/images/sierra3500.png","descripcion":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim."},
  {"id":23,"nombre":"Azure","precio":15400,"categoria":"Deportivos","marca":"Bentley","stock":5,"imagen":"/images/azure.png","descripcion":"In hac habitasse platea dictumst."},
  {"id":24,"nombre":"Acadia","precio":2300,"categoria":"SUV","marca":"GMC","stock":4,"imagen":"/images/acadia.png","descripcion":"Quisque id justo sit amet sapien dignissim vestibulum."},
  {"id":25,"nombre":"Ram Van 3500","precio":5700,"categoria":"Vans","marca":"Dodge","stock":2,"imagen":"/images/ramvan.png","descripcion":"Donec dapibus."},
  {"id":26,"nombre":"Regal","precio":4200,"categoria":"Sedan","marca":"Buick","stock":5,"imagen":"/images/regal.png","descripcion":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat."},
  {"id":27,"nombre":"Z3","precio":12000,"categoria":"Deportivos","marca":"BMW","stock":4,"imagen":"/images/z3.png","descripcion":"Curabitur in libero ut massa volutpat convallis."},
  {"id":28,"nombre":"F-Series","precio":9520,"categoria":"Pickup","marca":"Ford","stock":5,"imagen":"/images/fseries.png","descripcion":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."},
  {"id":29,"nombre":"Outlander","precio":"1033308.84","categoria":"SUV","marca":"Mitsubishi","stock":3,"imagen":"/images/outlander.png","descripcion":"Vivamus tortor. Duis mattis egestas metus."}]
  

  let itemsCollectionRef = collection(db, "productos tienda 2")

  for(let producto of data){
    delete(producto.id)
    let newDoc = await addDoc(itemsCollectionRef, producto);
    
  }}

export default firebaseApp;