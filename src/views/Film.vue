<template lang="html">
  <div id="">
    <films-list :films="films" :watchingList="watchingList"></films-list>

  </div>
</template>

<script>
import FilmsList from '../components/FilmsList.vue'
export default {
  name: 'film',
  props: ['films', 'watchingList'],
  components: {
    "films-list": FilmsList
  }
}
</script>

<style lang="css" scoped>
</style>
