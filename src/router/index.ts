import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PaginaPrincipala from '../views/PaginaPrincipala.vue'
import Cautare from '../views/Cautare.vue'
import PaginaProdus from '../views/PaginaProdus.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Pagina principala',
    component: PaginaPrincipala,
  },
  {
    path: '/cautare/:nrPagina/:ceAmCautat',
    name: 'Cautare',
    component: Cautare,
  },
  {
    path: '/produs/:id',
    name: 'Produs',
    component: PaginaProdus,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
