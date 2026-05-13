<template>
  <div>
    <h3 class="text-danger mb-4">{{ categoria || 'Todos los Productos' }}</h3>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="p in productos" :key="p.id">
        <div class="card bg-dark border-secondary h-100">
          <img :src="p.imagen" class="card-img-top p-3" :alt="p.nombre" style="height: 200px; width: 100%; object-fit: contain; background: #111;" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-white">{{ p.nombre }}</h5>
            <p class="text-secondary small">{{ p.categoria }}</p>
            <p class="text-danger fw-bold fs-5 mt-auto">${{ p.precio.toLocaleString() }}</p>
            <div class="d-flex align-items-center gap-2 mb-2">
              <button class="btn btn-outline-light btn-sm" @click="disminuir(p.id)">-</button>
              <span class="text-white">{{ cantidad[p.id] || 1 }}</span>
              <button class="btn btn-outline-light btn-sm" @click="aumentar(p.id)">+</button>
            </div>
            <button class="btn btn-danger w-100">
              <i class="bi bi-cart-plus me-2"></i>Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerProductos, obtenerProductosPorCategoria } from '@/services/productService'

export default {
  name: 'HomeView',
  props: {
    categoria: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      productos: [],
      cantidad: {}
    }
  },
  methods: {
    cargar() {
      this.productos = this.categoria
        ? obtenerProductosPorCategoria(this.categoria)
        : obtenerProductos()
    },
    aumentar(id) {
      if (!this.cantidad[id]) this.cantidad[id] = 1
      this.cantidad[id]++
    },
    disminuir(id) {
      if (!this.cantidad[id]) this.cantidad[id] = 1
      if (this.cantidad[id] > 1) this.cantidad[id]--
    }
  },
  mounted() {
    this.cargar()
  },
  watch: {
    categoria() {
      this.cargar()
    }
  }
}
</script>