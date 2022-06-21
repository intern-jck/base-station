import React, { useState } from 'react';
import axios from 'axios';
import { GoArrowUp, GoArrowDown, GoArrowLeft, GoArrowRight } from 'react-icons/go';
import './styles/BotControl.css';
import {moveBot} from './botHelpers.js';

function BotControl(props) {

  const [keyboardActive, setKeyboardActive] = useState(false);
  const [botSpeed, setBotSpeed] = useState(100);
  const [botDirection, setBotDirection] = useState(0);
  const [camSpeed, setCamSpeed] = useState(10);

  const handleKeyUp = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const key = event.key;
    const keyCode = event.keyCode;

    console.log('KEYBOARD UP', key, keyCode);

    // moveBot(keyCode, botSpeed);


    switch(key) {
      case 'w':
        moveBot(0, 0);
        break;
      case 's':
        moveBot(0, 0);
        break;
      case 'a':
        moveBot(1, 0);
        break;
      case 'd':
        moveBot(1, 0);
        break;
      case 'e':
        moveBot(keyCode, botSpeed);
        break;
      case 'q':
        moveBot(keyCode, 0);
        break;
    }

  }

  const handleKeyDown = (event) => {

    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const key = event.key;
    const keyCode = event.keyCode;

    console.log('KEYBOARD', key, keyCode);

    target.classList.toggle('keyboard-active');

    // if(key === 'e') {

    // } else if (key === 'q') {
    //   setBotSpeed(0);
    // }

    // moveBot(keyCode, botSpeed);

    switch (key) {
      case 'w':
        setBotDirection(keyCode);
        moveBot(botDirection, botSpeed);
        break;
      case 's':
        setBotDirection(keyCode);
        moveBot(botDirection, botSpeed);
        break;
      case 'a':
        setBotDirection(keyCode);
        moveBot(botDirection, botSpeed);
        break;
      case 'd':
        setBotDirection(keyCode);
        moveBot(botDirection, botSpeed);
        break;
      case 'e':
        let speed = botSpeed;
        speed += 5;
        if (speed >= 255) {
          speed = 255;
        }
        setBotSpeed(speed);
        moveBot(botDirection, botSpeed);
        break;
      case 'q':
        setBotSpeed(150);
        setBotDirection(keyCode);
        moveBot(botDirection, 0);
        break;

      case 'ArrowUp':
        moveBot(keyCode, camSpeed);
        break;
      case 'ArrowDown':
        moveBot(keyCode, camSpeed);
        break;
      case 'ArrowLeft':
        moveBot(keyCode, camSpeed);
        break;
      case 'ArrowRight':
        moveBot(keyCode, camSpeed);
        break;
      }


    };

  return (
    <div className="bot-control-panel">
      <h2 className="control-header">Rover Bot Control</h2>
      <div
        className="keyboard-control"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        tabIndex="0"><h2>ACTIVATE KEYBOARD</h2>
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
        <div id="ArrowLeft" className="ctl-btn pan-left"><GoArrowLeft size={40} /></div>
        <div id="ArrowUp" className="ctl-btn tilt-up"><GoArrowUp size={40} /></div>
        <div id="ArrowDown" className="ctl-btn tilt-down"><GoArrowDown size={40} /></div>
        <div id="ArrowRight" className="ctl-btn pan-right"><GoArrowRight size={40} /></div>
        </div>
    </div>
  );

};

export default BotControl;