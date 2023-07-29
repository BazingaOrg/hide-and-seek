<template>
  <button
    :class="['my-btn', `my-btn-type-${type}`, `my-btn-shape-${shape}`, `my-btn-size-${size}`]"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'secondary',
    validator: (val) => ['primary', 'secondary', 'outline', 'dashed', 'text'].includes(val)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (val) => ['mini', 'small', 'medium', 'large'].includes(val)
  },
  shape: {
    type: String,
    default: 'square',
    validator: (val) => ['square', 'circle', 'round'].includes(val)
  }
})
</script>

<style scoped>
@import './button.css';
</style>
