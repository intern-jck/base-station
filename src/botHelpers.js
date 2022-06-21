import axios from 'axios';
const roverBotUrl = 'http://192.168.1.93:3000';

export const moveBot = (keyCode, spd)  => {

  axios
    .put(roverBotUrl + `/bot-move`,
      {
        'key': keyCode,
        'spd': spd,
      })
    .then((response) => {
      // console.log(response.status);
    })
    .catch((error) => {
      console.log(error.message);
    });

};


