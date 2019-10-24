import React from 'react';
import './App.css';
import api from 'api';
import {Sidebar, Menu, Segment, Icon} from "semantic-ui-react";

function App() {

    console.log(api.getFamilyList())



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
              <div style={{height: '100%', paddingBottom: 60}}>
                  family stuff
              </div>
          </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default App;
