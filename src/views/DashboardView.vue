<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <nav class="navbar navbar-expand" :class="tema === 'dark' ? 'bg-dark border-bottom border-danger' : 'bg-light border-bottom border-danger'">
      <div class="container-fluid">
        <router-link to="/dashboard" class="navbar-brand">
          <span class="fw-bold fs-4" :class="tema === 'dark' ? 'text-danger' : 'text-danger'">FUTTZAP</span>
        </router-link>
        <div class="navbar-nav ms-auto d-flex align-items-center gap-2">
          <button @click="$emit('cambiar-tema')" class="btn btn-sm" :class="tema === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'">
            <i :class="tema === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
          </button>
          <router-link to="/dashboard" class="nav-link" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Inicio</router-link>
          <router-link to="/dashboard/products" class="nav-link" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Administrar</router-link>
          <a href="#" @click="logout" class="nav-link text-danger">Salir</a>
        </div>
      </div>
    </nav>

    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <nav :class="tema === 'dark' ? 'bg-dark border-end border-secondary' : 'bg-light border-end border-secondary'" class="p-3" style="width: 220px;">
        <h6 class="text-danger mb-3">CATEGORÍAS</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Todos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/categoria/cesped" class="nav-link" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Césped</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/categoria/sintetico" class="nav-link" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Sintético</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/categoria/microfutbol" class="nav-link" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Microfútbol</router-link>
          </li>
        </ul>
      </nav>

      <!-- Contenido -->
      <main class="container py-4 flex-grow-1">
        <router-view :tema="tema" />
      </main>
    </div>

    <!-- Footer -->
    <footer :class="tema === 'dark' ? 'bg-dark border-top border-secondary text-secondary' : 'bg-light border-top border-secondary text-secondary'" class="text-center py-3">
      <small>&copy; 2025 Futtzap - Proyecto educativo</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  props: ['tema'],
  emits: ['cambiar-tema'],
  methods: {
    logout() {
      localStorage.removeItem('usuarioActivo')
      this.$router.push('/login')
    }
  }
}
</script>