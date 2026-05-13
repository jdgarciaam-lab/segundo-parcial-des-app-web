import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: LoginView },
  {
    path: '/dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: HomeView },
      { path: 'products', component: ProductView },
      { path: 'products/cesped', component: ProductView, props: { categoria: 'Césped' } },
      { path: 'products/sintetico', component: ProductView, props: { categoria: 'Sintético' } },
      { path: 'products/microfutbol', component: ProductView, props: { categoria: 'Microfútbol' } }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const usuario = localStorage.getItem('usuarioActivo')
  if (to.meta.requiresAuth && !usuario) {
    next('/login')
  } else {
    next()
  }
})

export default router