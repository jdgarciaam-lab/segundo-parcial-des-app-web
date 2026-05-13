<template>
  <nav class="navbar navbar-expand-lg navbar-futtzap fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/dashboard">
        ⚽ FUTTZAP
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/products">Productos</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    logout() {
      localStorage.removeItem('usuarioActivo')
      this.$router.push('/login')
    }
  }
}
</script>