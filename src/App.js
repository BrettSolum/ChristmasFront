import React, {useState, useEffect} from 'react';
import './App.css';
import ChristmasHeader from './Components/ChristmasHeader.js';
import FamilySelector from './Components/FamilySelector.js';
import FamilyList from './Components/FamilyList';

function App() {

    const [selectedFamilyId, setSelectedFamilyId] = useState(0);

    const familySelectHandler = (event, data) => {
        const familyIndex = data.id;
        setSelectedFamilyId(familyIndex);
    }

  return (
    <div className="App">
        <ChristmasHeader/>
        <FamilySelector
            selectedFamilyId = {selectedFamilyId}
            onFamilySelect = {familySelectHandler}
        />
        <FamilyList
            selectedFamilyId = {selectedFamilyId}
        />
    </div>
  );
}

export default App;
