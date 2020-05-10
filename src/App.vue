<template>
  <div id="app">
    <div class="main clearfix" lazyload>
      <div class="mp3-player" lazyload>
        <audio ref="audio" autoplay="autoplay" id="audioDom"></audio>
        <i id="mp3_prev" class="iconfont icon-previous" @click="prev"></i>
        <i id="mp3_player" class="iconfont icon-play_icon" @click="player"></i>
        <i id="mp3_next" class="iconfont icon-xiyiqu" @click="next"></i>
        <i id="mp3_stop" class="iconfont icon-tingzhi" @click="stop"></i>
        <i id="mp3_shengyin" class="iconfont icon-shengyinkai" @click="shengyin"></i>
      </div>
      <h1 lazyload>二小1号个人主页</h1>
      <div class="hr-img" lazyload></div>
      <header>
        <div class="yu-title" lazyload></div>
        <div class="yu-shi" lazyload></div>
        <div class="yu-shi2" lazyload></div>
        <div class="move clearfix" lazyload>
          <ul class="move1 clearfix" lazyload>
            <li class="li1"></li>
            <li class="li2"></li>
            <li class="li3"></li>
            <li class="li4"></li>
            <li class="li5"></li>
            <li class="li6"></li>
            <li class="li7"></li>
            <li class="li8"></li>
          </ul>
          <ul class="move2 clearfix" lazyload>
            <li class="li1"></li>
            <li class="li2"></li>
            <li class="li3"></li>
            <li class="li4"></li>
            <li class="li5"></li>
            <li class="li6"></li>
            <li class="li7"></li>
            <li class="li8"></li>
          </ul>
        </div>
      </header>
      <div class="page-content clearfix" lazyload>
        <div class="yu-xin"></div>
        <div class="fu-shi clearfix" lazyload>
          <div class="rotate-box clearfix">
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3"></div>
            <div class="div4"></div>
            <div class="div5"></div>
            <div class="div6"></div>
            <div class="div7"></div>
            <div class="div8"></div>
          </div>
        </div>
      </div>
      <div class="test"></div>
      <div class="cube" lazyload>
        <div class="surface1"></div>
        <div class="surface2"></div>
        <div class="surface3"></div>
        <div class="surface4"></div>
        <div class="surface5"></div>
        <div class="surface6"></div>
      </div>
      <div class="box-horse" lazyload>
        <div class="clear-trojan">
          <div class="trojan-horse">
            <div class="div2"></div>
            <div class="div3"></div>
          </div>
          <div class="mock"></div>
        </div>
      </div>
      <div class="tyzs"></div>
      <div class="gif" lazyload>
        <div class="gif-1"></div>
        <div class="gif-2"></div>
        <div class="gif-3"></div>
        <br />
      </div>
      <div class="gif" lazyload>
        <div class="gif-4"></div>
        <div class="gif-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {
    prev() {
      this.nextMuise()
    },
    player() {
      this.clickPlay();
      this.nextMuise()
    },
    next() {
      this.nextPlay()
      this.nextMuise()
    },
    stop() {
      this.suspend()
    },
    shengyin() {
      this.mute()
    }
  },
  components: {},
  mounted() {
  }
};
</script>

<style>
@import url(./font/iconfont.css);
html {
  cursor: url(./images/mouse.png), auto;
  background: url(./images/bg.gif);
}
body,
ul,
li,
header,
h1 {
  margin: 0;
  padding: 0;
}
h1 {
  color: greenyellow;
  font-size: 100px;
  text-align: center;
  text-shadow: 1px 1px yellow, -1px -1px orange;
}
.hr-img {
  background: url(./images/comeon.gif);
  height: 120px;
}
.mp3-player {
  width: 200px;
  height: 200px;
  background: url(./images/music.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  position: fixed;
  right: 50px;
  top: 50%;
  margin-top: -100px;
  z-index: 10;
}
#mp3_shengyin {
  font-weight: bold;
  font-size: 36px;
}
.yu-title {
  width: 1000px;
  height: 355px;
  margin: 0 auto;
  margin-top: 50px;
  background: url(./images/yuyu_title.gif) 100% no-repeat;
}
.yu-shi {
  width: 1000px;
  height: 155px;
  margin: 0 auto;
  margin-top: 50px;
  background: url(./images/shi1.gif) 100% no-repeat;
}
.yu-shi2 {
  width: 1000px;
  height: 155px;
  margin: 0 auto;
  background: url(./images/shi2.gif) 100% no-repeat;
}
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.move {
  overflow: hidden;
}
header .move1 li {
  float: right;
}
header .move2 li {
  float: left;
}
@keyframes header-move1 {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(3212px);
  }
}
header .move1 {
  float: right;
  width: 6424px;
  height: 295px;
  animation: header-move1 20s linear infinite;
}
.move1 .li1 {
  width: 292px;
  height: 295px;
  margin-right: 292px;
  background: url("./images/header_r_2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li1::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  margin-left: -292px;
  background: url("./images/header_r_3.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li1::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_1.jpg");
  margin-left: 292px;
  margin-top: -295px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li2 {
  width: 292px;
  height: 295px;
  margin-right: 584px;
  background: url("./images/header_r_5.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li2::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_6.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -292px;
}
.move1 .li2::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_4.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move1 .li3 {
  width: 292px;
  height: 295px;
  margin-right: 584px;
  background: url("./images/header_r_8.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li3::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_9.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -292px;
}
.move1 .li3::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_7.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move1 .li4 {
  width: 292px;
  height: 295px;
  margin-right: 584px;
  background: url("./images/header_r_11.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li4::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -292px;
}
.move1 .li4::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_10.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move1 .li5 {
  width: 292px;
  height: 295px;
  margin-right: 584px;
  background: url("./images/header_r_3.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li5::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_4.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -292px;
}
.move1 .li5::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move1 .li6 {
  width: 292px;
  height: 295px;
  margin-right: 584px;
  background: url("./images/header_r_6.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li6::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_7.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -292px;
}
.move1 .li6::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_5.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move1 .li7 {
  width: 292px;
  height: 295px;
  margin-right: 584px;
  background: url("./images/header_r_9.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li7::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_10.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -292px;
}
.move1 .li7::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_8.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move1 .li8 {
  width: 292px;
  height: 295px;
  margin-right: 584px;
  background: url("./images/header_r_11.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.move1 .li8::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_r_1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: -292px;
}
@keyframes header-move2 {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-3212px);
  }
}
header .move2 {
  width: 6424px;
  animation: header-move2 20s linear infinite;
}
.move2 .li1 {
  width: 292px;
  height: 295px;
  margin-left: 292px;
  background: url("./images/header_tx_2.png") 100% 100% no-repeat;
}
.move2 .li1::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_1.png") 100% 100% no-repeat;
  margin-left: -292px;
}
.move2 .li1::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_3.png") 100% 100% no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move2 .li2 {
  width: 292px;
  height: 295px;
  margin-left: 584px;
  background: url("./images/header_tx_5.png") 100% 100% no-repeat;
}
.move2 .li2::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_4.png") 100% 100% no-repeat;
  margin-left: -292px;
}
.move2 .li2::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_6.png") 100% 100% no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move2 .li3 {
  width: 292px;
  height: 295px;
  margin-left: 584px;
  background: url("./images/header_tx_8.png") 100% 100% no-repeat;
}
.move2 .li3::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_7.png") 100% 100% no-repeat;
  margin-left: -292px;
}
.move2 .li3::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_9.png") 100% 100% no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move2 .li4 {
  width: 292px;
  height: 295px;
  margin-left: 584px;
  background: url("./images/header_tx_11.png") 100% 100% no-repeat;
}
.move2 .li4::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_10.png") 100% 100% no-repeat;
  margin-left: -292px;
}
.move2 .li4::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_1.png") 100% 100% no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move2 .li5 {
  width: 292px;
  height: 295px;
  margin-left: 584px;
  background: url("./images/header_tx_3.png") 100% 100% no-repeat;
}
.move2 .li5::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_2.png") 100% 100% no-repeat;
  margin-left: -292px;
}
.move2 .li5::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_4.png") 100% 100% no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move2 .li6 {
  width: 292px;
  height: 295px;
  margin-left: 584px;
  background: url("./images/header_tx_6.png") 100% 100% no-repeat;
}
.move2 .li6::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_5.png") 100% 100% no-repeat;
  margin-left: -292px;
}
.move2 .li6::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_7.png") 100% 100% no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.move2 .li7 {
  width: 292px;
  height: 295px;
  margin-left: 584px;
  background: url("./images/header_tx_9.png") 100% 100% no-repeat;
}
.move2 .li7::before {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_8.png") 100% 100% no-repeat;
  margin-left: -292px;
}
.move2 .li7::after {
  content: "";
  width: 292px;
  height: 295px;
  display: block;
  background: url("./images/header_tx_10.png") 100% 100% no-repeat;
  margin-left: 292px;
  margin-top: -295px;
}
.page-content {
}
.yu-xin {
  width: 400px;
  height: 400px;
  background: url(./images/dong.gif);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: 20px;
}
.fu-shi {
  transform-style: preserve-3d;
  transform: translateX(-200px) rotateX(-10deg);
  margin-left: 50%;
  margin-top: 100px;
}
.rotate-box {
  position: absolute;
  background: rgba(60, 60, 60, 0.5);
  transform-style: preserve-3d;
  animation: rotate-box 15s infinite linear;
  transform-origin: 200px 200px 0;
  margin-top: 100px;
}
.rotate-box div {
  position: absolute;
  width: 400px;
  height: 200px;
  border: 2px solid green;
  text-align: center;
  font-size: 50px;
}
.rotate-box .div1 {
  transform: translateZ(600px);
  background: url(./images/cd1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.rotate-box .div2 {
  transform: rotateY(45deg) translateZ(600px);
  background: url(./images/cd2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.rotate-box .div3 {
  transform: rotateY(90deg) translateZ(600px);
  background: url(./images/cd3.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.rotate-box .div4 {
  transform: rotateY(135deg) translateZ(600px);
  background: url(./images/cd4.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.rotate-box .div5 {
  transform: rotateY(180deg) translateZ(600px);
  background: url(./images/cd5.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.rotate-box .div6 {
  transform: rotateY(225deg) translateZ(600px);
  background: url(./images/cd6.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.rotate-box .div7 {
  transform: rotateY(270deg) translateZ(600px);
  background: url(./images/cd7.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.rotate-box .div8 {
  transform: rotateY(315deg) translateZ(600px);
  background: url(./images/cd8.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
@-webkit-keyframes rotate-box {
  from,
  to {
  }
  0% {
    -webkit-transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
  }
}

.test {
  width: 500px;
  height: 500px;
  overflow: hidden;
  flex-direction: inherit;
}
.cube {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  transform-style: preserve-3d;
  margin-top: 200px;
  transform-origin: 250px;
  animation: cube 10s linear infinite;
}
@keyframes cube {
  25% {
    transform: rotateY(90deg) rotateZ(-180deg);
  }
  50% {
    transform: rotateX(-180deg) rotateZ(0deg);
  }
  75% {
    transform: rotateY(300deg) rotateZ(180deg);
  }
  100% {
    transform: rotateX(360deg) rotateZ(360deg);
  }
}
.cube div {
  position: absolute;
  width: 500px;
  height: 500px;
  text-align: center;
}
.surface1 {
  background: url(./images/zm1.jpg);
  transform: translateZ(250px);
}
.surface2 {
  transform: translateZ(-250px);
  background: url(./images/zm2.jpg);
}
.surface3 {
  transform: rotateY(90deg) translateZ(-250px);
  background: url(./images/zm3.jpg);
}
.surface4 {
  transform: rotateY(90deg) translateZ(250px);
  background: url(./images/zm4.jpg);
}
.surface5 {
  transform: rotateX(90deg) translateZ(250px);
  background: url(./images/zm5.jpg);
}
.surface6 {
  transform: rotateX(90deg) translateZ(-250px);
  background: url(./images/zm6.jpg);
}
.clear-trojan {
  width: 600px;
  height: 600px;
  overflow: hidden;
  margin: 0 auto;
}
.box-horse {
  transform: translateY(200px);
}
.mock {
  width: 200px;
  height: 200px;
  background-image: url(./images/zm4.jpg);
  background-size: 100% 100%;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: -200px;
}
.trojan-horse {
  width: 200px;
  height: 200px;
  background-size: 100% 100%;
  border-radius: 100px;
  animation: horse 10s infinite linear;
  margin: 0 auto;
  margin-top: 200px;
}
.trojan-horse .div2 {
  width: 200px;
  height: 200px;
  background-image: url(./images/zm4.jpg);
  background-size: 100% 100%;
  border-radius: 100px;
  position: absolute;
  transform: rotateZ(-60deg) translateX(200px);
  filter: hue-rotate(180deg);
}
.trojan-horse .div2::before {
  position: absolute;
  content: "";
  display: block;
  width: 200px;
  height: 200px;
  background-image: url(./images/zm4.jpg);
  border-radius: 100px;
  background-size: 100%;
  filter: grayscale(100%);
  left: -200px;
  transform: rotateZ(-30deg) translateY(200px);
}
.trojan-horse .div2::after {
  position: absolute;
  content: "";
  display: block;
  width: 200px;
  height: 200px;
  background-image: url(./images/zm4.jpg);
  border-radius: 100px;
  background-size: 100%;
  margin-left: -200px;
  filter: brightness(200%) hue-rotate(180deg);
  transform: rotateZ(120deg) translateX(-200px);
}
.trojan-horse .div3 {
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: url(./images/zm4.jpg);
  background-size: 100% 100%;
  border-radius: 100px;
  left: -200px;
  filter: invert(100%);
}
.trojan-horse .div3::before {
  position: absolute;
  content: "";
  display: block;
  width: 200px;
  height: 200px;
  background-image: url(./images/zm4.jpg);
  border-radius: 100px;
  background-size: 100%;
  filter: saturate(300%) invert(100%);
  transform: rotateZ(-30deg) translateY(200px);
}
.trojan-horse .div3::after {
  position: absolute;
  content: "";
  display: block;
  width: 200px;
  height: 200px;
  background-image: url(./images/zm4.jpg);
  border-radius: 100px;
  background-size: 100%;
  filter: sepia(100%);
  left: 200px;
  transform: rotateZ(-30deg) translateY(200px);
}
@keyframes horse {
  100% {
    transform: rotateZ(360deg);
  }
}
.tyzs {
  height: 100px;
  background-image: url(./images/tyzs.gif);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  transform: translateY(200px);
}
.gif {
  display: flex;
  justify-content: space-around;
  padding: 100px 100px;
  transform: translateY(200px);
}
.gif div {
  width: 400px;
  height: 250px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.gif-1 {
  background-image: url(./images/lianji_1.gif);
}
.gif-2 {
  background-image: url(./images/lianji_4.gif);
}
.gif-3 {
  background-image: url(./images/lianji_3.gif);
}
.gif-4 {
  background-image: url(./images/lianji_5.gif);
}
.gif-5 {
  background-image: url(./images/lianji_6.gif);
}
</style>
