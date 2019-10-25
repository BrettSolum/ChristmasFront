import React, { useState, useEffect} from 'react';
import './App.css';
import ChristmasHeader from './Components/ChristmasHeader.js';
import FamilySelector from './Components/FamilySelector.js';


function App() {

  return (
    <div className="App">
        <ChristmasHeader/>
        <FamilySelector/>
    </div>
  );
}

export default App;
