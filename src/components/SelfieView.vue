<script setup>
import { onMounted } from "vue";

onMounted(() => {
    window.scrollTo(0, 0);
});


const emit = defineEmits([
    'identityView',
    'personalView'
]);


</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex">
                        <div class="mt-1 mr-[10vh]">
                            <i @click="$emit('identityView')" class="fas fa-caret-left fa-xl"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-primary">Upload Selfie</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 my-5">

                        <p class="text-primary text-sm">
                            <span class="font-semibold">
                                What you will need? <br>
                            </span>

                            <span class="text-xs">
                                <i class="far fa-arrow-right"></i> Your government-issued photo ID such as your passport or driver’s license.
                                Note that US customers may only use a driver’s license or non-driver’s ID card for level 1
                                verification. <br>
                                
                                <i class="far fa-arrow-right"></i> A piece of paper on which you’ve handwritten <br>
                                <i class="far fa-arrow-right"></i> A cellphone with a working camera
                            </span>
                        </p>
                            

                        <div class="mt-2">
                            <img src="@/assets/img/omani.jpeg" alt="">
                            

                        </div>

                        <div class="mt-5 grid grid-cols-2 gap-5">
                            <div class="text-center">
                                <span class="mx-auto">
                                    <i class="far fa-cloud-arrow-up fa-2x"></i>
                                    <br>
                                </span>
    
                                <label for="file-upload"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                    <span class="text-center">Upload a photo</span>
                                </label>
                                <!-- <p class="text-xs leading-5 text-gray-600">PNG or JPG</p> -->
                            </div>
                            <div class="text-center">
                                <span class="mx-auto">
                                    <i class="far fa-camera fa-2x"></i>
                                    <br>
                                </span>
    
                                <label for="file-upload"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                    <span class="text-center">Take a selfie</span>
                                </label>
                                <!-- <p class="text-xs leading-5 text-gray-600">PNG or JPG</p> -->
                            </div>
                        </div>

                    </div>

                    <div class="flex flex-col place-content-center my-10">
                        <button @click="$emit('personalView')" type="button"
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
}</style>
