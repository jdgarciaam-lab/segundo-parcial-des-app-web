<template>
  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    <NavbarComponent />
    <div class="d-flex" style="flex: 1; margin-top: 56px;">
      <SidebarComponent />
      <main class="main-content flex-grow-1 p-4">
        <router-view />
      </main>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>