<script setup>
import { RouterLink } from 'vue-router'
import Footer from "@/components/Footer.vue";


</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-5 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">
                    <div data-wow-duration="1s" class="w-[90vw] flex flex-row justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Simple Pay</span>
                            <img class="h-10 w-auto" src="@/assets/img/logo.png" alt="">
                        </a>
                        <div class="">
                            <i class="fas fa-bell fa-xl text-primary mr-7"></i>
                            <i class="fas fa-user fa-xl text-primary"></i>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2 my-10">

                        <div class="grid grid-cols-1">
                            <p class="self-center text-medium tracking-widest text-md text-gray">Payment Due</p>
                            <p class="self-center text-primary font-bold text-xl text-center">200 OMR</p>
                        </div>

                        <div>
                            <button type="button"
                                class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span>
                                    Pay now
                                </span>

                            </button>
                        </div>

                    </div>

                    <div class="grid grid-cols-2 gap-2">

                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Taken</p>
                            <p class="self-center text-primary font-bold">200 OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Next Payment Due</p>
                            <p class="self-center text-primary font-bold">20th Dec 2023</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Term</p>
                            <p class="self-center text-primary font-bold">3 Months </p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Interest Accrued</p>
                            <p class="self-center text-primary font-bold">3% </p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Paid</p>
                            <p class="self-center text-primary font-bold">100 OMR</p>
                        </div>
                        <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                            <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Penalty</p>
                            <p class="self-center text-primary font-bold">6 OMR (14 days)</p>
                        </div>


                    </div>

                    <div class="bg-gray h-[25vh] bg-opacity-30 w-full mt-10 rounded-md flex place-content-center">
                        <p class="self-center text-primary">Ads banner space</p>
                    </div>
                    <div class="flex pb-10 mt-3 place-content-center gap-2">
                        <div class="h-3 w-3 rounded-full bg-gray"></div>
                        <div class="h-3 w-3 rounded-full bg-gray"></div>
                        <div class="h-3 w-3 rounded-full bg-gray"></div>
                    </div>

                </div>
            </div>



        </div>

        <Footer></Footer>


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
