<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 bg-dark">
    <div class="card bg-dark border-secondary p-4" style="max-width: 400px; width: 100%;">
      
      <div class="text-center mb-4">
        <h1 class="text-danger fw-bold">FUTTZAP</h1>
        <p class="text-secondary">Tienda de zapatillas de fútbol</p>
      </div>

      <h4 class="text-white mb-3">Iniciar Sesión</h4>

      <div v-if="error" class="alert alert-danger">{{ error }}</div>

      <div class="mb-3">
        <label class="form-label text-white">Usuario</label>
        <input v-model="username" type="text" class="form-control bg-dark text-white border-secondary" @keyup.enter="login" />
      </div>

      <div class="mb-3">
        <label class="form-label text-white">Contraseña</label>
        <input v-model="password" type="password" class="form-control bg-dark text-white border-secondary" @keyup.enter="login" />
      </div>

      <button @click="login" class="btn btn-danger w-100 mb-3">ENTRAR</button>

      <p class="text-center text-secondary small">
        ⚠️ Proyecto educativo - No usar datos reales
      </p>

    </div>
  </div>
</template>

<script>
import usuariosData from '@/data/usuarios.json'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      this.error = ''
      if (!this.username || !this.password) {
        this.error = 'Completa todos los campos'
        return
      }
      const usuario = usuariosData.find(u => u.username === this.username && u.password === this.password)
      if (usuario) {
        localStorage.setItem('usuarioActivo', JSON.stringify(usuario))
        this.$router.push('/dashboard')
      } else {
        this.error = 'Usuario o contraseña incorrectos'
      }
    }
  }
}
</script>