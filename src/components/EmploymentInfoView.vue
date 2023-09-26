<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from "vue";

const date = ref(null);
const month = ref({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
})

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex w-[90vw] relative">
                        <div class="mt-1 mr-[8vh]">
                            <i class="fas fa-caret-left fa-xl"></i>
                        </div>
                        <div class="text-center">
                            <h2 class="text-xl font-semibold text-primary">Employment Information</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-2 my-5">
                        <div class=" relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Employer name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-user"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="last-name" name="last-name" type="text" autocomplete="last-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Job title">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-user"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="name" name="name" type="number" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Salary">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-watch"></i>
                            </div>
                        </div>

                        <div class="relative mt-2 grid grid-cols-2 gap-2">
                            <div>
                                <input id="name" name="name" type="number" autocomplete="first-name" required
                                    class="placeholder:text-md px-1 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-center shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                    placeholder="Contract Length">

                            </div>
                            <div>
                                <select id="location" name="location"
                                    class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6">
                                    <option selected>Month(s)</option>
                                    <option>Year(s)</option>
                                </select>
                            </div>
                        </div>

                        <div class="relative mt-5">
                            <VueDatePicker v-model="month" month-picker placeholder="Contract end date"
                                class="dp_theme font-sans text-center"></VueDatePicker>
                        </div>



                    </div>

                    <div class="flex flex-col place-content-center my-10">
                        <button type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Next <i class="far fa-caret-right"></i>
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
