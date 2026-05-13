<template>
  <div>
    <!-- Hero -->
    <div class="bg-dark border border-success rounded p-5 text-center mb-4">
      <h1 class="text-success">⚽ FUTTZAP</h1>
      <p class="text-secondary fs-5">Zapatillas de fútbol para jugadores de élite</p>
    </div>

    <h3 class="text-white mb-4">Productos Destacados</h3>

    <!-- Grid de productos -->
    <div class="row">
      <div class="col-md-4 mb-4" v-for="producto in productos" :key="producto.id">
        <div class="card bg-dark border-secondary h-100">
          <img :src="producto.imagen" class="card-img-top p-3" :alt="producto.nombre" style="height: 220px; object-fit: contain; background: #111;" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-white">{{ producto.nombre }}</h5>
            <p class="text-secondary small">{{ producto.categoria }}</p>
            <p class="text-success fw-bold fs-5 mt-auto">${{ producto.precio.toLocaleString() }}</p>
            
            <!-- Cantidad -->
            <div class="d-flex align-items-center gap-2 mb-2">
              <button class="btn btn-outline-light btn-sm" @click="disminuir(producto.id)">-</button>
              <span class="text-white">{{ cantidad[producto.id] || 1 }}</span>
              <button class="btn btn-outline-light btn-sm" @click="aumentar(producto.id)">+</button>
            </div>

            <!-- Botón agregar (decorativo) -->
            <button class="btn btn-success w-100">
              <i class="bi bi-cart-plus me-2"></i>Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productosData from '@/data/products.json'

export default {
  name: 'HomeView',
  data() {
    return {
      productos: productosData,
      cantidad: {}
    }
  },
  methods: {
    aumentar(id) {
      if (!this.cantidad[id]) this.cantidad[id] = 1
      this.cantidad[id]++
    },
    disminuir(id) {
      if (!this.cantidad[id]) this.cantidad[id] = 1
      if (this.cantidad[id] > 1) this.cantidad[id]--
    }
  }
}
</script>