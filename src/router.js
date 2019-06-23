import Vue from 'vue';
import Router from 'vue-router';
import Film from '@/views/Film'
import WatchingList from '@/views/WatchingList'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/film',
      name: 'film',
      component: Film
    },
    {
      path: '/watchingList',
      name: 'watchingList',
      component: WatchingList
    }

  ]
})
export default router;
