import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import Beranda from '../views/beranda.vue';
import Tipe36 from '../views/tipe36.vue';
import Tipe45 from '../views/tipe45.vue';
import Tipe50 from '../views/tipe50.vue';
import Edit from '../views/edit.vue';
import Transaksi from '../views/transaksi.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/beranda',
      name: 'beranda',
      component: Beranda
    },
    {
      path: '/tipe36',
      name: 'tipe36',
      component: Tipe36
    },
    {
      path: '/tipe45',
      name: 'tipe45',
      component: Tipe45
    },
    {
      path: '/tipe50',
      name: 'tipe50',
      component: Tipe50
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/transaksi',
      name: 'transaksi',
      component: Transaksi
    }
  ]
})

export default router
