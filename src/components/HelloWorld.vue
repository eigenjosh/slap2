<template>
  <div class="HelloWorld">

    <div v-for="player in players" class="player" :class="getHealthStatus(player)">

      <img :src="player.picture" alt="">
      <h1>Player: {{player.playerName}}</h1>
      <h4 v-if="player.health >= 1">Health: {{player.health}}</h4>
      <h4 v-else>DEAD</h4>
<<<<<<< HEAD
      <button v-for="(val, type) in player.attacks" :disabled="player.health <= 1" @click="attack(player, type)">{{type}}</button>
=======

      <button v-for="(val, attack) in player.attacks" :disabled="player.health <= 1" @click="slap(player, attack)">{{attack}}</button>
>>>>>>> 4bcae5cf41e40683974eaf665bca578d1a0701f0

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {

<<<<<<< HEAD
      }
    },
    computed: {
      players() {
        return this.$store.state.players
      }
    },
    methods: {
      attack(player, type) {

        this.$store.dispatch('attack', { player, type })
=======
      }
    },
    methods: {
      slap(player, attack) {
        this.$store.dispatch('slap', { player, attack })
>>>>>>> 4bcae5cf41e40683974eaf665bca578d1a0701f0
      },
      getHealthStatus(player) {
        return {
          healthy: player.health > 75,
          dying: player.health <= 75 && player.health > 0,
          dead: player.health <= 0
        }
      }
    },
    computed: {
      players() {
        return this.$store.state.players
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .healthy {
    color: green
  }

  .dying {
    color: orange
  }

  .dead {
    color: red
  }

  h1 {
    color: blue
  }
</style>