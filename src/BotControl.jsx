import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoArrowUp, GoArrowDown, GoArrowLeft, GoArrowRight, GoDeviceCamera } from 'react-icons/go';
import './styles/BotControl.css';
import { moveBot, debounce, getPhoto, getGPS } from './botHelpers.js';

const roverBotUrl = 'http://192.168.1.98:3000';
function BotControl() {

  const [botState, setBotState] = useState({ dir: 0, spd: 100 });
  const [botImg, setBotImg] = useState('');
  const [currentGps, setCurrentGps] = useState({});

  useEffect(() => {
    setInterval(() => {
      axios.get(roverBotUrl + '/bot-gps')
      .then((response) => {
        console.log(response.data.data);
        // return response.data;
      })
      .catch((error) => ( console.log(error) ));
    }, 250);
  }, []);

  const handleKeyDown = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const key = event.key;
    const keyCode = event.keyCode;
    let currentState = botState;
    console.log('BOT', currentState);
    switch(key) {
      // Forward
      case 'w':
        currentState.dir = 1;
        setBotState(currentState);
        break;
      // Backward
      case 's':
        currentState.dir = 2;
        setBotState(currentState);
        break;
      // Left
      case 'a':
        currentState.dir = 3;
        setBotState(currentState);
        break;
      // Right
      case 'd':
        currentState.dir = 4;
        setBotState(currentState);
        break;
      // Accelerate
      case 'e':
        let speed = currentState.spd;
        speed += 5;
        if (speed >= 255) {
          speed = 255;
        }
        currentState.spd = speed;
        setBotState(currentState);
        break;
      // Stop
      case 'q':
        currentState.dir = 0;
        currentState.spd = 70;
        setBotState(currentState);
        break;
    }
    debounce(moveBot(botState));
  }

  return (
    <div className="bot-control-panel">
      <div
        className="keyboard-control"
        onKeyDown={handleKeyDown}
        tabIndex="0">
          <h2>ACTIVATE KEYBOARD</h2>
      </div>

      <div
        className="keyboard-keys">
        {/* Motor Control */}
        <div id="a" className="ctl-btn dir-left"><h2>A</h2></div>
        <div id="w" className="ctl-btn dir-up"><h2>W</h2></div>
        <div id="s" className="ctl-btn dir-down"><h2>S</h2></div>
        <div id="d" className="ctl-btn dir-right"><h2>D</h2></div>
        <div id="q" className="ctl-btn dir-stop"><h2>Q</h2></div>
        <div id="e" className="ctl-btn dir-faster"><h2>E</h2></div>
        </div>
    </div>
  );

};

export default BotControl;
