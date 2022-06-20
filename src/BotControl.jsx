import React, { useState } from 'react';
import axios from 'axios';

function BotControl(props) {

  const roverBotUrl = 'http://192.168.1.110:3000';

  const sendToBot = (event)  => {
    event.preventDefault();
    const value = event.target.value;
    console.log(value);

    axios
      .get(roverBotUrl + `/bot-test/${value}`)
      .then((response) => {
        console.log(response.status, response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });

  };


  return (
    <div className="bot-control-panel">
      <h2 className="control-header">Base Station Hello World</h2>
      <button value="1" onClick={sendToBot}>SEND TO BOT</button>
    </div>
  );

};

export default BotControl;