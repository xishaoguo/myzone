import Vue from 'vue'
import App from './App.vue'
import zrdhx from "./audios/zrdhx.mp3"
import assx from "./audios/assx.mp3"
let mp3Arr = [zrdhx,assx]
let len = 0;
let currentTime = 0;
/**
 * 播放
 */
Vue.prototype.clickPlay = () => {
  const mp3Play = document.getElementById('audioDom');
  const mp3PlayIcon = document.getElementById('mp3_player');
  if(mp3Play.paused) {
    mp3PlayIcon.classList.remove("icon-play_icon");
        mp3PlayIcon.classList.add("icon-zanting");
    if(mp3Play.currentTime == 0) {
      mp3Play.src = mp3Arr[len];
    }
    mp3Play.play();
  }else {
    mp3PlayIcon.classList.remove("icon-zanting");
        mp3PlayIcon.classList.add("icon-play_icon");
    mp3Play.pause();
  } 
}
/**
 * 上一曲
 */
Vue.prototype.prevPlay = () => {
  const mp3Play = document.getElementById('audioDom');
  len = len == 0 ? len = mp3Arr.length-1:len -1;
    mp3Play.src = mp3Arr[len];
}
/**
 * 下一曲
 */
Vue.prototype.nextPlay = () => {
  const mp3Play = document.getElementById('audioDom');
  len = len >= mp3Arr.length-1 ? 0 :len + 1;
    mp3Play.src = mp3Arr[len];
}
/**
 * 静音
 */
Vue.prototype.mute = () => {
  const mp3ShengYin = document.getElementById("mp3_shengyin");
  const mp3Play = document.getElementById('audioDom');
  mp3Play.muted = !mp3Play.muted;
  if(mp3Play.muted) {
    mp3ShengYin.classList.remove("icon-shengyinkai");
        mp3ShengYin.classList.add("icon-shengyinguan");
  }else {
    mp3ShengYin.classList.remove("icon-shengyinguan");
        mp3ShengYin.classList.add("icon-shengyinkai");
  }
}
/**
 * 停止
 */
Vue.prototype.suspend = () => {
  const mp3Play = document.getElementById('audioDom');
  const mp3PlayIcon = document.getElementById('mp3_player');
  mp3PlayIcon.classList.remove("icon-zanting");
    mp3PlayIcon.classList.add("icon-play_icon");
  mp3Play.currentTime = 0;
  mp3Play.pause();
}
/**
 * 自动播放下一曲
 */
Vue.prototype.nextMuise = () => {
  const mp3Play = document.getElementById('audioDom');
  setInterval(()=>{
    var playDuration = mp3Play.duration;
    currentTime = Math.floor(mp3Play.currentTime);
    if(currentTime == Math.floor(playDuration)-1){
        len = len >= mp3Arr.length-1 ? 0 :len + 1;
        mp3Play.src = mp3Arr[len];
        console.log("还在播放");
    }
},1000);
}
document.body.addEventListener('click', function(e) {
  let event = e || window.event;
  let target = event.target || event.srcElement;
  let clickMusic = target.getAttribute('clickMusic')
  if (clickMusic === 'true') Vue.prototype.clickPlay()
  else return false;
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
