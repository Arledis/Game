<template lang="html">
  <div>
    <ul>
      <film-item v-for="(film, index) in films" v-bind:film="film" :watchingList="watchingList" v-bind:key="index"></film-item>
    </ul>
  </div>
</template>

<script>
import FilmItem from './FilmItem.vue'
export default {
  name: 'films-list',
  props: ['films', 'watchingList'],
  components: {
    "film-item": FilmItem
  }
}
</script>

<style lang="css" scoped>
</style>
