import React, { useState, useEffect} from 'react';
import api from "../api";
import {Card, Segment, Button} from "semantic-ui-react";
import UserCard from './UserCard';

function FamilyList({selectedFamilyId}) {

    const [loadedUsers, setLoadedUsers] = useState([]);

    useEffect(()=> {
        api.getFamilyUsers(selectedFamilyId).then(data => {
            if(data && data.length > 0) {
                setLoadedUsers(data)
            }
        });
    }, [selectedFamilyId]);

    let content;

    if(!loadedUsers && loadedUsers <=0){
        content = <div/>;
    } else {
        content = (
            <Card.Group>
                {loadedUsers.map((item) => (
                    <UserCard
                        key={item.id}
                        user={item}
                    />
                ))}
            </Card.Group>
        );
    }

    return (
        content
    );
}

export default FamilyList;
