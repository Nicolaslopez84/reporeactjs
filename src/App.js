
import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import ItemListsContainer from './Components/ItemListsContainer/ItemListsContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider} from "../src/Context/Context"
import Cart from './Components/Cart/Cart';



function App() {
  return (
    
    <div className="App">
      
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>  
          <Route path= "/" element={
              <ItemListsContainer bienvenida="Lopcars, Los mejores autos para rentar" />}
          /> 
          <Route path= "/product/:id" element={<ItemDetailContainer/>}></Route>
          <Route path= "*" element={<h4>"te perdiste"</h4>}></Route>
          <Route path= "/categoria/:categoria" element={<ItemListsContainer/>}/> 
          <Route path= "/cart" element={<Cart/>}/> 
          <Route
              path="/thankyou/:orderid"
              element={<h1>Gracias por tu compra!! Te esperamos pronto</h1>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}



export default App;
