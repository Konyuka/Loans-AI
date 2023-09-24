<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <main>
        <!-- place-content-center -->
        <div class="bg-floor h-screen flex">
            <!-- self-center -->

            <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">
                <div class="grid grid-cols-3 gap-10">
                    <div class="mt-1">
                        <!-- <i class="fas fa-arrow-left fa-xl"></i> -->
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold text-primary">Sign up</h2>
                    </div>
                </div>

                <div class="mt-8">
                    <div>
                        <h2 class="font-semibold text-2xl tracking-wide ">Create your account</h2>
                    </div>

                    <div class="grid grid-cols-1 gap-5 mt-4">

                        <div class="relative mt-2">
                            <input id="password" name="password" type="password" autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black font-semibold text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6"
                                placeholder="Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-message"></i>
                            </div>
                        </div>
                        <div class="relative mt-2">
                            <input id="password" name="password" type="password" autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black font-semibold text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6"
                                placeholder="Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-message"></i>
                            </div>
                        </div>
                        <div class="relative mt-2">
                            <input id="password" name="password" type="password" autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black font-semibold text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6"
                                placeholder="Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-message"></i>
                            </div>
                        </div>
                        <div class="relative mt-2">
                            <input id="password" name="password" type="password" autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black font-semibold text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6"
                                placeholder="Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-message"></i>
                            </div>
                        </div>
                        <div class="relative mt-2">
                            <input id="password" name="password" type="password" autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black font-semibold text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6"
                                placeholder="Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-message"></i>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                            <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">Accept our terme & conditions 
                            </label>
                        </div>

                    </div>
                </div>



                <div class="flex flex-col place-content-center mt-5">
                    <button type="button"
                        class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign up
                    </button>

                    <div class="mt-5">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-gray-200"></div>
                            </div>
                            <div class="relative flex justify-center text-sm font-medium leading-6">
                                <span class="bg-white px-6 text-gray-900">Or sign in with</span>
                            </div>
                        </div>

                        <div class="mt-6 grid grid-cols-4 gap-4">
                            <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                <img src="@/assets/img/google.svg" alt=""
                                    class="tranform transition hover:scale-125 duration-700 ease-in-out h-8 w-8">
                            </a>
                            <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                <img src="@/assets/img/apple.svg" alt=""
                                    class="tranform transition hover:scale-125 duration-700 ease-in-out h-8 w-8">
                            </a>
                            <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                <img src="@/assets/img/fb.svg" alt=""
                                    class="tranform transition hover:scale-125 duration-700 ease-in-out h-8 w-8">
                            </a>
                            <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                <img src="@/assets/img/twitter.svg" alt=""
                                    class="tranform transition hover:scale-125 duration-700 ease-in-out h-8 w-8">
                            </a>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    </main>
</template>

<style></style>
