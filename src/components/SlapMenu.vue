<template>
    <div>
        <div>
            <form @submit.prevent="setActivePlayer">
                <select @change="setActivePlayer" v-model="selectedPlayer">
                    <option :value="player" v-for="player in players">{{player.name}}</option>
                </select>
            </form>
        </div>
        <div>
            <form @submit.prevent="addNewPlayer">
                <input type="text" placeholder="Name" v-model="newPlayer.name">
                <input type="number" placeholder="Starting Health" v-model="newPlayer.health">
                <input type="url" placeholder="Image Url">
                <button type="submit">You're Next!</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedPlayer: {},
                newPlayer: {}
            }
        },
        methods: {
            setActivePlayer() {
                this.$store.dispatch('changeActivePlayer', this.selectedPlayer)
            },
            addNewPlayer() {
                this.$store.dispatch('addPlayer', this.newPlayer)
                this.newPlayer
            }
        },
        computed: {
            players() {
                return this.$store.state.players
            }
        }
    }
</script>

<style>
</style>