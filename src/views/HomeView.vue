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
import DashPendingView from "@/components/DashPendingView.vue";
import IdentityView from "@/components/IdentityView.vue";
import SelfieView from "@/components/SelfieView.vue";
import PersonalInfoView from "@/components/PersonalInfoView.vue";
import ContactInfoView from "@/components/ContactInfoView.vue";
import EmploymentInfoView from "@/components/EmploymentInfoView.vue";
import FinancialInfoView from "@/components/FinancialInfoView.vue";
import VerificationSuccessView from "@/components/VerificationSuccessView.vue";
import ReceivingView from "@/components/ReceivingView.vue";
import DueView from "@/components/DueView.vue";
import PaymentView from '../components/PaymentView.vue';
import DebitView from '../components/DebitView.vue';
import ApprovalView from '../components/ApprovalView.vue';
import ProfileView from '../components/ProfileView.vue';
import NotificationView from '../components/NotificationView.vue';

const currentView = ref(8);

const cashApplication = ref(false)

const processVerification = (noDocs) => {
  console.log(noDocs)
  if(noDocs!=undefined){
    currentView.value = 16
    cashApplication.value = true
  }else{
    currentView.value = 19
  }
}
</script>

<template>
  <main>
    <div class="bg-slate bg-opacity-50 h-screen flex w-[100vw]">
      <SignInLanding        v-if="currentView==1"  @signInView="currentView = 2" @signUpView="currentView = 3" />
      <SignInView           v-if="currentView==2" @landingView="currentView = 1" @forgotView="currentView = 5" />
      <SignUpView           v-if="currentView==3" @signInView="currentView = 2" @digitView="currentView = 4" />
      <DigitView            v-if="currentView==4"  @dashView="currentView = 8" />
      <ForgotView           v-if="currentView==5"  @signInView="currentView = 2" @confirmView="currentView = 7"/>
      <ResetView            v-if="currentView==6" />
      <ConfirmView          v-if="currentView==7" @signInView="currentView = 2"/>
      <DashView             v-if="currentView==8" @identityView="currentView = 9"  @profileView="currentView = 22" @notificationView="currentView = 23"/>
      <DashPendingView      v-if="currentView==21" @identityView="currentView = 9" @receivingView="currentView = 16" />
      <IdentityView         v-if="currentView==9" @dashView="currentView = 8" @selfieView="currentView = 10"/>
      <SelfieView           v-if="currentView==10" @identityView="currentView = 9" @personalView="currentView=11"/>
      <PersonalInfoView     v-if="currentView==11" @selfieView="currentView = 10" @contactView="currentView = 13"/>
      <ContactInfoView      v-if="currentView==12" @personalView="currentView = 11" @employmentView="currentView = 13"/>
      <EmploymentInfoView   v-if="currentView==13" @contactView="currentView = 11" @financialView="currentView = 14"/>
      <FinancialInfoView    v-if="currentView==14" @employmentView="currentView = 13" @verificationView="processVerification"/>
      <VerificationSuccessView v-if="currentView==15" @financialView="currentView = 14" @receivingView="currentView = 16"/>
      <ReceivingView        v-if="currentView==16" @verificationView="currentView = 15" @dueView="currentView = 17" :cashApplication="cashApplication"/>
      <DebitView            v-if="currentView==19" @pendingView="currentView = 20" @approvalView="currentView = 20"/>
      <DueView              v-if="currentView==17" @paymentView="currentView = 18" @profileView="currentView = 22" @notificationView="currentView = 23" />
      <PaymentView          v-if="currentView==18" />
      <ApprovalView         v-if="currentView==20" @employmentView="currentView = 13" @dashViewPending="currentView = 21" @dashView="currentView = 16"/>
      <ProfileView          v-if="currentView == 22" @profileView="currentView = 22" @notificationView="currentView = 23"/>
      <NotificationView     v-if="currentView == 23" @profileView="currentView = 22" @notificationView="currentView = 23"/>
    </div>
  </main>
</template>

<style></style>
