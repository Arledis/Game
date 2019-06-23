<template lang="html">
  <div v-if="film">
    <h3>{{film.title}}</h3>
    <p>Description: {{film.description}}</p>
    <p>Ditector: {{film.director}}</p>
    <p>Producer: {{film.producer}}</p>
    <p>Release: {{film.release_date}}</p>
    <img class="lrg-flag" :src="https://exclaim.ca//images/castle_in_the_sky.jpg" />
  </div>
</template>

<script>
export default {
  name: 'film-detail',
  props: ['film']
}
</script>

<style lang="css" scoped>
  .lrg-flag {
  height: 300px
}
</style>
