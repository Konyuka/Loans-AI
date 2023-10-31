<script setup>
import { ref, computed, onMounted, watch } from "vue";
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
const loanPurpose = ref(null);

const loanType = ref('individual');
const loanTypeModal = ref(false);
const choosenSmeLoan = ref(null);
const loanUseModal = ref(false);

watch(loanType, (newX) => {
    if (newX == 'sme') {
        loanTypeModal.value = true
    }
});

const loanSubtype = ref(null);
watch(loanSubtype, (newX) => {
    choosenSmeLoan.value = newX;
    loanTypeModal.value = false
});

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

const requestLoan2 = () => {
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

    loanUseModal.value = true;

};

const setTab = (tab) => {
    if(tab=='sme'){
        loanTypeModal.value = true
    }
    loanType.value = tab
}

const setLoanSubtype = (loan) => {
    loanSubtype.value = loan
}

const choosePurpose = () => {
    loanUseModal.value = false;
    emit('SMEView')

}

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

                <div class="mt-5 text-center">
                    <span class="isolate inline-flex rounded-md shadow-sm">

                        <button type="button" @click="setTab('individual')"
                            :class="[loanType == 'individual' ? 'bg-primary text-white' : 'bg-white text-gray-900']"
                            class="relative inline-flex items-center rounded-l-md px-5 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                            Personal Loans
                        </button>

                        <button type="button" @click="setTab('sme')"
                            :class="[loanType == 'sme' ? 'bg-primary text-white' : 'bg-white text-gray-900']"
                            class="relative -ml-px inline-flex items-center rounded-r-md px-5 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                            SME Loans
                        </button>

                    </span>
                </div>

                <div v-if="loanType == 'individual'">
                    <div class="grid grid-cols-1 gap-20 my-10 mx-2">

                        <div class="relative">
                            <h1 class="mb-8 tracking-widest text-xl font-medium text-center">Loan Amount</h1>
                            <Slider v-model="amount" :min="20" :max="200" :step="10" class="slider-red" />

                            <div class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">20 OMR</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">100 OMR</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">200
                                        OMR</span>
                                </div>
                            </div>
                        </div>

                        <div class="relative">
                            <h1 class="mb-8 tracking-widest text-xl font-medium text-center">Loan Duration</h1>
                            <Slider v-model="duration" :min="1" :max="3" :step="1" class="slider-red" />

                            <div class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">1 Month</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">2 Months</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">3
                                        Months</span>
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
                                <p class="self-center text-primary font-bold text-center text-sm">2% of amount due<br>
                                    weekly</p>
                            </div>

                            <div
                                class="col-span-2 place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium text-sm text-gray">You will receive</p>
                                <p class="self-center text-primary font-bold text-center text-lg">{{ (amount -
                                    processingFee) }} OMR</p>
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

                <div v-if="loanType == 'sme'">
                    <h1 class="tracking-widest text-xl font-bold text-primary text-center mt-10">
                        <span v-if="choosenSmeLoan == 'short'">Short Term Loan</span>
                        <span v-if="choosenSmeLoan == 'capital'">Working Capital Loan</span>
                        <span v-if="choosenSmeLoan == 'equipment'">Equipment Financing Loan</span>
                    </h1>
                    <div class="grid grid-cols-1 gap-20 my-10 mx-2">

                        <div class="relative">
                            <h1 class="mb-8 tracking-widest text-xl font-medium text-center">Loan Amount</h1>

                            <Slider v-if="choosenSmeLoan == 'short'" v-model="amount" :min="100" :max="10000" :step="10"
                                class="slider-red" />
                            <Slider v-if="choosenSmeLoan == 'capital'" v-model="amount" :min="100" :max="50000"
                                :step="10" class="slider-red" />
                            <Slider v-if="choosenSmeLoan == 'equipment'" v-model="amount" :min="100" :max="100000"
                                :step="10" class="slider-red" />

                            <div v-if="choosenSmeLoan == 'short'" class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">100 OMR</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">5,000 OMR</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">10,000
                                        OMR</span>
                                </div>
                            </div>
                            <div v-if="choosenSmeLoan == 'capital'" class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">100 OMR</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">25,000 OMR</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">50,000
                                        OMR</span>
                                </div>
                            </div>
                            <div v-if="choosenSmeLoan == 'equipment'" class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">100 OMR</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">50,000 OMR</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">100,000
                                        OMR</span>
                                </div>
                            </div>

                        </div>

                        <div class="relative">
                            <h1 class="mb-8 tracking-widest text-xl font-medium text-center">Loan Duration</h1>
                            <Slider v-if="choosenSmeLoan == 'short'" v-model="duration" :min="3" :max="12" :step="1"
                                class="slider-red" />
                            <Slider v-if="choosenSmeLoan == 'capital'" v-model="duration" :min="1" :max="3" :step="1"
                                class="slider-red" />
                            <Slider v-if="choosenSmeLoan == 'equipment'" v-model="duration" :min="1" :max="5" :step="1"
                                class="slider-red" />

                            <div v-if="choosenSmeLoan == 'short'" class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">1 Month</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">6 Months</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">12
                                        Months</span>
                                </div>
                            </div>
                            <div v-if="choosenSmeLoan == 'capital'" class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">1 Year</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">2 Years</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">3
                                        Years</span>
                                </div>
                            </div>
                            <div v-if="choosenSmeLoan == 'equipment'" class="absolute grid grid-cols-3 w-full mt-2">
                                <div class="text-gray -mb-6 ">1 Year</div>
                                <div class="text-gray -mb-6 relative"><span class="absolute right-3">2.5 Years</span>
                                </div>
                                <div class="text-gray -mb-6 right-0 relative"><span class="absolute right-0">5
                                        Years</span>
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
                                <p v-if="choosenSmeLoan == 'short'" class="self-center text-primary font-bold">{{
                                    duration }} Month(s)</p>
                                <p v-else class="self-center text-primary font-bold">{{ duration }} Year(s)</p>
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
                                <p class="self-center text-primary font-bold text-center text-sm">2% of amount due<br>
                                    weekly</p>
                            </div>

                            <div
                                class="col-span-2 place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium text-sm text-gray">You will receive</p>
                                <p class="self-center text-primary font-bold text-center text-lg">{{ (amount -
                                    processingFee) }} OMR</p>
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
                        <button @click="requestLoan2()" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Get instant loan
                            </span>

                        </button>
                    </div>
                </div>

                <div v-if="loanTypeModal" class="relative z-10" aria-labelledby="modal-title" role="dialog"
                    aria-modal="true">

                    <div class="fixed inset-0 bg-primary bg-opacity-75 transition-opacity"></div>

                    <div class="mb-[25vh] fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div
                                class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <i @click="loanTypeModal = !loanTypeModal"
                                    class="fas fa-xmark right-0 absolute px-5 text-md text-primary"></i>
                                <div>
                                    <div
                                        class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                                        <i class="text-primary text-lg fas fa-coins"></i>
                                    </div>
                                    <div class="mt-3 text-center sm:mt-5">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                            Choose from our offered loan types
                                        </h3>
                                    </div>
                                </div>
                                <div class="mt-5 sm:mt-6">
                                    <button @click="setLoanSubtype('short')" type="button"
                                        class="mt-5 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Short Term Loans up to 10, 000 OMR
                                    </button>
                                    <button @click="setLoanSubtype('capital')" type="button"
                                        class="mt-5 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Working Capital Loans up to 50, 000 OMR
                                    </button>
                                    <button @click="setLoanSubtype('equipment')" type="button"
                                        class="mt-5 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Equipment Financing Loans up to 100, 000 OMR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="loanUseModal" class="relative z-10" aria-labelledby="modal-title" role="dialog"
                    aria-modal="true">

                    <div class="fixed inset-0 bg-primary bg-opacity-75 transition-opacity"></div>

                    <div class="mb-[25vh] fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div
                                class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <i @click="loanTypeModal = !loanTypeModal"
                                    class="fas fa-xmark right-0 absolute px-5 text-md text-primary"></i>
                                <div>
                                    <div
                                        class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                                        <i class="text-primary text-lg fas fa-coins"></i>
                                    </div>
                                    <div class="mt-3 text-center sm:mt-5">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                            Choose the purpose of your loan
                                        </h3>
                                    </div>
                                </div>

                                <div class="relative mt-5 grid grid-cols-1 gap-2">
                                    <div>
                                        <select v-model="loanPurpose" id="location" name="location"
                                            class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6">
                                            <option></option>
                                            <option>Inventory Purchase</option>
                                            <option value="2">Equipment Financing</option>
                                            <option>Business Expansion</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <p v-if="loanPurpose==2" class="mt-5 italic font-semibold text-primary text-xs">
                                        Kindly note that for Equipment Financing a collateral and/or accounts receivable is required. <br> <br>
                                        Collateral could be assets like Real Estate, Machinery Equipment, Inventory but not limited to 
                                    </p>
                                </div>
                                
                                <div class="mt-5 sm:mt-6">
                                    <button @click="choosePurpose()" type="button"
                                        class="mt-5 inline-flex w-full justify-center rounded-md bg-primary px-3 py-3 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
