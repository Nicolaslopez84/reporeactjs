
import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/navBar.js';
import ItemLists from './Components/ItemLists/ItemLists';

function App() {
  return (
    <div className="App">
           
      <NavBar />
      <ItemLists bienvenida="Bienvenides a Nuestra Tienda OnLine" />
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
