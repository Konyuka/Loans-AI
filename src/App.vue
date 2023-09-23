<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import WOW from 'wow.js';

onMounted(() => {
  new WOW().init();
});

</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>