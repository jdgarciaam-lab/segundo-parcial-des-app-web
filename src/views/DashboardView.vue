<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <nav class="navbar navbar-expand bg-dark border-bottom border-danger">
      <div class="container-fluid">
        <router-link to="/dashboard" class="navbar-brand">
          <span class="text-danger fw-bold fs-4">FUTTZAP</span>
        </router-link>
        <div class="navbar-nav ms-auto">
          <router-link to="/dashboard" class="nav-link text-white">Inicio</router-link>
          <router-link to="/dashboard/products" class="nav-link text-white">Administrar</router-link>
          <a href="#" @click="logout" class="nav-link text-danger">Salir</a>
        </div>
      </div>
    </nav>

    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <nav class="bg-dark border-end border-secondary p-3" style="width: 220px;">
        <h6 class="text-danger mb-3">CATEGORÍAS</h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link text-white">Todos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/categoria/cesped" class="nav-link text-white">Césped</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/categoria/sintetico" class="nav-link text-white">Sintético</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/categoria/microfutbol" class="nav-link text-white">Microfútbol</router-link>
          </li>
        </ul>
      </nav>

      <!-- Contenido -->
      <main class="container py-4 flex-grow-1">
        <router-view />
      </main>
    </div>

    <!-- Footer -->
    <footer class="bg-dark border-top border-secondary text-center text-secondary py-3">
      <small>&copy; 2025 Futtzap - Proyecto educativo</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  methods: {
    logout() {
      localStorage.removeItem('usuarioActivo')
      this.$router.push('/login')
    }
  }
}
</script>
