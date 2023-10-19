<script setup>
import { ref, computed, onMounted } from "vue";
import Slider from '@vueform/slider'
import Footer from "@/components/Footer.vue";
import Nav from "./Nav.vue";

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
                    <Nav @notificationView="$emit('notificationView')" @profileView="$emit('profileView')" />


                    <div class="grid grid-cols-1 gap-20 my-10 mx-2">

                        <div class="relative">
                            <h1 class="mb-8 tracking-widest text-xl font-medium text-center">Loan Amount</h1>
                            <Slider v-model="amount" :min="20" :max="200" :step="10" class="slider-red" />

                            <div class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">20 OMR</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">100 OMR</span></div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">200 OMR</span>
                                </div>
                            </div>
                        </div>

                        <div class="relative">
                            <h1 class="mb-8 tracking-widest text-xl font-medium text-center">Loan Duration</h1>
                            <Slider v-model="duration" :min="1" :max="3" :step="1" class="slider-red" />

                            <div class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">1 Month</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">2 Months</span></div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">3 Months</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="pt-10">
                        <h1 class="mb-8 tracking-widest text-xl font-medium text-center">Loan Summary</h1>
                        <div class="grid grid-cols-2 gap-1">
    
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium text-sm text-primary-100">Loan Amount</p>
                                <p class="self-center text-primary font-bold">{{ amount }} OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium text-sm text-primary-100">Loan Term</p>
                                <p class="self-center text-primary font-bold">{{ duration }} Month(s)</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium text-sm text-primary-100">Monthly Interest</p>
                                <p class="self-center text-primary font-bold">{{ acrruedInterest }} OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium text-sm text-primary-100">Total Interest</p>
                                <p class="self-center text-primary font-bold">{{ totalAcrruedInterest }} OMR</p>
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
                    </div>

                    

                    <div class="flex items-center py-5">
                        <input id="remember-me" name="remember-me" type="checkbox" required
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ">
                        <label for="remember-me" class="ml-3 block text-xs leading-6 text-gray-900">I accept that I have
                            read our <a href="#" class="text-primary font-semibold hover:cursor-pointer">terms &
                                conditions</a>
                        </label>
                    </div>



                    <div class="flex flex-col place-content-center mb-14">
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
