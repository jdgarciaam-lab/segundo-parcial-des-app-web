import productosIniciales from '../data/products.json'

const STORAGE_KEY = 'futtzap_productos'

// Inicializar LocalStorage con datos del JSON
export function inicializarProductos() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productosIniciales))
  }
}

// Obtener todos los productos
export function obtenerProductos() {
  inicializarProductos()
  return JSON.parse(localStorage.getItem(STORAGE_KEY))
}

// Obtener producto por ID
export function obtenerProductoPorId(id) {
  const productos = obtenerProductos()
  return productos.find(p => p.id === id)
}

// Crear producto
export function crearProducto(producto) {
  const productos = obtenerProductos()
  const nuevoId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1
  const nuevoProducto = { ...producto, id: nuevoId }
  productos.push(nuevoProducto)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos))
  return nuevoProducto
}

// Actualizar producto
export function actualizarProducto(id, datos) {
  const productos = obtenerProductos()
  const index = productos.findIndex(p => p.id === id)
  if (index !== -1) {
    productos[index] = { ...productos[index], ...datos }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos))
    return productos[index]
  }
  return null
}

// Eliminar producto
export function eliminarProducto(id) {
  const productos = obtenerProductos()
  const filtrados = productos.filter(p => p.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtrados))
  return filtrados
}