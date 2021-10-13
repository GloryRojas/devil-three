import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
     {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/Index')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About/Index.vue')
      }
]
const router = new VueRouter({
  routes
})

export default router