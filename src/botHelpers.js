import axios from 'axios';
const roverBotUrl = 'http://192.168.1.93:3000';

export const moveBot = (botState)  => {
  console.log(botState);
  axios
    .put(roverBotUrl + `/bot-move`, botState)
    .then((response) => {
      // console.log(response.status);
    })
    .catch((error) => {
      console.log(error.message);
    });

};

export const debounce = (callback, delay=100) => {
  let timeout;
  return (...args) => {
    clearTimeout();
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  }
};