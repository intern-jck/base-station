import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoArrowUp, GoArrowDown, GoArrowLeft, GoArrowRight, GoDeviceCamera } from 'react-icons/go';
import './styles/BotControl.css';
import { moveBot, debounce, getPhoto } from './botHelpers.js';
const roverBotUrl = 'http://192.168.1.94:3000';


function BotControl(props) {

  const [botState, setBotState] = useState({ motorR: 0, motorL: 0, spd: 100 });
  const [botImg, setBotImg] = useState('');


  useEffect(() => {
    console.log(botImg);
  }, [botImg]);

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
        currentState.motorR = 1;
        currentState.motorL = 1;
        setBotState(currentState);
        break;
      // Backward
      case 's':
        currentState.motorR = 2;
        currentState.motorL = 2;
        setBotState(currentState);
        break;
      // Left
      case 'a':
        currentState.motorR = 2;
        currentState.motorL = 1;
        setBotState(currentState);
        break;
      // Right
      case 'd':
        currentState.motorR = 2;
        currentState.motorL = 1;
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
        currentState.motorR = 0;
        currentState.motorL = 0;
        currentState.spd = 70;
        setBotState(currentState);
        break;
      // Take photo
      // case 'p':
      //   getPhoto()
      //   .then((img) => {
      //     const imgPath = roverBotUrl + '/' + img;
      //     setBotImg(imgPath);
      //   });
      //   break;

      // case 'ArrowUp':
      //   moveBot(keyCode, camSpeed);
      //   break;
      // case 'ArrowDown':
      //   moveBot(keyCode, camSpeed);
      //   break;
      // case 'ArrowLeft':
      //   moveBot(keyCode, camSpeed);
      //   break;
      // case 'ArrowRight':
      //   moveBot(keyCode, camSpeed);
      //   break;

    }

    debounce(moveBot(botState));
  }

  return (
    <div className="bot-control-panel">
      {/* <div>
        <img className="bot-img" src={botImg} />
      </div> */}
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

        {/* Camera Control */}
        {/* <div id="ArrowLeft" className="ctl-btn pan-left"><GoArrowLeft size={40} /></div>
        <div id="ArrowUp" className="ctl-btn tilt-up"><GoArrowUp size={40} /></div>
        <div id="ArrowDown" className="ctl-btn tilt-down"><GoArrowDown size={40} /></div>
        <div id="ArrowRight" className="ctl-btn pan-right"><GoArrowRight size={40} /></div> */}
        {/* <div id="p" className="ctl-btn cam-pic"><GoDeviceCamera size={40} /></div> */}
        {/* <div id="ArrowRight" className="ctl-btn pan-right"><GoArrowRight size={40} /></div> */}
        </div>
    </div>
  );

};

export default BotControl;
