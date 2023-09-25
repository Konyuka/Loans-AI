<script setup>
import { RouterLink } from 'vue-router'

const emit = defineEmits([
    'signInView'
]);

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-[80vh] flex place-content-center w-full">
                <div class="self-center">
                    <div class="text-center mb-10">
                        <i class="fas fa-check text-6xl fa-2x text-primary"></i>
                    </div>
                    <h1 class="text-4xl text-center">Password reset successful</h1>
                    <div class="text-center mt-10">
                        <p>You have successfully reset your password</p>
                    </div>

                    <div class="grid grid-cols-1 gap-10 mt-20">
                        <div class="flex flex-col place-content-center mt-5">
                            <button @click="$emit('signInView')" type="button"
                                class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span>
                                    Continue
                                </span>
                               
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    </main>
</template>

<style></style>
