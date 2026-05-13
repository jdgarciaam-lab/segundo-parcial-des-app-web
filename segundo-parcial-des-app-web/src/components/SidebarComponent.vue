<template>
  <div class="sidebar-futtzap d-flex flex-column p-3" style="width: 220px;">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" to="/dashboard">
          <i class="bi bi-speedometer2 me-2"></i> Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/dashboard/products">
          <i class="bi bi-box-seam me-2"></i> Productos
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>