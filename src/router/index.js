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
      { path: 'categoria/cesped', component: HomeView, props: { categoria: 'Césped' } },
      { path: 'categoria/sintetico', component: HomeView, props: { categoria: 'Sintético' } },
      { path: 'categoria/microfutbol', component: HomeView, props: { categoria: 'Microfútbol' } },
      { path: 'products', name: 'Products', component: ProductView }
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