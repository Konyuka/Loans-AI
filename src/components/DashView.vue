<script setup>
import { ref, computed } from "vue";
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
    return Math.round(0.03 * amount.value); 
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

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-5 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
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

                        <div class="relative">
                            <Slider v-model="amount" :min="20" :max="200" :step="10" class="slider-red" />

                            <div class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">20 OMR</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">100 OMR</span></div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">200 OMR</span>
                                </div>
                            </div>
                        </div>

                        <div class="relative">
                            <Slider v-model="duration" :min="1" :max="3" :step="1" class="slider-red" />

                            <div class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">1 Month</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">2 Months</span></div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">3 Months</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="grid grid-cols-2 gap-1 pt-5">

                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Amount</p>
                            <p class="self-center text-primary font-bold">{{ amount }} OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Term</p>
                            <p class="self-center text-primary font-bold">{{ duration }} Month(s)</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Monthly Interest</p>
                            <p class="self-center text-primary font-bold">{{ acrruedInterest }} OMR ({{ interestRate }}%)</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Total Interest</p>
                            <p class="self-center text-primary font-bold">{{ totalAcrruedInterest }} OM ({{ totalInterestRate }}%)</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Processing Fee(3%)</p>
                            <p class="self-center text-primary font-bold">{{ processingFee }} OMR</p>
                        </div>

                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Late payment fee</p>
                            <p class="self-center text-primary font-bold text-center text-sm">2% of amount due<br> weekly</p>
                        </div>


                    </div>

                    <div class="flex items-center py-5">
                        <input id="remember-me" name="remember-me" type="checkbox" required
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ">
                        <label for="remember-me" class="ml-3 block text-xs leading-6 text-gray-900">I accept that I have
                            read our <a href="#" class="text-primary font-semibold hover:cursor-pointer">terms &
                                conditions</a>
                        </label>
                    </div>



                    <div class="flex flex-col place-content-center mb-5">
                        <button @click="requestLoan()" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Get instant loan
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
