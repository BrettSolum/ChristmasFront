import React, { useState, useEffect} from 'react';
import {Menu, Loader, Dimmer} from "semantic-ui-react";
import api from "../api";

function FamilySelector({selectedFamilyId, onFamilySelect}) {

    const [loadedFamilies, setLoadedFamilies] = useState([]);

    useEffect(()=> {
        api.getFamilyList().then(data => {
            setLoadedFamilies(data.map((item) => {
                return {
                    key: item.id,
                    ...item
                }
            }))
        });
    }, []);

    let content = <Dimmer active><Loader/></Dimmer>

    if (loadedFamilies && loadedFamilies.length > 0 ) {
        content = <Menu
            items={loadedFamilies}
            activeIndex={loadedFamilies.findIndex(x => x.id === selectedFamilyId)}
            onItemClick={onFamilySelect}
        />
        console.log(loadedFamilies);
    };

    return (
        content
    );
}

export default FamilySelector;
