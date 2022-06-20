import React, { useState } from 'react';
import axios from 'axios';
import { GoArrowUp, GoArrowDown, GoArrowLeft, GoArrowRight } from 'react-icons/go';
import './styles/BotControl.css';

function BotControl(props) {

  const [keyboardActive, setKeyboardActive] = useState(false);
  // const [buttonActive, setButtonActive] = useState(false);
  // const [gamepadActive, setGamepadActive] = useState(false);

  const [currentDirection, setCurrentDirection] = useState('');
  const [currentSpeed, setCurrentSpeed] = useState(100);

  // const zeroBotUrl = '';
  const roverBotUrl = 'http://192.168.1.110:3000';


  const moveBot = (dir, spd)  => {
    axios
      // .get(roverBotUrl + `/bot-move/${dir}/${spd}`)
      // .then((response) => {
      //   console.log(response.status);
      // })
      // .catch((error) => {
      //   console.log(error.message);
      // });
      .put(roverBotUrl + `/bot-move/`,
        {
          'dir': dir,
          'spd': spd,
        })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error.message);
      });

  };

  const activateKeyboard = (event) => {
    const activate = keyboardActive;
    event.target.classList.toggle('keyboard-active')
    setKeyboardActive(!activate);
  }

  const onKeyPress = (event) => {
    event.preventDefault();
    // const target = event.target;
    const keyCode = event.keyCode;
    const keyChar =  String.fromCharCode(keyCode);
    console.log('KEYBOARD', keyChar, keyCode);

    switch (keyChar) {
      case 'W':
        setCurrentDirection(keyChar);
        moveBot(keyChar, currentSpeed);
        break;
      case 'S':
        setCurrentDirection(keyChar);
        moveBot(keyChar, currentSpeed);
        break;
      case 'A':
        setCurrentDirection(keyChar);
        moveBot(keyChar, currentSpeed);
        break;
      case 'D':
        setCurrentDirection(keyChar);
        moveBot(keyChar, currentSpeed);
        break;
      case 'E':
        // setCurrentDirection(keyChar);
        let spd = currentSpeed + 10;
        if (spd > 250) { spd = 255; }
        setCurrentSpeed(spd);
        moveBot(currentDirection, spd);
        break;
      case 'Q':
        setCurrentDirection(keyChar);
        setCurrentSpeed(100);
        moveBot(keyChar, 0);
        break;
    }

  };

  return (
    <div className="bot-control-panel">
      <h2 className="control-header">Zero Bot Control</h2>

      <div className="direction-control">
        <div className="dir-btn dir-left"><GoArrowLeft /></div>
        <div className="dir-btn dir-up"><GoArrowUp /></div>
        <div className="dir-btn dir-down"><GoArrowDown /></div>
        <div className="dir-btn dir-right"><GoArrowRight /></div>
        <div className="dir-btn dir-a"><h2>A</h2></div>
        <div className="dir-btn dir-b"><h2>B</h2></div>
      </div>

      <div
        className="keyboard-control"
        onClick={activateKeyboard}
        onKeyDown={onKeyPress}
        tabIndex="0">
          Keyboard Control
      </div>

    </div>
  );

};

export default BotControl;