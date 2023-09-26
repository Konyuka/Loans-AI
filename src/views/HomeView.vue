<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import SignInLanding from "@/components/SignInLanding.vue";
import SignInView from "@/components/SignInView.vue";
import SignUpView from "@/components/SignUpView.vue";
import DigitView from "@/components/DigitView.vue";
import ForgotView from "@/components/ForgotView.vue";
import ResetView from "@/components/ResetView.vue";
import ConfirmView from "@/components/ConfirmView.vue";
import DashView from "@/components/DashView.vue";
import IdentityView from "@/components/IdentityView.vue";
import SelfieView from "@/components/SelfieView.vue";
import PersonalInfoView from "@/components/PersonalInfoView.vue";
import ContactInfoView from "@/components/ContactInfoView.vue";
import EmploymentInfoView from "@/components/EmploymentInfoView.vue";
import FinancialInfoView from "@/components/FinancialInfoView.vue";
import VerificationSuccessView from "@/components/VerificationSuccessView.vue";
import ReceivingView from "@/components/ReceivingView.vue";
import DueView from "@/components/DueView.vue";

const currentView = ref(17);


</script>

<template>
  <main>
    <div class="bg-slate bg-opacity-50 h-screen flex w-screen">
      <SignInLanding        v-if="currentView==1"  @signInView="currentView = 2" @signUpView="currentView = 3" />
      <SignInView           v-if="currentView==2" @landingView="currentView = 1" @forgotView="currentView = 5" />
      <SignUpView           v-if="currentView==3" @signInView="currentView = 2" @digitView="currentView = 4" />
      <DigitView            v-if="currentView==4" />
      <ForgotView           v-if="currentView==5"  @signInView="currentView = 2" @confirmView="currentView = 7"/>
      <ResetView            v-if="currentView==6" />
      <ConfirmView          v-if="currentView==7" @signInView="currentView = 2"/>
      <DashView             v-if="currentView==8" />
      <IdentityView         v-if="currentView==9" />
      <SelfieView           v-if="currentView==10" />
      <PersonalInfoView     v-if="currentView==11" />
      <ContactInfoView      v-if="currentView==12" />
      <EmploymentInfoView   v-if="currentView==13" />
      <FinancialInfoView    v-if="currentView==14" />
   <VerificationSuccessView v-if="currentView==15" />
      <ReceivingView        v-if="currentView==16" />
      <DueView              v-if="currentView==17" />
    </div>

  </main>
</template>

<style></style>
