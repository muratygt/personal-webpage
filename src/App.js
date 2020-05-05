import React, {useState} from 'react';
import landing from './landing.png';

import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';

import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <Sidebar visible={visible} position="right" onHide={(e) => setVisible(false)}>
        Murat Yigit
        <ul className="list">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>

        </ul>
      </Sidebar>
      <div className="button">
        <Button  icon="pi pi-align-justify" onClick={(e) => setVisible(true)}/>
      </div>
      <img src={landing} className="App-logo" alt="logo" />
      <a href={"mailto:" + 'muratyigit88@gmail.com'}>muratyigit88@gmail.com</a>
    </div>
  );
}

export default App;
