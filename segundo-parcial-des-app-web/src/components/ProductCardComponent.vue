<template>
  <div class="card product-card h-100">
    <img :src="product.imagen" class="card-img-top" :alt="product.nombre" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.nombre }}</h5>
      <p class="card-text small">{{ product.descripcion }}</p>
      <div class="mt-auto">
        <span class="price">${{ product.precio.toFixed(2) }}</span>
        <span class="badge bg-secondary ms-2">Stock: {{ product.stock }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>