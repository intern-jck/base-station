import React from "react";
import BotControl from './BotControl.jsx';
import './styles/App.css';

const App = () => {

  return (
    <div className="main-div">
      <h1>Base Station</h1>
      <div className="cam-div">
        <img className="rover-cam" src="http://192.168.1.93:3000/rover-cam.mjpg" />
      </div>
      <BotControl />
    </div>
  )
};

export default App;