<template>
  <div id="app">
    <div class="">
      <nav>
        <ul>
          <li><router-link :to="{ name: 'film'}">Films</router-link></li>
            <li><router-link :to="{ name: 'watchingList'}">Watch List</router-link></li>
        </ul>
      </nav>

    </div>
    <router-view :films="films" :watchingList="watchingList" id="view"></router-view>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import FilmsList from './components/FilmsList.vue'

export default {
  name: 'app',
  data(){
    return {
      films: [],
      watchingList: []
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => this.films = films)

    eventBus.$on('film-selected', (film) => //call back
    {this.watchingList.push(film)
     })
  },
  components: {
    "films-list": FilmsList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-container {
  display: flex;
  justify-content: space-between;
  color: white;

}
img {
  width: 300;
  height: 128;
}

.button {
  color: #fff;
  background: #000;
  padding: 10px 40px;
  text-decoration: none;
  transition: background .5s;
}
.button:hover {
  background-color: #ddd;
  color: white;
}

body{
  /* background-image: url('https://i.kinja-img.com/gawker-media/image/upload/s--Ivpp4Gk5--/c_scale,f_auto,fl_progressive,q_80,w_800/p7qnblflqnxcqd4cuyjn.jpg');
  background-image: 100%; */
  color: blue;
}
h1 {
  text-align: center;
  color: red;


}
</style>
