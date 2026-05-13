<template>
  <div :data-bs-theme="tema" class="min-vh-100" :class="tema === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'">
    <router-view @cambiar-tema="toggleTema" :tema="tema" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tema: 'dark'
    }
  },
  methods: {
    toggleTema() {
      this.tema = this.tema === 'dark' ? 'light' : 'dark'
    }
  }
}
</script>