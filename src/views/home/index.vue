<template>
  <my-button
    v-for="(type, index) in ['primary', 'secondary', 'outline', 'dashed', 'text']"
    :key="index"
    :type="type"
    class="mx-2 my-2"
    >myButton</my-button
  >
</template>

<script setup>
import MyButton from '@/components/button/index.vue'
</script>
<style scoped></style>
