<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    window.scrollTo(0, 0);
});

const emit = defineEmits([
    'signInView',
    'signUpView'
]);

</script>

<template>
    <main>
        <!-- place-content-center -->
        <div class="bg-floor h-screen flex">
            <!-- self-center -->

            <div class="relative isolate px-6 pt-7 lg:px-8 ">
                <div class="grid grid-cols-3 gap-10">
                    <div class="mt-1">
                        <!-- <i class="fas fa-arrow-left fa-xl"></i> -->
                    </div>
                    <div>
                        <!-- <h2 class="text-xl font-semibold text-primary">Sign in</h2> -->
                    </div>
                </div>


                <div data-wow-duration="1s" class=" wow animate__jello flex justify-center">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Simple Pay</span>
                        <img class="w-auto" src="@/assets/img/logo.png" alt="">
                    </a>
                </div>

                <div class="mt-6 ">
                    <img class="rounded-3xl " src="@/assets/img/hero.jpg" alt="">
                </div>

                <div class="flex flex-col place-content-center mt-5">
                    <button @click="$emit('signInView')" type="button"
                        class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>

                    <h2 class="tracking-wide my-4 text-center">Haven't registered?</h2>

                    <button @click="$emit('signUpView')" type="button"
                        class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign up
                    </button>

                    <div class="mt-5">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-gray-200"></div>
                            </div>
                            <div class="relative flex justify-center text-sm font-medium leading-6">
                                <span class="bg-slate px-6 text-gray-900">Or sign in with</span>
                            </div>
                        </div>

                        <div class="mt-6 flex justify-around">
                            <a href="#" target="_blank">
                                <img src="@/assets/img/google.svg" alt=""
                                    class="tranform transition hover:scale-125 duration-700 ease-in-out h-8 w-8">
                            </a>
                            <a href="#" target="_blank">
                                <img src="@/assets/img/apple.svg" alt=""
                                    class="tranform transition hover:scale-125 duration-700 ease-in-out h-8 w-8">
                            </a>
                            <a href="#" target="_blank">
                                <img src="@/assets/img/fb.svg" alt=""
                                    class="tranform transition hover:scale-125 duration-700 ease-in-out h-8 w-8">
                            </a>
                            <a href="#" target="_blank">
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
