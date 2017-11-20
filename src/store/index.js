import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // LOCAL COPY OF ALL DATA FOR THE APPLICATION
        players: [
            {
              picture: '//placehold.it/100x100',
              health: 100,
              playerName: 'Mark',
              attacks: {
                slap: 1,
                kick: 5,
                punch: 10
              }
            },
            {
              picture: '//placehold.it/100x100',
              health: 100,
              playerName: 'D$',
              attacks: {
                slap: 1,
                kick: 5,
                punch: 10
              }
            },
            {
              picture: '//placehold.it/100x100',
              health: 100,
              playerName: 'Jakob',
              attacks: {
                slap: 1,
                kick: 5,
                punch: 10
              }
            },
            {
              picture: '//placehold.it/100x100',
              health: 100,
              playerName: 'J-Dawg',
              attacks: {
                slap: 1,
                kick: 5,
                punch: 10
              }
            }
          ]

    },
    mutations: {
        attack(state, payload) {
            // DATA MUTATION
            debugger
            payload.player.health -= payload.player.attacks[payload.type]
        }

    },
    actions: {
        attack({ commit, dispatch }, payload) {
            // BUSINESS LOGIC
            if (payload.player.health > 0) {
                // ALLOW THE SLAP
                commit('attack', payload)
            } else {
                // YOU MONSTER WHAT IS WRONG WITH YOU
                console.log('nope')
            }
            
        }
        
    }
}) 