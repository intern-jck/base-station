import React, { useState } from 'react';
import axios from 'axios';
import { GoArrowUp, GoArrowDown, GoArrowLeft, GoArrowRight } from 'react-icons/go';
import './styles/BotControl.css';

function BotControl(props) {

  const [keyboardActive, setKeyboardActive] = useState(false);

  const roverBotUrl = 'http://192.168.1.110:3000';



  const handleKeyDown = (event) => {

    event.preventDefault();
    const target = event.target;
    const name = event.name;
    const key = event.key;
    console.log('KEYBOARD', key);

    target.classList.toggle('keyboard-active');
    console.log(target.classList);
    switch (key) {
      case 'w':
        break;
      case 's':
        break;
      case 'a':
        break;
      case 'd':
        break;
      case 'e':
        break;
      case 'q':
        break;
      }


    };

  return (
    <div className="bot-control-panel">
      <h2 className="control-header">Rover Bot Control</h2>
      <div
        className="keyboard-control"
        onKeyDown={handleKeyDown}
        tabIndex="0"><h2>ACTIVATE KEYBOARD</h2>
      </div>
      <div
        className="keyboard-keys">
        {/* Motor Control */}
        <div className="ctl-btn dir-left"><h2>A</h2></div>
        <div className="ctl-btn dir-up"><h2>W</h2></div>
        <div className="ctl-btn dir-down"><h2>S</h2></div>
        <div className="ctl-btn dir-right"><h2>D</h2></div>
        <div className="ctl-btn dir-stop"><h2>Q</h2></div>
        <div className="ctl-btn dir-faster"><h2>E</h2></div>
        {/* Camera Control */}
        <div className="ctl-btn pan-left"><GoArrowLeft size={40} /></div>
        <div className="ctl-btn tilt-up"><GoArrowUp size={40} /></div>
        <div className="ctl-btn tilt-down"><GoArrowDown size={40} /></div>
        <div className="ctl-btn pan-right"><GoArrowRight size={40} /></div>
        </div>
    </div>
  );

};

export default BotControl;