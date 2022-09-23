import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const saveTime = localStorage.getItem('videoplayer-current-time');
const throttle = require('lodash.throttle');

(() => {
  saveTime ? player.setCurrentTime(saveTime) : null;
  player.on('timeupdate', throttle(onTimeupdate, 1000));
})();

function onTimeupdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
