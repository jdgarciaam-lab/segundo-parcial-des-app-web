<template>
  <div>
    <div class="dashboard-hero">
      <h1>GESTIÓN DE PRODUCTOS</h1>
      <p style="color: var(--color-muted);">Administra el inventario de Futtzap</p>
    </div>

    <button @click="mostrarFormulario = !mostrarFormulario" class="btn btn-accent mb-4">
      <i class="bi bi-plus-lg me-2"></i>{{ mostrarFormulario ? 'Cancelar' : 'Nuevo Producto' }}
    </button>

    <div v-if="mostrarFormulario" class="card mb-4" style="background: var(--color-surface); border: 1px solid var(--color-border);">
      <div class="card-body">
        <h5 class="card-title mb-3" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px;">
          {{ editando ? 'EDITAR PRODUCTO' : 'NUEVO PRODUCTO' }}
        </h5>
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Nombre</label>
            <input v-model="form.nombre" type="text" class="form-control form-control-futtzap" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Categoría</label>
            <input v-model="form.categoria" type="text" class="form-control form-control-futtzap" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Precio</label>
            <input v-model.number="form.precio" type="number" step="0.01" class="form-control form-control-futtzap" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Stock</label>
            <input v-model.number="form.stock" type="number" class="form-control form-control-futtzap" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Imagen URL</label>
            <input v-model="form.imagen" type="text" class="form-control form-control-futtzap" />
          </div>
          <div class="col-12">
            <label class="form-label">Descripción</label>
            <textarea v-model="form.descripcion" class="form-control form-control-futtzap" rows="2"></textarea>
          </div>
          <div class="col-12">
            <button @click="guardar" class="btn btn-accent me-2">
              <i class="bi" :class="editando ? 'bi-check-lg' : 'bi-plus-lg'"></i>
              {{ editando ? 'Actualizar' : 'Crear' }}
            </button>
            <button @click="mostrarFormulario = false" class="btn btn-outline-accent">Cancelar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-futtzap table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.id">
            <td>{{ producto.id }}</td>
            <td><img :src="producto.imagen" width="50" height="50" style="object-fit: cover; border-radius: 4px;" /></td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.categoria }}</td>
            <td style="color: var(--color-accent); font-weight: 600;">${{ producto.precio.toLocaleString() }}</td>
            <td>{{ producto.stock }}</td>
            <td>
              <button @click="editar(producto)" class="btn btn-sm btn-outline-accent me-1" title="Editar">
                <i class="bi bi-pencil"></i>
              </button>
              <button @click="eliminar(producto.id)" class="btn btn-sm btn-outline-danger" title="Eliminar">
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
      form: {
        nombre: '',
        categoria: '',
        precio: 0,
        stock: 0,
        imagen: '',
        descripcion: ''
      }
    }
  },
  methods: {
    cargarProductos() {
      this.productos = obtenerProductos()
    },
    resetForm() {
      this.form = { nombre: '', categoria: '', precio: 0, stock: 0, imagen: '', descripcion: '' }
      this.editando = false
      this.productoEditId = null
    },
    guardar() {
      if (!this.form.nombre || !this.form.categoria || this.form.precio <= 0) return
      if (this.editando) {
        actualizarProducto(this.productoEditId, this.form)
      } else {
        crearProducto(this.form)
      }
      this.mostrarFormulario = false
      this.resetForm()
      this.cargarProductos()
    },
    editar(producto) {
      this.form = { ...producto }
      this.editando = true
      this.productoEditId = producto.id
      this.mostrarFormulario = true
    },
    eliminar(id) {
      if (confirm('¿Eliminar este producto?')) {
        eliminarProducto(id)
        this.cargarProductos()
      }
    }
  },
  mounted() {
    this.cargarProductos()
  }
}
</script>