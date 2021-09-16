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
    <hr>
    {{mainLine}}
    <hr>
    {{mainLine.curTime}} / {{mainLine.time}}

    <audio id="mainLine" :src="`samples-mp3/${genreName}/${mainLine.name}/${mainLine.file}`"></audio>

    <div  class="remix__header">
      <div class="remix__block">
        <button @click="mainLinePlay" class="btn-play">
          <i class="fas fa-play"></i>
        </button>

        <div class="remix__author">DJ's name</div>
        <div class="remix__name">Song Name</div>

        <div class="remix__volume volume">
          <div class="volume__bar" style="width: 100%"></div>
          <div class="volume__track"></div>
          <div class="volume__thumb" style="left: 100%"></div>
        </div>
      </div>

      <div class="remix__canvas">
        <div class="remix__divider divider" style="left: 0%">
          <img class="divider__before" src="images/arrow-bottom.svg" alt=""/>
          <div class="divider__line"></div>
          <img class="divider__after" src="images/arrow-top.svg" alt=""/>
        </div>

        <div class="remix__analyser">
          <img src="images/analyser.png" alt="analyser" />
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
      mainLine: { icon: "main", file: "", name: "", time: 0, curTime: 0, playing: false, source: {}, track:{}, gainNode: {} },
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
    this.mainLine.time = this.$store.getters.genres[this.genreName].time;
  },

  mounted() {
    this.auCon = new AudioContext;

    //главный трек
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
    }, false);
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
        this.mainLine.playing = false;
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
    width: 35px;
    height: 35px;
    padding: 10px 5px 10px 10px;
    font-size: 20px;
    border: 1px solid #fb2f24;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 300ms;
  }

  hr {
    margin: 10px 0;
  }
</style>
