<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from "vue";

const emit = defineEmits([
    'signInView',
    'confirmView',
]);

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">
            <div class="flex">
                <div class="mt-1 mr-[10vh]">
                    <button @click="$emit('signInView')">
                        <i class="fas fa-arrow-left fa-xl"></i>
                    </button>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-primary">Forgot Password</h2>
                </div>
            </div>

            <div class="h-[80vh] flex place-content-center w-full">
                <div class="self-center">
                    <h1 class="text-4xl text-center">Forgot Password?</h1>
                    <div class="text-center mt-10">
                        <p>Select a method to reset your password</p>
                    </div>

                    <div class="grid grid-cols-1 gap-10 mt-20">

                        <div @click="$emit('confirmView')" class="flex place-content-center rounded-lg bg-black bg-opacity-5 h-20 w-18">
                            <div class="self-center flex gap-10 w-3/4 justify-around"> 
                                <div>
                                    <i class="fas fa-sms text-5xl fa-2xl text-primary mt-1"></i>
                                </div>
                                <div>
                                    <h4>Via SMS:</h4>
                                    <h6 class="mt-2 flex gap-2">
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div>
                                            6
                                        </div>
                                        <div>
                                            4
                                        </div>
                                        <div>
                                            3
                                        </div>
                                        <div>
                                            9
                                        </div>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div @click="$emit('confirmView')" class="flex place-content-center rounded-lg bg-black bg-opacity-5 h-20 w-18">
                            <div class="self-center flex gap-10 w-3/4 justify-around"> 
                                <div>
                                    <i class="fas fa-envelope text-5xl fa-2xl text-primary mt-1"></i>
                                </div>
                                <div>
                                    <h4>Via SMS:</h4>
                                    <h6 class="mt-2 flex gap-2">
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div class="h-2 w-2 bg-gray rounded-full mt-2"></div>
                                        <div>
                                            @gmail.com
                                        </div>
                                    </h6>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>



        </div>


    </main>
</template>

<style></style>
