<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import SignInLanding from "@/components/SignInLanding.vue";
import SignInView from "@/components/SignInView.vue";
import RegisterView from "@/components/RegisterView.vue";

const currentView = ref(3);


</script>

<template>
  <main>
    <div class="bg-slate bg-opacity-50 h-screen flex w-screen">
      <SignInLanding v-if="currentView==1" />
      <SignInView v-if="currentView==2" />
      <RegisterView v-if="currentView==3" />
    </div>

  </main>
</template>

<style></style>
