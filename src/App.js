import React, {useState} from 'react';
import landing from './ayse-saki.png';
import './App.css';

function App() {
  const [landingStatus, setLandingStatus] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
      {!landingStatus && <h1>Welcome to the Gender Reveal Party</h1>}
        {!landingStatus && <button className="reveal-button" onClick={()=> setLandingStatus(true)}>Reveal</button>}
        {landingStatus && <img src={landing} className="App-logo" alt="logo" />}
      </header>
    </div>
  );
}

export default App;
