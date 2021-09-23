<template>
  <div class="remix">
<pre>
{{sounds}}
</pre>

    <audio :id="'mainLine_'+genreName" :src="`samples-mp3/${genreName}/${mainLine.name}/${mainLine.file}`"></audio>

    <div  class="remix__header">
      <div class="remix__block">
        <div class="remix__author">DJ's name</div>
        <div class="remix__name" style="text-transform: uppercase">{{ genreName }}</div>

        <input :id="'volume_'+genreName" class="volume" type="range" name="volume" min="0" max="1"  step="0.01">

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
          <canvas :id="'mainLineVis_'+genreName" style="width: 100%; height:50px"></canvas>
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

              <button @click="deleteSound(sound)" class="remix-item__action" type="button">
                <img src="images/trash.svg" alt="" />
              </button>
            </div>
            <input :disabled="mainLine.playing" class="volume" :class="{'volume-block':mainLine.playing}" :id="'volume_'+sound.id+'_'+genreName" type="range" name="volume" min="0" max="1"  step="0.01">
          </div>

          <audio v-for="(item, index) in genre.sounds" :key="sound.id+'_'+index" :id="'line_'+sound.id+'_'+item.icon+'_'+genreName" :src="`samples-mp3/${genreName}/${index}/${item.file}`"></audio>

          <div class="remix__canvas">
            <button @click="clearSublineTimes(sound)" class="remix-tools__record">
              <i  class="fas fa-trash"></i>
            </button>

            <div v-for="time in sound.playTimes" :key="time.start" class="sub-line-vis" v-bind:style="{width:getLineWidth(time)+'%', left:getLineLeft(time)+'%'}"></div>

            <div v-if="sound.data" class="remix__divider divider divider-simple"  v-bind:class="{'slow-back':!mainLine.playing}" v-bind:style="{left: mainLine.slider+'%'}">
              <div class="divider__line"></div>
            </div>
          </div>

          <div v-if="sounds.length !==0" class="remix-tools__block">
            <ul class="remix-tools__items">
              <li v-for="soundToAdd in addSoundList" :key="soundToAdd.icon" class="remix-tools__item" :class="{'subline-block':mainLine.playing}">
                <a @click.prevent="addLine(sound, soundToAdd)" class="remix-tools__link" v-bind:class="{'sound-activ':checkActiveSound(sound, soundToAdd)}" href="#">
                  <span :class="'remix-tools__icon remix-tools__icon--'+soundToAdd.icon"></span>
                </a>
              </li>
            </ul>

            <div v-if="false">
              <button @click="subLinePlay(sound)" class="remix-tools__record">
                <i  class="fas fa-play"></i>
                <i v-show="sound.playing" class="fas fa-stop"></i>
              </button>
            </div>

            <div v-show="sound.data && mainLine.playing" class="remix-tools__actions">
              <button v-show="!sound.record" @click="lineRecord(sound)" class="remix-tools__record">
                <img src="images/record.svg" alt="record" />
              </button>
              <button v-show="sound.record" @click="lineStopRecord(sound)" class="remix-tools__pause">
                <img src="images/pause.svg" alt="pause" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="remix__footer">
      <div class="remix-tools">
        <button v-show="addBtnStatus()" class="remix-tools__button" @click="addSound()">
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
      globalSoundsNumber: 0,
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
    this.mainLine.source = document.getElementById('mainLine_'+this.genreName);
    //связывание источника и контекста и вывод в звук
    this.mainLine.track = this.auCon.createMediaElementSource(this.mainLine.source);
    this.mainLine.track.connect(this.auCon.destination);
    //связывание громкости и трека
    //this.mainLine.gainNode = this.auCon.createGain();
    //this.mainLine.track.connect(this.mainLine.gainNode).connect(this.auCon.destination);

    //связывание громкости звука с ползунком
    this.mainLine.volumeControl = document.getElementById('volume_'+this.genreName);
    this.mainLine.volumeControl.value = 0.1;
    this.mainLine.source.volume = 0.1;
    this.mainLine.volumeControl.addEventListener('input', (e) => {
      this.mainLine.source.volume = e.target.value;
    }, false);

    //автопереключение в конце трека
    this.mainLine.source.addEventListener('ended', () => {
     this.mainLinePlay();
    }, false);

    //анализатор
    this.mainLine.canvas = document.getElementById('mainLineVis_'+this.genreName).getContext("2d");
    //this.mainLine.canvas.imageSmoothingEnabled = false;
    this.mainLine.analyser = this.auCon.createAnalyser();
    this.mainLine.track.connect(this.mainLine.analyser);
    this.mainLine.analyser.connect(this.auCon.destination);
    this.mainLine.analyser.fftSize = 1024;
    this.mainLine.bufferLength = this.mainLine.analyser.frequencyBinCount;
    this.mainLine.dataArray = new Uint8Array(this.mainLine.bufferLength);
    this.mainLine.canvasWidth = document.getElementById('mainLineVis_'+this.genreName).width;
    this.mainLine.canvasHeight = document.getElementById('mainLineVis_'+this.genreName).height;
    this.mainLine.barWidth = (this.mainLine.canvasWidth / this.mainLine.bufferLength) * 2.5;
    this.mainLine.barHeight = '';
    this.mainLine.x = 0;

    //таймеры и визуализация
    this.loop();

    //для удобства воспроизведение по спейсу
    document.body.onkeyup = (e) => {
      if(e.code === 'Space') {
        this.mainLinePlay();
      }
    }
  },

  methods: {
    //добавление пустой саб-линии в локальную структуру линий this.sounds
    addSound() {
      this.soundCounter++;
      this.sounds.push({id:this.soundCounter, data:null})
    },

    deleteSound(sound) {
      let index = this.sounds.findIndex(item => item.id === sound.id);
      this.sounds.splice(index, 1);
    },

    //добавление данных в саблинии (выбранный звук)
    addLine(sound, soundToAdd) {
      //не нажата ли кнопка звука уже
      if(this.sounds.find(s => s?.data?.soundName === soundToAdd.soundName)) {
        return false;
      }

      //не идет ли воспроизведение
      if(sound.playing) {
        return false;
      }

      if(sound?.data?.icon !== soundToAdd.icon) {
        sound.playing = false;
        sound.record = false;
        sound.slider = 1;
        sound.timeStart = null;
        sound.timeEnd = null;
        sound.data = soundToAdd;
        sound.playTimes = [];
        setTimeout(() => {this.lineGenerate(sound)}, 100);
      }
    },

    //проверка выбран ли уже инструмент для саблинии
    checkActiveSound(sound, soundToAdd) {
      return sound?.data?.icon===soundToAdd.icon
    },

    //подключение к заполненной саблинии исчтоника звука и логики воспроизведения
    lineGenerate(sound) {
      //источник
      sound.source = document.getElementById('line_'+sound.id+'_'+sound.data.icon+'_'+this.genreName);
      //связывание источника и контекста и вывод в звук
      sound.track = this.auCon.createMediaElementSource(sound.source);
      sound.track.connect(this.auCon.destination);
      //связывание громкости звука с ползунком
      sound.volumeControl = document.getElementById('volume_'+sound.id+'_'+this.genreName);
      sound.volumeControl.value = 1;
      sound.source.volume = 1;
      sound.volumeBack = 1;
      sound.volumeControl.addEventListener('input', (e) => {
        sound.source.volume = e.target.value;
        sound.volumeBack = e.target.value;
      }, false);
      //автопереключение в конце трека
      sound.source.addEventListener('ended', () => {
        sound.playing = false;
        sound.source.currentTime = 0;
      }, false);
    },

    lineRecord(sound) {
      sound.record = true;
      sound.timeStart = this.mainLine.source.currentTime;
      sound.source.volume = sound.volumeBack;

      sound.playTimes.push({start:this.mainLine.source.currentTime, end:null, status: 'wait'});
    },

    lineStopRecord(sound) {
      sound.record = false;
      sound.source.currentTime = 0;
      sound.source.volume = 0;
    },

    getLineWidth(times) {
      return (times.end-times.start)/this.mainLine.source.duration*100;
    },

    getLineLeft(times) {
      return times.start/this.mainLine.source.duration*100;
    },

    mainLinePlay() {
      // check if context is in suspended state (autoplay policy)
      if (this.auCon.state === 'suspended') {
        this.auCon.resume();
      }

      if(!this.mainLine.playing) {
        this.mainLine.source.play();
        this.mainLine.playing = true;

        this.subLinesAllPlay();
      } else {
        this.mainLine.source.pause();
        this.mainLine.source.currentTime = 0;
        this.mainLine.playing = false;

        this.subLinesAllPlay(false);
      }
    },

    subLinesAllPlay(status = true) {
      this.sounds.forEach(sound => {
        if(sound.source) {
          if(status) {
            sound.source.play();
            sound.source.volume = 0;
            sound.playing = true;
          } else {
            sound.source.pause();
            sound.source.currentTime = 0;
            sound.source.volume = sound.volumeBack;
            sound.playing = false;
            sound.record = false;
            
            sound.playTimes.forEach(time => {
              time.status = 'wait';
            });
          }
        }
      });
    },

    subLinePlay() {

    },

    clearSublineTimes(sound) {
      console.log('clear')
      sound.playTimes = [];
    },

    loop() {
      window.requestAnimationFrame(this.loop);

      //слайдер главного трека
      this.mainLine.slider = this.mainLine.source.currentTime/this.mainLine.source.duration*100;

      //таймер
      this.mainLine.curTime = this.mainLine.source.currentTime.toFixed(2);
      this.mainLine.time = this.mainLine.source.duration.toFixed(2);

      //подключение второстепенных дорожек от времени основной
      this.sounds.forEach(sound => {
        if(sound.source) {
          sound.playTimes.forEach(time => {
            if(time.start !== time.end && this.mainLine.playing && !sound.record) {
              if(this.mainLine.source.currentTime >= time.start && this.mainLine.source.currentTime <= time.end) {
                if(time.status === 'wait') {
                  console.log('start', time)
                  time.status = 'play';
                  sound.source.volume = sound.volumeBack;
                }

                /*if(this.mainLine.source.currentTime > time.end && sound.source.volume !== 0) {
                  console.log('stop')
                  sound.source.volume = 0;
                }*/

              } else if(time.status === 'play') {
                console.log('stop', time)
                time.status = 'done';
                sound.source.volume = 0;
              }
            }
          });
        }
      });

      //запись линий
      this.sounds.forEach(item => {
        if(item.record) {
          item.timeEnd = this.mainLine.source.currentTime;
          item.playTimes[item.playTimes.length-1].end = this.mainLine.source.currentTime;
        }
      });

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

    //показывает или скрывает кнопку добавить саб-линию
    addBtnStatus() {
      let globalSounds = 0;
      Object.keys(this.genre.sounds).forEach(item => {
        if(this.genre.sounds[item].icon !== 'main') {
          globalSounds++;
        }
      });

      return globalSounds > this.sounds.length;
    }
  },

  watch: {
    'genreName'() {
      this.genre = Object.assign({}, this.$store.getters.genres[this.genreName]);

      //основная линия
      let mainLineName = Object.keys(this.genre.sounds).find(item => {
        if(this.genre.sounds[item].icon === 'main') {return true}
      });
      this.mainLine.name = mainLineName;
      this.mainLine.file = this.$store.getters.genres[this.genreName].sounds[mainLineName].file;

      this.sounds = [];
      this.soundCounter=  0;
    },

    /*'mainLine.playing'() {
      if(!this.mainLine.playing) {
        this.sounds.forEach(line => {
          if(line.source) {
            line.source.pause();
            line.source.currentTime = 0;
            line.playing = false;
            if(line.record) {
              this.lineStopRecord(line)
            }
          }
        });
      }
    }*/

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

  .remix-item__canvas {
    position: relative;
  }

  .sub-line-vis {
    position: absolute;
    top: 21px;
    background-color: rgba(255, 255, 255, .5);
    height: 20px;
  }

  .remix__header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    -moz-column-gap: 20px;
    column-gap: 20px;
    margin: 0 -20px 20px;
    padding: 19px 19px 17px;
    border-radius: 30px;
  }

  .remix__canvas {
    margin-bottom: 5px;
  }

  .remix-item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    -moz-column-gap: 20px;
    column-gap: 20px;
    margin: 0 -20px 20px;
    padding: 19px 19px 17px;
    border-radius: 30px;
    background-color: #ffb9b5;
  }

  .volume-block {
    opacity: 0.3;
  }

  .subline-block {
    opacity: 0.5;
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