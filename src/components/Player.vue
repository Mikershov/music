<template>
  <div class="remix">
    {{genre.sounds}}
    <hr>
    1) тег - источник файла<br>
    2) подключение источника к контексту звука<br>
    3) связывание громкости и контекста<br>
    4) связывание слайдера звка с громкостью через событие<br>
    5) логика плей/пауза/стоп <br>
    6) дополнительная логика (переключение в конце, сброс остальных треков при достижении конца основного) <br>
    7) визуализация
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

        <div class="remix__volume volume">
          <div class="volume__bar" style="width: 100%"></div>
          <div class="volume__track"></div>
          <div class="volume__thumb" style="left: 100%"></div>
        </div>

        <button @click="mainLinePlay" class="btn-play">
          <i v-if="!mainLine.playing" class="fas fa-play"></i>
          <i v-if="mainLine.playing" class="fas fa-stop"></i>
        </button>
      </div>

      <div class="remix__canvas">
        <div class="remix__divider divider" v-bind:style="{left: mainLine.slider+'%'}">
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

            <input class="volume volume-grey" type="range" name="volume"/>

          </div>

          <div class="remix-item__canvas">
            <div class="remix-item__divider"></div>
            <div class="remix-item__analyser"><img src="images/analyser-2.png" alt="analyser" /></div>
          </div>
        </div>

      </div>
    </div>

    <div class="remix__footer">
      <div class="remix-tools">
        <div v-if="sounds.length !==0" class="remix-tools__block">

          <ul class="remix-tools__items">
            <li class="remix-tools__item">
              <a class="remix-tools__link" href="#"><span class="remix-tools__icon remix-tools__icon--1"></span></a>
            </li>

            <li class="remix-tools__item">
              <a class="remix-tools__link" href="#"><span class="remix-tools__icon remix-tools__icon--2"></span></a>
            </li>

            <li class="remix-tools__item">
              <a class="remix-tools__link" href="#"><span class="remix-tools__icon remix-tools__icon--3"></span></a>
            </li>

            <li class="remix-tools__item">
              <a class="remix-tools__link" href="#"><span class="remix-tools__icon remix-tools__icon--4"></span></a>
            </li>

            <li class="remix-tools__item">
              <a class="remix-tools__link" href="#"><span class="remix-tools__icon remix-tools__icon--5"></span></a>
            </li>

            <li class="remix-tools__item">
              <a class="remix-tools__link" href="#"><span class="remix-tools__icon remix-tools__icon--6"></span></a>
            </li>
          </ul>

          <div class="remix-tools__actions">
            <button class="remix-tools__record">
              <img src="images/record.svg" alt="record" />
            </button>
            <button class="remix-tools__pause">
              <img src="images/pause.svg" alt="pause" />
            </button>
          </div>
        </div>

        <button class="remix-tools__button" @click="addSound()">
          <img src="images/plus.svg" alt="add remix" />
        </button>
      </div>

      <!-- <div class="remix__canvas">
        <div class="remix__divider"></div>
        <div class="remix__analyser">
          <img src="images/analyser-3.png" alt="analyser" />
        </div>
      </div> -->
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
      this.sounds.push({id:this.soundCounter})
    },

    mainLinePlay() {
      console.log('PLAY', this.mainLine);

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

      //визуализация
      //arrayMain = new Uint8Array(analyserMain.frequencyBinCount);
      //analyserMain.getByteFrequencyData(arrayMain);
      //mainVis.width = (arrayMain[40])+"px";

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

        let r = this.mainLine.barHeight + (25 * (i/this.mainLine.bufferLength));
        let g = 250 * (i/this.mainLine.bufferLength);
        let b = 255;

        this.mainLine.canvas.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        this.mainLine.canvas.fillRect(this.mainLine.x, this.mainLine.canvasHeight - this.mainLine.barHeight, this.mainLine.barWidth, this.mainLine.barHeight);

        this.mainLine.x += this.mainLine.barWidth + 1;
      }
    }
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
</style>
