import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard.vue';
import List from '@/components/List.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
});
