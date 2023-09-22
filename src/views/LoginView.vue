<script setup>
import { ref } from "vue";

const otpConfirmed = ref(false);

</script>

<template>
    <main>

        <div class="bg-black bg-opacity-30 flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <RouterLink to="/" class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-20 w-auto" src="@/assets/img/logo.png" alt="Your Company">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account
                </h2>
            </RouterLink>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required
                                class="block w-full rounded-md border-0 bg-white py-1.5 text-black font-semibold text-center shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <label for="phone-number" class="block text-sm font-medium leading-6 text-white">Phone
                            Number</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <label for="country" class="sr-only">Country</label>
                                <select disabled id="country" name="country" autocomplete="country"
                                    class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-accent sm:text-sm">
                                    <option>OM</option>
                                    <option>KE</option>
                                    <option>EU</option>
                                </select>
                            </div>
                            <div class="flex gap-2">
                                <input type="number" name="phone-number" id="phone-number" class="block w-full rounded-md border-0 py-1.5 pl-16 text-black font-semibold text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6">
                                <button v-if="!otpConfirmed" @click="otpConfirmed=!otpConfirmed" type="button" class="rounded bg-primary px-10 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Send OTP
                                </button>
                                <button v-if="otpConfirmed" @click="otpConfirmed=!otpConfirmed" type="button" class="rounded bg-primary px-10 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Resend OTP
                                </button>

                            </div>
                        </div>
                    </div>

                    <div v-if="otpConfirmed">
                        <div>
                            <label for="account-number" class="block text-sm font-medium leading-6 text-white">
                                Enter OTP Code
                            </label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="number" name="account-number" id="account-number"
                                    class="text-center font-semibold block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 sm:text-sm sm:leading-6"
                                    >
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i class="fas fa-message"></i>
                                </div>
                            </div>
                        </div>
    
    
                        <div class="mt-8">
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
                                <div class="text-sm transform transition hover:scale-95 duration-600 ease-in-out">
                                    <a href="#" class="font-semibold text-white ">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required
                                    class="block w-full rounded-md border-0 bg-white py-1.5 text-black font-semibold text-center shadow-sm sm:text-sm sm:leading-6">
                            </div>
                        </div>


                        <div class="mt-8">
                            <button type="submit"
                                class="transform transition hover:scale-95 duration-600 ease-in-out flex w-full justify-center rounded-md bg-primary hover:bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                Sign in
                            </button>
                        </div>
                    </div>






                </form>

                <p class="mt-10 text-center text-sm text-white">
                    <RouterLink to="/dashboard">
                        Not a member?
                    </RouterLink>
                    <RouterLink to="/register"
                        class="ml-2 transform transition hover:scale-95 duration-600 ease-in-out font-semibold leading-6 text-primary hover:text-white">
                        Get started here
                    </RouterLink>

                </p>
            </div>
    </div>

</main></template>