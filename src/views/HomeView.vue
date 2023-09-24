<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import SignInLanding from "@/components/SignInLanding.vue";
import SignInView from "@/components/SignInView.vue";
import RegisterView from "@/components/RegisterView.vue";
import DigitView from "@/components/DigitView.vue";
import ForgotView from "@/components/ForgotView.vue";
import ResetView from "@/components/ResetView.vue";
import ConfirmView from "@/components/ConfirmView.vue";

const currentView = ref(7);


</script>

<template>
  <main>
    <div class="bg-slate bg-opacity-50 h-screen flex w-screen">
      <SignInLanding v-if="currentView==1" />
      <SignInView v-if="currentView==2" />
      <RegisterView v-if="currentView==3" />
      <DigitView v-if="currentView==4" />
      <ForgotView v-if="currentView==5" />
      <ResetView v-if="currentView==6" />
      <ConfirmView v-if="currentView==7" />
    </div>

  </main>
</template>

<style></style>
