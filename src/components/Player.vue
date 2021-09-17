<template>
  <div class="remix">
    {{genre.sounds}}
    <hr>
    {{sounds}}
    <hr>
    <!--<hr>
    1) тег - источник файла<br>
    2) подключение источника к контексту звука<br>
    3) связывание громкости и контекста<br>
    4) связывание слайдера звка с громкостью через событие<br>
    5) логика плей/пауза/стоп <br>
    6) дополнительная логика (переключение в конце, сброс остальных треков при достижении конца основного) <br>
    7) визуализация-->
    <!--<hr>
    {{mainLine}}
    <hr>
    {{mainLine.curTime}} / {{mainLine.time}}
    <hr>-->

    <audio id="mainLine" :src="`samples-mp3/${genreName}/${mainLine.name}/${mainLine.file}`"></audio>

    <div  class="remix__header">
      <div class="remix__block">
        <div class="remix__author">DJ's name</div>
        <div class="remix__name">Song Name</div>

        <input class="volume" type="range" name="volume"/>

        <button @click="mainLinePlay" class="btn-play">
          <i v-if="!mainLine.playing" class="fas fa-play"></i>
          <i v-if="mainLine.playing" class="fas fa-stop"></i>
        </button>
      </div>

      <div class="remix__canvas">
        <div class="remix__divider divider" v-bind:class="{'slow-back':!mainLine.playing}" v-bind:style="{left: mainLine.slider+'%'}">
          <img class="divider__before" src="images/arrow-bottom.svg" alt=""/>
          <div class="divider__line"></div>
          <img class="divider__after" src="images/arrow-top.svg" alt=""/>
        </div>

        <div class="remix__analyser">
          <canvas id="mainLineVis" style="width: 100%; height:50px"></canvas>
        </div>
      </div>
    </div>

    <div v-if="sounds.length !==0" class="remix__body">
      <div class="remix__list">

        <div v-for="sound in sounds" :key="sound.id" class="remix-item">
          <div class="remix-item__block">
            <div class="remix-item__actions">
              <button class="remix-item__action" type="button">
                <img src="images/volume-off.svg" alt="" />
              </button>

              <button class="remix-item__action" type="button">
                <img src="images/trash.svg" alt="" />
              </button>
            </div>

            <input class="volume" type="range" name="volume"/>
          </div>

          <audio v-for="(item, index) in genre.sounds" :key="sound.id+'_'+index" :id="'line_'+sound.id+'_'+item.icon" :src="`samples-mp3/${genreName}/${index}/${item.file}`"></audio>

          <div class="remix-item__canvas">
            <div class="remix-item__divider"></div>
            <div class="remix-item__analyser"><img src="images/analyser-2.png" alt="analyser" /></div>
          </div>

          <div v-if="sounds.length !==0" class="remix-tools__block">
            <ul class="remix-tools__items">
              <li v-for="soundToAdd in addSoundList" :key="soundToAdd.icon" class="remix-tools__item">
                <a @click.prevent="addLine(sound, soundToAdd)" class="remix-tools__link" v-bind:class="{'sound-activ':checkActiveSound(sound, soundToAdd)}" href="#">
                  <span :class="'remix-tools__icon remix-tools__icon--'+soundToAdd.icon"></span>
                </a>
              </li>
            </ul>

            <div v-if="sound.data" class="remix-tools__actions">
              <button @click="linePlay(sound)" class="remix-tools__record">
                <img src="images/record.svg" alt="record" />
              </button>
              <button v-if="false" class="remix-tools__pause">
                <img src="images/pause.svg" alt="pause" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="remix__footer">
      <div class="remix-tools">
        <button class="remix-tools__button" @click="addSound()">
          <img src="images/plus.svg" alt="add remix" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',

  props: {
    genreName: {
      type: String,
      required: true
    }
  },

  computed: {
    addSoundList() {
      let sounds = [];

      Object.keys(this.genre.sounds).forEach(item => {
        if(this.genre.sounds[item].icon !== 'main') {
          sounds.push(Object.assign({soundName:item},this.genre.sounds[item]));
        }
      });

      return sounds;
    }
  },

  data() {
    return {
      genre: {},
      sounds: [],
      soundCounter: 0,
      mainLine: { icon: "main", file: "", name: "", time: 0, curTime: 0, slider: 0, playing: false, source: {}, track:{}, gainNode: {}, analyser: {}, canvas: {} },
      auCon: {}
    }
  },

  created() {
    //формирование локальных звуков
    this.genre = Object.assign({}, this.$store.getters.genres[this.genreName]);

    //основная линия
    let mainLineName = Object.keys(this.genre.sounds).find(item => {
      if(this.genre.sounds[item].icon === 'main') {return true}
    });
    this.mainLine.name = mainLineName;
    this.mainLine.file = this.$store.getters.genres[this.genreName].sounds[mainLineName].file;
  },

  mounted() {
    this.auCon = new AudioContext;

    //основная линия
    //источник
    this.mainLine.source = document.getElementById('mainLine');
    //связывание источника и контекста и вывод в звук
    this.mainLine.track = this.auCon.createMediaElementSource(this.mainLine.source);
    this.mainLine.track.connect(this.auCon.destination);
    //связывание громкости и трека
    this.mainLine.gainNode = this.auCon.createGain();
    this.mainLine.track.connect(this.mainLine.gainNode).connect(this.auCon.destination);
    //автопереключение в конце трека
    this.mainLine.source.addEventListener('ended', () => {
      this.mainLine.playing = false;
      this.mainLine.source.currentTime = 0;
    }, false);

    //анализатор
    this.mainLine.canvas = document.getElementById('mainLineVis').getContext("2d");
    //this.mainLine.canvas.imageSmoothingEnabled = false;
    this.mainLine.analyser = this.auCon.createAnalyser();
    this.mainLine.track.connect(this.mainLine.analyser);
    this.mainLine.analyser.connect(this.auCon.destination);
    this.mainLine.analyser.fftSize = 1024;
    this.mainLine.bufferLength = this.mainLine.analyser.frequencyBinCount;
    this.mainLine.dataArray = new Uint8Array(this.mainLine.bufferLength);
    this.mainLine.canvasWidth = document.getElementById('mainLineVis').width;
    this.mainLine.canvasHeight = document.getElementById('mainLineVis').height;
    this.mainLine.barWidth = (this.mainLine.canvasWidth / this.mainLine.bufferLength) * 2.5;
    this.mainLine.barHeight = '';
    this.mainLine.x = 0;

    //таймеры и визуализация
    this.loop();
  },

  methods: {
    addSound() {
      this.soundCounter++;
      this.sounds.push({id:this.soundCounter, data:null})
    },

    addLine(sound, soundToAdd) {
      if(sound?.data?.icon !== soundToAdd.icon) {
        sound.data = soundToAdd;
        setTimeout(() => {this.lineGenerate(sound)}, 100);
      }
    },

    checkActiveSound(sound, soundToAdd) {
      return sound?.data?.icon===soundToAdd.icon
    },

    lineGenerate(sound) {
      sound.playing = false;
      sound.slider = 0;
      sound.timeStart = 5;
      sound.timeEnd = 10;
      //источник
      sound.source = document.getElementById('line_'+sound.id+'_'+sound.data.icon);
      console.log('line_'+sound.id+'_'+sound.data.icon)
      //связывание источника и контекста и вывод в звук
      sound.track = this.auCon.createMediaElementSource(sound.source);
      sound.track.connect(this.auCon.destination);
      //связывание громкости и трека
      sound.gainNode = this.auCon.createGain();
      sound.track.connect(sound.gainNode).connect(this.auCon.destination);
      //автопереключение в конце трека
      sound.source.addEventListener('ended', () => {
        sound.playing = false;
        sound.source.currentTime = 0;
      }, false);
    },

    linePlay(sound) {
      // check if context is in suspended state (autoplay policy)
      if (this.auCon.state === 'suspended') {
        this.auCon.resume();
      }

      // play or pause track depending on state
      if (sound.playing === false) {
        sound.source.play();
        sound.playing = true;

      } else if (this.mainLine.playing === true) {
        sound.source.pause();
        sound.source.currentTime = 0;
        sound.playing = false;
      }
    },

    mainLinePlay() {
      // check if context is in suspended state (autoplay policy)
      if (this.auCon.state === 'suspended') {
        this.auCon.resume();
      }

      // play or pause track depending on state
      if (this.mainLine.playing === false) {
        this.mainLine.source.play();
        this.mainLine.playing = true;

      } else if (this.mainLine.playing === true) {
        this.mainLine.source.pause();
        this.mainLine.source.currentTime = 0;
        this.mainLine.playing = false;
      }
    },

    loop() {
      window.requestAnimationFrame(this.loop);

      //слайдер главного трека
      this.mainLine.slider = this.mainLine.source.currentTime/this.mainLine.source.duration*100;

      //таймер
      this.mainLine.curTime = this.mainLine.source.currentTime.toFixed(2);
      this.mainLine.time = this.mainLine.source.duration.toFixed(2);

     /* //подключение второстепенных дорожек от времени основной
      if(audioElement.currentTime >= guitarTimeStart && audioElement.currentTime <= guitarTimeEnd) {
        guitar.play();
        playBtnGuitar.dataset.playing = 'true';
        playBtnGuitar.innerText = 'Stop';
      } else {
        guitar.pause();
        playBtnGuitar.dataset.playing = 'false';
        playBtnGuitar.innerText = 'Start';
      }*/

      this.mainLineVis()
    },

    mainLineVis() {
      this.mainLine.x = 0;
      this.mainLine.analyser.getByteFrequencyData(this.mainLine.dataArray);

      this.mainLine.canvas.fillStyle = "#fecbc8";
      this.mainLine.canvas.fillRect(0, 0, this.mainLine.canvasWidth, this.mainLine.canvasHeight);

      for (let i = 0; i < this.mainLine.bufferLength; i++) {
        this.mainLine.barHeight = this.mainLine.dataArray[i];

        let r = 255;
        let g = 255;
        let b = 255;

        this.mainLine.canvas.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        this.mainLine.canvas.fillRect(this.mainLine.x, this.mainLine.canvasHeight - this.mainLine.barHeight, this.mainLine.barWidth, this.mainLine.barHeight);

        this.mainLine.x += this.mainLine.barWidth + 1;
      }
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .btn-play {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 35px;
    color: #2c2733;
    font-size: 18px;
    border: 1px solid #fffcf9;
    border-radius: 30px;
    background-color: #fffcf9;
    cursor: pointer;
    transition: background-color 300ms;
    position: absolute;
    top: 11px;
    right: 0;
  }

  hr {
    margin: 10px 0;
  }

  .remix__block {
    position: relative;
  }

  .remix__divider {
    transform: translate(-50%, -50%);
  }

  .slow-back {
    transition: all 0.5s;
  }

  .remix-tools__block {
    margin-top: 10px;
  }

  .sound-activ {
    border: 1px solid #fff;
  }
</style>

<style>
  input[type=range] {
    width: 100%;
    margin: 5px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    background: rgba(0, 0, 0, 1);
    border: 0;
    border-radius: 1px;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }
  input[type=range]::-webkit-slider-thumb {
    margin-top: -5px;
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #0d0d0d;
  }
  input[type=range]::-moz-range-track {
    background: rgba(0, 0, 0, 0.9);
    border: 0;
    border-radius: 1px;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 12px;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 5px 0;
    color: transparent;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }
  input[type=range]::-ms-fill-lower {
    background: #000000;
    border: 0;
    border-radius: 2px;
  }
  input[type=range]::-ms-fill-upper {
    background: rgba(0, 0, 0, 0.9);
    border: 0;
    border-radius: 2px;
  }
  input[type=range]::-ms-thumb {
    width: 12px;
    height: 12px;
    background: #ffffff;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type=range]:focus::-ms-fill-lower {
    background: rgba(0, 0, 0, 0.9);
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #0d0d0d;
  }
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align:auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type=range] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }


</style>