import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genres: {
      edm: {
        time: 15000,
        sounds: {
          fx: {
            icon: '3',
            file: '1.mp3'
          },
          melody:{
            icon: '4',
            file: '3.mp3'
          },
          rhythm: {
            icon: 'main',
            file: '1.mp3'
          },
          synthesizer: {
            icon: '6',
            file: '5.mp3'
          }
        },
      },

      indie: {
        time: 15000,
        sounds: {
          bass: {
            icon: '2',
            file: '1.mp3'
          },
          guitar:{
            icon: '5',
            file: '1.mp3'
          },
          rhythm: {
            icon: 'main',
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
