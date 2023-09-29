<script setup>
import { onMounted } from "vue";
const emit = defineEmits([
    'dashView',
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

                    <div class="flex">
                        <div class="mt-1 mr-[10vh]">
                            <i @click="$emit('dashView')" class="fas fa-caret-left fa-xl"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-primary">Verify Identity</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 my-5">

                        <p class="text-primary text-md">
                            Financial regulations require us to verify your ID <br> <br>
                            This helps prevent someone else from creating a Simple Pay account in your name
                        </p>

                        <div class="mt-2">
                            <h1 class="text-center text-2xl text-primary font-semibold">Type of document</h1>
                            <p class="text-xs leading-5 text-gray-600 text-center">PNG, JPG or PDF</p>
                            <fieldset>
                                <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">

                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Identity card</label>
                                        </div>

                                        <div class="text-center">
                                            <span class="mx-auto">
                                                <i class="far fa-cloud-arrow-up fa-lg"></i>
                                                <br>
                                            </span>
                                            <label for="file-upload"
                                                class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                <span class="text-center text-sm">Upload file</span>
                                            </label>
                                            <!-- <p class="text-xs leading-5 text-gray-600">PNG, JPG or PDF</p> -->
                                        </div>

                                        <!-- <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div> -->
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Passport</label>
                                        </div>
                                        <div class="text-center">
                                            <span class="mx-auto">
                                                <i class="far fa-cloud-arrow-up fa-lg"></i>
                                                <br>
                                            </span>
                                            <label for="file-upload"
                                                class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                <span class="text-center text-sm">Upload file</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Driving License</label>
                                        </div>
                                        <div class="text-center">
                                            <span class="mx-auto">
                                                <i class="far fa-cloud-arrow-up fa-lg"></i>
                                                <br>
                                            </span>
                                            <label for="file-upload"
                                                class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                <span class="text-center text-sm">Upload file</span>
                                            </label>
                                        </div>
                                    </div>



                                </div>
                            </fieldset>

                        </div>

                        <!-- <div class="text-center mt-5">
                            <span class="mx-auto">
                                <i class="far fa-cloud-arrow-up fa-2x"></i>
                                <br>
                            </span>
                            <label for="file-upload"
                                class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                <span class="text-center">Upload file</span>
                            </label>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG or PDF</p>
                        </div> -->

                    </div>

                    <div class="flex flex-col place-content-center my-10 pb-5">
                        <button @click="$emit('selfieView')" type="button"
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
