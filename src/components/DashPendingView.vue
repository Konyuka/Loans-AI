<script setup>
import { ref, computed, onMounted } from "vue";
import Slider from '@vueform/slider'
import Footer from "@/components/Footer.vue";


import { useLoanData } from '@/stores/loanData'
const loanData = useLoanData()

const emit = defineEmits([
    'identityView'
]);

const amount = ref(20);
const duration = ref(1);

const totalInterestRate = computed(() => {
    return duration.value * 3;
});

const interestRate = computed(() => {
    return 3;
});

const totalAcrruedInterest = computed(() => {
    return acrruedInterest.value * duration.value
});

const acrruedInterest = computed(() => {
    return Math.round(amount.value * (interestRate.value / 100));
});

const processingFee = computed(() => {
    return Math.round(0.015 * amount.value); 
});

const receivingAmount = computed(() => {
    return (amount.value - processingFee.value);
});


const requestLoan = () => {
    const loanDetails = {
        amount: amount.value,
        term: duration.value,
        interestRate: interestRate.value,
        totalInterestRate: totalInterestRate.value,
        acrruedInterest: acrruedInterest.value,
        totalAcrruedInterest: totalAcrruedInterest.value,
        processingFee: processingFee.value,
        receivingAmount: receivingAmount.value
    }

    loanData.updateLoanData(loanDetails);
    emit('identityView')

};

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-5 lg:px-8 w-screen">


            <div class="min-h-screen flex place-content-center w-full">
                <div class="">
                    <div data-wow-duration="1s" class="w-[91vw] flex flex-row justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Simple Pay</span>
                            <img class="h-10 w-auto" src="@/assets/img/logo.png" alt="">
                        </a>
                        <div class="">
                            <i class="fas fa-bell fa-xl text-primary mr-7"></i>
                            <i class="fas fa-user fa-xl text-primary"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-20 my-10 mx-2">
                        <div class="min-h-[20vh] rounded-lg bg-primary">
                            <div class="h-8 border-b-white border-b-2">
                                <div class="flex justify-between text-white mx-5 mt-2 text-sm">
                                    <p>Loan application date:</p>
                                    <p>30th Sept 2023</p>
                                </div>
                            </div>

                            <div class="flex justify-center mt-5 text-white">
                                Loan application Status
                            </div>
                            <div class="flex justify-center mt-5 text-white text-xs mx-5 text-center mb-4">
                                Your loan application is currently being reviewed by our team 
                            </div>


                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-1">

                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium text-sm text-primary-100">Loan Requested</p>
                            <p class="self-center text-primary font-bold">{{ amount }} OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium text-sm text-primary-100">Loan Term</p>
                            <p class="self-center text-primary font-bold">{{ duration }} Month(s)</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium text-sm text-primary-100">Monthly Interest</p>
                            <p class="self-center text-primary font-bold">{{ acrruedInterest }} OMR ({{ interestRate }}%)</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium text-sm text-primary-100">Total Interest</p>
                            <p class="self-center text-primary font-bold">{{ totalAcrruedInterest }} OMR ({{ totalInterestRate }}%)</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium text-sm text-primary-100">Processing Fee(1.5%)</p>
                            <p class="self-center text-primary font-bold">{{ processingFee }} OMR</p>
                        </div>

                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium text-sm text-gray">Late payment fee</p>
                            <p class="self-center text-primary font-bold text-center text-sm">2% of amount due<br> weekly</p>
                        </div>
                        
                        <div class="col-span-2 place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium text-sm text-gray">You will receive</p>
                            <p class="self-center text-primary font-bold text-center text-lg">{{ (amount - processingFee) }} OMR</p>
                        </div>


                    </div>


                    <div class="flex flex-col place-content-center mb-14">
                        <button disabled @click="requestLoan()" type="button"
                            class="w-full rounded-2xl bg-gray px-3.5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Receive Funds
                            </span>

                        </button>

                        <button @click="$emit('receivingView')" type="button"
                            class="mt-2 w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Receive Funds
                            </span>

                        </button>
                    </div>

                </div>
            </div>



        </div>

        <Footer class="fixed bottom-0"></Footer>


    </main>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.slider-red {
    --slider-connect-bg: #1f3357;
    --slider-tooltip-bg: #1f3357;
    --slider-handle-ring-color: black;
    --slider-height: 10px;
    --slider-radius: 9999px;
}
</style>
