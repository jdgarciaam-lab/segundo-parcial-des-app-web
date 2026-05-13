<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="text-success">Gestión de Productos</h2>
      <button @click="mostrarFormulario = !mostrarFormulario" class="btn btn-success">
        <i class="bi bi-plus-lg me-1"></i> {{ mostrarFormulario ? 'Cancelar' : 'Nuevo Producto' }}
      </button>
    </div>

    <!-- Formulario -->
    <div v-if="mostrarFormulario" class="card bg-dark border-secondary mb-4">
      <div class="card-body">
        <h5 class="text-white">{{ editando ? 'Editar Producto' : 'Nuevo Producto' }}</h5>
        <div class="row g-3 mt-2">
          <div class="col-md-6">
            <label class="form-label text-white">Nombre</label>
            <input v-model="form.nombre" class="form-control bg-dark text-white border-secondary" />
          </div>
          <div class="col-md-6">
            <label class="form-label text-white">Categoría</label>
            <select v-model="form.categoria" class="form-select bg-dark text-white border-secondary">
              <option value="Césped">Césped</option>
              <option value="Sintético">Sintético</option>
              <option value="Microfútbol">Microfútbol</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label text-white">Precio</label>
            <input v-model.number="form.precio" type="number" class="form-control bg-dark text-white border-secondary" />
          </div>
          <div class="col-md-4">
            <label class="form-label text-white">Stock</label>
            <input v-model.number="form.stock" type="number" class="form-control bg-dark text-white border-secondary" />
          </div>
          <div class="col-md-4">
            <label class="form-label text-white">Imagen URL</label>
            <input v-model="form.imagen" class="form-control bg-dark text-white border-secondary" />
          </div>
          <div class="col-12">
            <button @click="guardar" class="btn btn-success me-2">
              {{ editando ? 'Actualizar' : 'Crear' }}
            </button>
            <button @click="mostrarFormulario = false" class="btn btn-outline-light">Cancelar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla -->
    <div class="table-responsive">
      <table class="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in productos" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.nombre }}</td>
            <td>{{ p.categoria }}</td>
            <td class="text-success fw-bold">${{ p.precio.toLocaleString() }}</td>
            <td>{{ p.stock }}</td>
            <td>
              <button @click="editar(p)" class="btn btn-sm btn-outline-warning me-1">
                <i class="bi bi-pencil"></i>
              </button>
              <button @click="eliminar(p.id)" class="btn btn-sm btn-outline-danger">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from '@/services/productService'

export default {
  name: 'ProductView',
  data() {
    return {
      productos: [],
      mostrarFormulario: false,
      editando: false,
      productoEditId: null,
      form: { nombre: '', categoria: 'Césped', precio: 0, stock: 0, imagen: '' }
    }
  },
  methods: {
    cargar() {
      this.productos = obtenerProductos()
    },
    guardar() {
      if (!this.form.nombre || this.form.precio <= 0) return
      if (this.editando) {
        actualizarProducto(this.productoEditId, this.form)
      } else {
        crearProducto(this.form)
      }
      this.mostrarFormulario = false
      this.resetForm()
      this.cargar()
    },
    editar(p) {
      this.form = { ...p }
      this.editando = true
      this.productoEditId = p.id
      this.mostrarFormulario = true
    },
    eliminar(id) {
      if (confirm('¿Eliminar producto?')) {
        eliminarProducto(id)
        this.cargar()
      }
    },
    resetForm() {
      this.form = { nombre: '', categoria: 'Césped', precio: 0, stock: 0, imagen: '' }
      this.editando = false
      this.productoEditId = null
    }
  },
  mounted() {
    this.cargar()
  }
}
</script>