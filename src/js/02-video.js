import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAY_VIDEO = 'vidioplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  localStorage.setItem(PLAY_VIDEO, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem(PLAY_VIDEO));

 if (currentTime === null) {
   return;
 } else {
   console.log(JSON.parse(currentTime));
   player.setCurrentTime(currentTime);
 }
