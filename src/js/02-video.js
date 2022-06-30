import vimeoPlayer from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

player.on('timeupdate', throttle(timeplaying, 1000));

function timeplaying(event) {
  const currentTime = event.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(currentTime));

  console.log(`Время воспроизведения ${currentTime} секунд`);
}
// player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)));
const timeLS = localStorage.getItem(CURRENT_TIME);
if (timeLS) {
  const savedTime = JSON.parse(timeLS);
  if (savedTime) {
    player.setCurrentTime(savedTime);
    console.log(`Вы закончили просмотр на ${Math.round(savedTime)} секунде`);
  }
} else {
  console.log(`Вы не просматривали это видео`);
}
