<template>
  <a-layout class="w-full h-full">
    <template v-if="$route.name !== 'login'">
      <Header />
      <Content class="relative">
        <router-view id="back-top" class="overflow-y-auto" />
        <a-back-top class="absolute" target-container="#back-top" />
      </Content>
      <Footer />
    </template>
    <template v-else>
      <router-view />
    </template>
  </a-layout>
</template>

<script setup>
import Header from '@/layout/header/index.vue'
import Content from '@/layout/content/index.vue'
import Footer from '@/layout/footer/index.vue'
</script>
