<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import WOW from 'wow.js';

onMounted(() => {
  new WOW().init();
});
// check
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>