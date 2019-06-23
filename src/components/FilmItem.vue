<template lang="html">
  <div class="">
    <h2>{{film.title}}</h2>
    <button v-if="!inWatchingList" v-on:click="handleButton" type="button" name="button">Add to Watch List</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: 'film-item',
  props: ['film', 'watchingList'],
  computed: {
    inWatchingList: function(){
      return this.watchingList.includes(this.film)
    }
  },
    methods: {
      handleButton: function(){
        eventBus.$emit('film-selected', this.film)
      }
    }
}
</script>

<style lang="css" scoped>
</style>
