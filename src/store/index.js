import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    currentGenre: {},

    genres: {
      edm: {
        time: 15000,
        sounds: {
          fx: {
            icon: '4',
            file: '1.mp3'
          },
          melody:{
            icon: '4',
            file: '3.mp3'
          },
          mainline: {
            icon: 'main',
            file: '1.mp3'
          },
          rhythm: {
            icon: '3',
            file: '5.mp3'
          },
          synthesizer: {
            icon: '6',
            file: '5.mp3'
          }
        },
      },
      pop: {
        sounds: {
          rhythm: {
            icon: '3',
            file: 'rhythm.mp3'
          },
          synthesizer: {
            icon: '6',
            file: 'synt.mp3'
          },
          mainline: {
            icon: 'main',
            file: 'main.mp3'
          },
          voice: {
            icon: '4',
            file: 'voice.mp3'
          },
         /* winds: {
            icon: 'main',
            file: '2.mp3'
          }*/
        },
      },
      instrumental: {
        time: 15000,
        sounds: {
          guitar: {
            icon: '5',
            file: '1.mp3'
          },
          piano:{
            icon: '6',
            file: '1.mp3'
          },
          strings:{
            icon: '4',
            file: '1.mp3'
          },
          mainline: {
            icon: 'main',
            file: '1.mp3'
          },
          pizzicato: {
            icon: '3',
            file: '5.mp3'
          }
        },
      },
      rock: {
        time: 15000,
        sounds: {
          bass: {
            icon: '3',
            file: '1.mp3'
          },
          mainline:{
            icon: 'main',
            file: '1.mp3'
          },
          guitar: {
            icon: '5',
            file: '1.mp3'
          },
          drums: {
            icon: '2',
            file: '1.mp3'
          },
          voice: {
            icon: '4',
            file: '5.mp3'
          }
        },
      },
    }
  },

  getters: {
    genres(state) {
      return  state.genres;
    }
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }
})
