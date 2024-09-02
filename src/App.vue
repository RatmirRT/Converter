<template>
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import HeaderComponent from '@/components/headerComponent.vue'
</script>

<style>
:root {
  --gray: rgba(17, 17, 17, 0.48);
  --black: rgb(17, 17, 17);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  text-decoration: none;
  color: var(--black)
}

.container {
  max-width: 800px;
  margin: 0 auto;
} 

h2 {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
}

</style>
