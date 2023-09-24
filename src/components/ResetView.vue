<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">
            <div class="flex">
                <div class="mt-1 mr-[10vh]">
                    <i class="fas fa-arrow-left fa-xl"></i>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-primary">Reset Password</h2>
                </div>
            </div>

            <div class="h-[80vh] flex place-content-center w-full">
                <div class="self-center">
                    <h1 class="text-4xl text-center">Create a new password</h1>

                    <div class="grid grid-cols-1 gap-10 mt-20">


                        <div>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="password" name="password" id="password"
                                    class="bg-gray bg-opacity-5 shadow-lg block w-full rounded-md border-0 py-4 pr-10 text-gray-900 ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    placeholder="New Password">
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i class="fas fa-eye text-black"></i>
                                </div>
                            </div>
                        </div>


                        <div class="flex flex-col place-content-center mt-5">
                            <button type="button"
                                class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span>
                                    Reset my password
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
