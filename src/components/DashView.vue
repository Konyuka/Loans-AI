<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import Slider from '@vueform/slider'

const amount = ref(20);
const duration = ref(1);


</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">
                    <div data-wow-duration="1s" class="wow animate__jello flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Simple Pay</span>
                            <img class="w-auto" src="@/assets/img/logo.png" alt="">
                        </a>
                    </div>

                    <div class="grid grid-cols-1 gap-20 my-10">

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

                    <div class="grid grid-cols-2 gap-2 pt-5">

                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                            <p class="self-center text-primary font-bold">200 OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                            <p class="self-center text-primary font-bold">200 OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                            <p class="self-center text-primary font-bold">200 OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                            <p class="self-center text-primary font-bold">200 OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                            <p class="self-center text-primary font-bold">200 OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                            <p class="self-center text-primary font-bold">200 OMR</p>
                        </div>


                    </div>

                    <div class="flex items-center py-5">
                        <input id="remember-me" name="remember-me" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ">
                        <label for="remember-me" class="ml-3 block text-xs leading-6 text-gray-900">I accept that I have read our <a href="#"
                                class="text-primary font-semibold hover:cursor-pointer">terms & conditions</a>
                        </label>
                    </div>



                    <div class="flex flex-col place-content-center my-5">
                        <button type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Get instant loan
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
