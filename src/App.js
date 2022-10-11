
import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import ItemListsContainer from './Components/ItemListsContainer/ItemListsContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>  
          <Route 
            path= "/" 
            element={
              <ItemListsContainer bienvenida="Bienvenides a Nuestra Tienda OnLine" />}/> 
          <Route path= "/product/:id" element={<ItemDetailContainer/>}></Route>
          <Route path= "*" element={<h4>"te perdiste"</h4>}></Route>
          <Route 
            path= "/category/:categoria" 
            element={<ItemListsContainer/>}/> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
