<script setup>
import { ref, onMounted } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const month = ref({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
})

const emit = defineEmits([
    'contactView',
    'selfieView'
]);

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex w-[90vw] relative">
                        <div class="mt-1 mr-[8vh]">
                            <i @click="$emit('selfieView')" class="fas fa-caret-left fa-xl"></i>
                        </div>
                        <div class="text-center">
                            <h2 class="text-xl font-semibold text-primary">Personal Information</h2>
                        </div>
                    </div>


                    <div class="grid grid-cols-1 gap-2 my-5">

                        <div class="relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Nationality">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-flag"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <select id="location" name="location"
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6">
                                <option selected disabled>Marital Status</option>
                                <option>Single</option>
                                <option>Married</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-family"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Number of dependents">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-users"></i>
                            </div>
                        </div>

                        <div class="relative mt-4">
                            <VueDatePicker month-picker placeholder="Date of birth"
                                class="dp_theme font-sans text-center"></VueDatePicker>
                        </div>


                        <div class=" relative mt-5">
                            <label class="text-gray">Enter residential address</label>
                            <textarea rows="3" id="name" name="name" type="text" autocomplete="first-name" required
                                class="mt-2 px-2 block w-full rounded-md border-0 bg-white text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary">
                            </textarea>

                        </div>


                    </div>

                    <div class="flex flex-col place-content-center my-10">
                        <button @click="$emit('contactView')" type="button"
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
