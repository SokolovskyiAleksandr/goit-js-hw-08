import vimeoPlayer from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);


player.on('timeupdate',throttle(timeplaying, 1000));

function timeplaying (event) {
    const currentTime = event.seconds;
    localStorage.setItem(CURRENT_TIME, JSON.stringify(currentTime));

    console.log(currentTime);
}
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)));