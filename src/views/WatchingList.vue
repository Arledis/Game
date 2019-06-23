<template lang="html">
  <div id="">
    <films-list :films="watchingList" :watchingList="watchingList"></films-list>
  </div>

</template>

<script>
import FilmsList from '@/components/FilmsList.vue'
export default {
  props: ['watchingList'],
  components: {
    'films-list': FilmsList
  }
}
</script>

<style lang="css" scoped>
</style>
