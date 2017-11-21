import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    // THIS IS THE LOCAL COPY OF ALL DATA FOR THE APPLICATION
    activePlayer: {},
    players: [
      {
        picture: '//placehold.it/320/240',
        health: 100,
        name: 'Mark',
        attacks: {
          slap: 1,
          kick: 5,
          punch: 10
        }
      },
      {
        picture: '//placehold.it/320/241',
        health: 100,
        name: 'D$',
        attacks: {
          slap: 1,
          kick: 5,
          punch: 10
        }
      },
      {
        picture: '//placehold.it/320/242',
        health: 100,
        name: 'Jakob',
        attacks: {
          slap: 1,
          kick: 5,
          punch: 10
        }
      },
      {
        picture: '//placehold.it/320/243',
        health: 100,
        name: 'J-Dawg',
        attacks: {
          slap: 1,
          kick: 5,
          punch: 10
        }
      }
    ]

  },
  mutations: {
    attack(state, type) {
      // DATA MUTATION
      state.activePlayer.health -= state.activePlayer.attacks[type]
    },
    setActivePlayer(state, player) {
      state.activePlayer = player
    },
    addNewPlayer(state, player) {
      state.players.push(player)
    }

  },
  actions: {
    attack({ commit, dispatch }, type) {
      // BUSINESS LOGIC
      // ALLOW THE SLAP
      commit('attack', type)
    },
    changeActivePlayer({ commit, dispatch }, player) {
      if (player.health > 0) {
        commit('setActivePlayer', player)
      }
    },
    addPlayer({ commit, dispatch }, newPlayer) {
      if (newPlayer.health > 0) {
        newPlayer.attacks = {
          slap: 1
        }
        commit('addPlayer', newPlayer)
      }
    }
  }

}) 
