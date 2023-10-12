<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, onMounted } from "vue";

const emit = defineEmits([
    'financialView',
    'contactView'
]);

const date = ref(null);
const month = ref({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
})

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <main class="">


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex w-[90vw] relative">
                        <div class="mt-1 mr-[8vh]">
                            <i @click="$emit('contactView')" class="fas fa-caret-left fa-xl"></i>
                        </div>
                        <div class="text-center">
                            <h2 class="text-xl font-semibold text-primary">Employment Information</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-2 my-5">
                        <div class=" relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Company name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-business-time"></i>
                            </div>
                        </div>

                        <div class=" relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="HR Name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-people-roof"></i>
                            </div>
                        </div>

                        <div class="relative mt-2 rounded-md shadow-lg">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <select disabled id="country" name="country" autocomplete="country"
                                    class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm">
                                    <option class="mr-2 bg-gray tracking-widest">+968 </option>
                                </select>
                            </div>
                            <input type="number" name="phone-number" id="phone-number" autocomplete="phone" required
                                class=" tracking-widest block rounded-md border-0 py-5 pl-24 w-full text-gray-900 ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                placeholder="HR Phone Number">
                        </div>

                        <div class=" relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Manager Name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-user-tie-hair-long"></i>
                            </div>
                        </div>

                        <div class="relative mt-2 rounded-md shadow-lg">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <select disabled id="country" name="country" autocomplete="country"
                                    class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm">
                                    <option class="mr-2 bg-gray tracking-widest">+968 </option>
                                </select>
                            </div>
                            <input type="number" name="phone-number" id="phone-number" autocomplete="phone" required
                                class=" tracking-widest block rounded-md border-0 py-5 pl-24 w-full text-gray-900 ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                placeholder="Manager Phone Number">
                        </div>

                        <!-- <div class=" relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Company name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-business-time"></i>
                            </div>
                        </div> -->

                        <div class="relative mt-2">
                            <input id="last-name" name="last-name" type="text" autocomplete="last-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Job title">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-user-doctor"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="name" name="name" type="number" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Salary">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-money-bill"></i>
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

                    <div class="flex flex-col place-content-center py-10">
                        <button @click="$emit('financialView')" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Next <i class="far fa-angle-right"></i>
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
