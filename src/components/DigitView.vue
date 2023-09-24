<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">
            <div class="flex">
                <div class="mt-1 mr-[7vh]">
                    <i class="fas fa-arrow-left fa-xl"></i>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-primary">Enter digit verification</h2>
                </div>
            </div>

            <div class="h-[80vh] flex place-content-center w-full">
                <div class="self-center">
                    <h1 class="text-4xl text-center">Enter 4-digit verification code</h1>
                    <div class="text-center mt-10">
                        <p>Enter the code sent to +968 716 202 289</p>
                        <p>This code wil expire in 01:30</p>
                    </div>

                    <div class="grid grid-cols-4 gap-5 mt-20">
                        <div class="flex place-content-center rounded-md bg-black bg-opacity-5 h-18 w-18">
                            <p class="self-center text-4xl text-primary p-5">1</p>
                        </div>
                        <div class="flex place-content-center rounded-md bg-black bg-opacity-5 h-18 w-18">
                            <p class="self-center text-4xl text-primary p-5">8</p>
                        </div>
                        <div class="flex place-content-center rounded-md bg-black bg-opacity-5 h-18 w-18">
                            <p class="self-center text-4xl text-primary p-5">2</p>
                        </div>
                        <div class="flex place-content-center rounded-md bg-black bg-opacity-5 h-18 w-18">
                            <p class="self-center text-4xl text-primary p-5">8</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    </main>
</template>

<style></style>
