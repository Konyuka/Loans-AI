<script setup>
import { useLoanData } from '@/stores/loanData'
const loanData = useLoanData()
import moment from "moment";
import { computed, onMounted } from "vue";

onMounted(() => {
    window.scrollTo(0, 0);
});

const emit = defineEmits([
    'receivingView'
]);

const nextPaymentDate = computed(() => {
    const currentDate = moment();
    const nextMonthDate = currentDate.add(1, 'months');
    const formattedDate = nextMonthDate.format('Do MMM YYYY');
    return formattedDate;
});

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex w-[90vw] relative">
                        <div class="mt-1 mr-[8vh]">
                            <!-- <i class="fas fa-caret-left fa-xl"></i> -->
                        </div>
                        <div class="text-center">
                            <h2 class="text-xl font-semibold text-primary">Verification Successful</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-2 my-5">

                        <div class="grid grid-cols-2 gap-1 pt-5">

                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                                <p class="self-center text-primary font-bold">{{ loanData.loanData.amount }} OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Processing Fee(3%)</p>
                                <p class="self-center text-primary font-bold">{{ loanData.loanData.processingFee }} OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Receiving Amount</p>
                                <p class="self-center text-primary font-bold">{{ loanData.loanData.amount - loanData.loanData.processingFee }} OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Interest</p>
                                <p class="self-center text-primary font-bold">3% Monthly</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Duration</p>
                                <p class="self-center text-primary font-bold">{{ loanData.loanData.term }} Month(s)</p>
                            </div>

                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Next due date</p>
                                <p class="self-center text-primary font-bold">{{ nextPaymentDate }}</p>
                            </div>

                            <div class="col-span-2 place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium text-sm text-gray">You will receive</p>
                                <p class="self-center text-primary font-bold text-center text-lg">{{ (loanData.loanData.amount - loanData.loanData.processingFee) }} OMR</p>
                            </div>


                        </div>
                      

                        <div class="flex items-center mt-10">
                            <input id="remember-me" name="remember-me" type="checkbox" required
                                class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary">
                            <label for="remember-me" class="ml-3 block text-xs leading-6 text-gray-900">I accept that I have
                                read our <a href="#" class="text-primary font-semibold hover:cursor-pointer">terms &
                                    conditions</a>
                            </label>
                        </div>



                    </div>

                    <div class="flex flex-col place-content-center my-10 pb-10">
                        <button @click="$emit('receivingView')" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Receive Funds
                            </span>

                        </button>
                    </div>

                </div>
            </div>



        </div>


    </main>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.slider-red {
    --slider-connect-bg: #292561;
    --slider-tooltip-bg: #292561;
    --slider-handle-ring-color: black;
    --slider-height: 10px;
    --slider-radius: 9999px;
}
</style>
