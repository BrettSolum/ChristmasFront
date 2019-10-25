import React from 'react';
import './App.css';
import {Sidebar, Menu, Segment, Icon, Header} from "semantic-ui-react";
import api from './api';

function App() {

    React.useEffect(()=> {
        const
            familyList= api.getFamilyList();
        console.log(familyList);
    },[])

  return (
    <div className="App">
      <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} vertical visible>
            <Menu.Item>
              <Icon name='home'/>
              Solum
            </Menu.Item>
            <Menu.Item>
              <Icon name='gamepad'/>
              Bendall
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher style={{height: '100%'}}>
              <Segment basic>
                  <Header as='h3'>Family Stuff</Header>
              </Segment>
          </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default App;
