import React from 'react';
import {Header, Image} from "semantic-ui-react";
import XmasTree from "../Images/XmasTree.png";

function ChristmasHeader() {

    return (
        <Header as='h1'>
            <Image src={XmasTree}/>
            Christmas Exchange Magic
            <Image src={XmasTree}/>
        </Header>
    );
}

export default ChristmasHeader;
