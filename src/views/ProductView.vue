<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="text-danger">Gestión de Productos</h2>
      <button @click="mostrarFormulario = !mostrarFormulario" class="btn btn-danger">
        <i class="bi bi-plus-lg me-1"></i> {{ mostrarFormulario ? 'Cancelar' : 'Nuevo Producto' }}
      </button>
    </div>

    <div v-if="mostrarFormulario" class="card border-secondary mb-4" :class="tema === 'dark' ? 'bg-dark' : 'bg-light'">
      <div class="card-body">
        <h5 :class="tema === 'dark' ? 'text-white' : 'text-dark'">{{ editando ? 'Editar Producto' : 'Nuevo Producto' }}</h5>
        <div class="row g-3 mt-2">
          <div class="col-md-6">
            <label class="form-label" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Nombre</label>
            <input v-model="form.nombre" class="form-control border-secondary" :class="tema === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'" />
          </div>
          <div class="col-md-6">
            <label class="form-label" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Categoría</label>
            <select v-model="form.categoria" class="form-select border-secondary" :class="tema === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'">
              <option value="Césped">Césped</option>
              <option value="Sintético">Sintético</option>
              <option value="Microfútbol">Microfútbol</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Precio</label>
            <input v-model.number="form.precio" type="number" class="form-control border-secondary" :class="tema === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'" />
          </div>
          <div class="col-md-4">
            <label class="form-label" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Stock</label>
            <input v-model.number="form.stock" type="number" class="form-control border-secondary" :class="tema === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'" />
          </div>
          <div class="col-md-4">
            <label class="form-label" :class="tema === 'dark' ? 'text-white' : 'text-dark'">Imagen URL</label>
            <input v-model="form.imagen" class="form-control border-secondary" :class="tema === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'" />
          </div>
          <div class="col-12">
            <button @click="guardar" class="btn btn-danger me-2">{{ editando ? 'Actualizar' : 'Crear' }}</button>
            <button @click="mostrarFormulario = false" class="btn btn-outline-secondary">Cancelar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-hover" :class="tema === 'dark' ? 'table-dark' : 'table-light'">
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
            <td class="text-danger fw-bold">${{ p.precio.toLocaleString() }}</td>
            <td>{{ p.stock }}</td>
            <td>
              <button @click="editar(p)" class="btn btn-sm btn-outline-warning me-1"><i class="bi bi-pencil"></i></button>
              <button @click="eliminar(p.id)" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
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
  props: {
    tema: { type: String, default: 'dark' }
  },
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
    cargar() { this.productos = obtenerProductos() },
    guardar() {
      if (!this.form.nombre || this.form.precio <= 0) return
      this.editando ? actualizarProducto(this.productoEditId, this.form) : crearProducto(this.form)
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
      if (confirm('¿Eliminar producto?')) { eliminarProducto(id); this.cargar() }
    },
    resetForm() {
      this.form = { nombre: '', categoria: 'Césped', precio: 0, stock: 0, imagen: '' }
      this.editando = false
      this.productoEditId = null
    }
  },
  mounted() { this.cargar() }
}
</script>