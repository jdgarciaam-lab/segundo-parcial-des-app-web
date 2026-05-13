<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100" style="background: var(--color-bg);">
    <div class="login-container" style="max-width: 420px; width: 100%; padding: 24px;">
      <div class="text-center mb-4">
        <span style="font-size: 48px;">⚽</span>
        <h1 style="font-family: "Bebas Neue", sans-serif; font-size: 3.5rem; letter-spacing: 8px; color: var(--color-accent);">FUTTZAP</h1>
        <p style="color: var(--color-muted);">Tienda deportiva especializada</p>
      </div>
      <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 36px 32px;">
        <h2 style="font-family: "Bebas Neue", sans-serif; letter-spacing: 4px; margin-bottom: 28px;">INICIAR SESIÓN</h2>
        <div v-if="error" class="alert alert-error mb-3">{{ error }}</div>
        <div class="mb-3">
          <label class="form-label text-uppercase small fw-bold" style="color: var(--color-muted);">Usuario</label>
          <input v-model="username" type="text" class="form-control form-control-futtzap" placeholder="Ingresa tu usuario" @keyup.enter="login" />
        </div>
        <div class="mb-3">
          <label class="form-label text-uppercase small fw-bold" style="color: var(--color-muted);">Contraseña</label>
          <input v-model="password" type="password" class="form-control form-control-futtzap" placeholder="Ingresa tu contraseña" @keyup.enter="login" />
        </div>
        <button @click="login" class="btn btn-accent w-100 py-2 mb-3" style="font-family: "Bebas Neue", sans-serif; font-size: 1.2rem; letter-spacing: 3px;">ENTRAR</button>
        <p class="text-center small" style="color: var(--color-muted);">⚠️ Proyecto educativo - No usar datos reales</p>
      </div>
    </div>
  </div>
</template>

<script>
import usuariosData from "@/data/usuarios.json"

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      error: ""
    }
  },
  methods: {
    login() {
      this.error = ""
      if (!this.username || !this.password) {
        this.error = "Completa todos los campos"
        return
      }
      const usuario = usuariosData.find(u => u.username === this.username && u.password === this.password)
      if (usuario) {
        localStorage.setItem("usuarioActivo", JSON.stringify(usuario))
        this.$router.push("/dashboard")
      } else {
        this.error = "Usuario o contraseña incorrectos"
      }
    }
  }
}
</script>
