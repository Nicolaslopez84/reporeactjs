
import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar.js';
import ItemListsContainer from './Components/ItemListsContainer/ItemListsContainer';

function App() {
  return (
    <div className="App">
           
      <NavBar />
      
      <header className="App-header">
        
      <ItemListsContainer bienvenida="Bienvenides a Nuestra Tienda OnLine" />

      </header>
    </div>
  );
}

export default App;
