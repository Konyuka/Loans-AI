<script setup>
import { ref } from "vue";

const otpConfirmed = ref(false);
const otpSent = ref(false);

</script>

<template>
    <main>

        <div class="bg-white flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <RouterLink to="/" class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-20 w-auto" src="@/assets/img/logo.png" alt="Your Company">
                <h2 class="mt-10 text-center text-3xl font-semibold leading-9 tracking-widest  text-primary">Create an
                    account
                </h2>
            </RouterLink>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">

                <form class=" grid grid-cols-1 sm:grid-cols-2 gap-6" action="#" method="POST">

                    <div class="space-y-6">
                        <div class="flex gap-5 justify-between">
                            <div class=" w-full">
                                <label for="email" class="block text-sm font-bold leading-6 text-primary">First
                                    Name</label>
                                <div class="relative mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required
                                        class="block w-full rounded-md border-0 bg-primary bg-opacity-10 py-1.5 text-black font-semibold text-center shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex gap-5 justify-between">
                            
                            <div class="w-full">
                                <label for="email" class="block text-sm font-medium leading-6 text-primary">Last
                                    Name</label>
                                <div class="relative mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required
                                        class="block w-full rounded-md border-0 bg-primary bg-opacity-10 py-1.5 text-black font-semibold text-center shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-primary">Email
                                address</label>
                            <div class="relative mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required
                                    class="block w-full rounded-md border-0 bg-primary bg-opacity-10 py-1.5 text-black font-semibold text-center shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6">
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i class="fas fa-paper-plane text-primary"></i>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <div class="flex items-center justify-between">
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-primary">Password</label>
                            </div>
                            <div class="relative mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password"
                                    required
                                    class="block w-full rounded-md border-0 bg-primary bg-opacity-10 py-1.5 text-black text-center shadow-sm sm:text-sm sm:leading-6">
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i class="fas fa-key text-primary"></i>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-primary">Confirm
                                    Password</label>
                            </div>
                            <div class="relative mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password"
                                    required
                                    class="block w-full rounded-md border-0 bg-primary bg-opacity-10 py-1.5 text-black text-center shadow-sm sm:text-sm sm:leading-6">
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i class="fas fa-key text-primary"></i>
                                </div>
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

                <p class="mt-10 text-center text-sm text-black">
                    Already a member?
                    <RouterLink to="/login"
                        class="ml-2 transform transition hover:scale-95 duration-600 ease-in-out font-semibold leading-6 text-primary hover:text-white">
                        Sign in here
                    </RouterLink>

                </p>
            </div>
        </div>

    </main>
</template>