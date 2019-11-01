import React, { useState, useEffect} from 'react';
import api from "../api";
import {Card} from "semantic-ui-react";

function UserCard({user}) {

    let spouse, exchange;

    if (!user.spouseId) {
        spouse = 'none';
    } else {
        spouse = user.spouseName;
    }

    if (!user.exchangeUserId) {
        exchange = 'none';
    } else {
        exchange = user.exchangeUserName;
    }


    return (
        <Card>
            <Card.Content>
                <Card.Header>{user.first + " " + user.last}</Card.Header>
                <Card.Meta>{'Spouse: ' + spouse}</Card.Meta>
                <Card.Description>{'Exchange: ' + exchange}</Card.Description>
            </Card.Content>
        </Card>
    );
}

export default UserCard;
