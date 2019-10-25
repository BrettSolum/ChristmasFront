import React, { useState, useEffect} from 'react';
import {Menu} from "semantic-ui-react";
import api from "../api";

function FamilySelector() {

    const [loadedFamilies, setLoadedFamilies] = useState([]);



    useEffect(()=> {
        const
            families= api.getFamilyList();
        console.log(families);
    })

    return (
        <Menu items={families}/>
    );
}

export default FamilySelector;
