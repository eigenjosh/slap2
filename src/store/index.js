import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

<<<<<<< HEAD
export default new Vuex.Store({
    state: {
        // LOCAL COPY OF ALL DATA FOR THE APPLICATION
=======

export default new Vuex.Store({
    state: {
        // THIS IS THE LOCAL COPY OF ALL DATA FOR THE APPLICATION
>>>>>>> 4bcae5cf41e40683974eaf665bca578d1a0701f0
        players: [
            {
              picture: '//placehold.it/100x100',
              health: 100,
              playerName: 'Mark',
              attacks: {
<<<<<<< HEAD
                slap: 1,
                kick: 5,
                punch: 10
=======
                  slap: 1,
                  kick: 5
>>>>>>> 4bcae5cf41e40683974eaf665bca578d1a0701f0
              }
            },
            {
              picture: '//placehold.it/100x100',
              health: 100,
              playerName: 'D$',
              attacks: {
<<<<<<< HEAD
                slap: 1,
                kick: 5,
                punch: 10
=======
                  punch: -5, 
                  haduken: -1000
>>>>>>> 4bcae5cf41e40683974eaf665bca578d1a0701f0
              }
            },
            {
              picture: '//placehold.it/100x100',
              health: 100,
              playerName: 'Jakob',
              attacks: {
<<<<<<< HEAD
                slap: 1,
                kick: 5,
                punch: 10
=======
                  tickle: -100
>>>>>>> 4bcae5cf41e40683974eaf665bca578d1a0701f0
              }
            },
            {
              picture: '//placehold.it/100x100',
<<<<<<< HEAD
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
=======
              health: 10,
              playerName: 'J-Dawg',
              attacks: {
                  flu: 10000
              }
            }
          ]
    },
    mutations: {
        // FUNCTIONS THAT CAN CHANGE THE STATE
        slap(state, payload){
            // DATA MUTATION
            payload.player.health -= payload.player.attacks[payload.attack]
        }
    },
    actions: {
        // FUNCTIONS THAT REQUESTS TO CHANGE DATA
        slap({ commit, dispatch }, payload){
            // BUSINESS LOGIC
            if(payload.player.health > 0){
                // ALLOW THE SLAP
                commit('slap', payload)
            }else{
                // YOU MONSTER
                console.log('nope')
            }
        }
    }
    
})
>>>>>>> 4bcae5cf41e40683974eaf665bca578d1a0701f0
