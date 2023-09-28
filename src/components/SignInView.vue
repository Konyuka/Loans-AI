<script setup>
import { RouterLink } from 'vue-router';
import { ref } from "vue";
import { useUserData } from '@/stores/userData'

const userData = useUserData()

const emit = defineEmits([
    'forgotView',
    'landingView',
    'landingView',
]);

const stage = ref(1);

const user = ref({
    email:null,
    password:null,
});

const signIn = () => {
    userData.updateUserData(user.value);
}

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">
            <div class="grid grid-cols-3 gap-10">
                <div class="mt-1">
                    <button @click="$emit('landingView')" v-if="stage == 1">
                        <i class="fas fa-arrow-left fa-xl"></i>
                    </button>
                    <button @click="stage=1" v-if="stage == 2">
                        <i class="fas fa-arrow-left fa-xl"></i>
                    </button>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-primary">Sign in</h2>
                </div>
            </div>

            <div class="h-[80vh] flex place-content-center w-full">
                <div class="self-center">
                    <div data-wow-duration="1s" class="mt-5 wow animate__jello flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Simple Pay</span>
                            <img class="w-auto" src="@/assets/img/logo.png" alt="">
                        </a>
                    </div>

                    <div class="my-20">
                        <div @click="stage = 1" v-if="stage == 1" class="mt-2">
                            <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-medium text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6"
                                placeholder="Email">
                        </div>
                        <div v-if="stage==2">
                            <div class="mt-2">
                                <input v-model="user.password" id="password" name="password" type="password" autocomplete="password" required
                                    class="px-5 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-medium text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6"
                                    placeholder="Password">
                            </div>
                            <div class="mt-10 flex items-center justify-between">
                                <div class="flex items-center">
                                    <!-- <input id="remember-me" name="remember-me" type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">Remember
                                        me</label> -->
                                    <!-- <a href="#" class="font-semibold text-primary hover:text-indigo-500">Sign up</a> -->
                                </div>
    
                                <div class="text-sm leading-6">
                                    <button @click="$emit('forgotView')" class="font-semibold text-primary hover:text-indigo-500">Forgot password?</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-col place-content-center mt-5">
                        <button @click="stage=2" v-if="stage == 1" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Next 
                            </span>
                        </button>
                        <button @click="signIn()" v-if="stage == 2" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                           
                            <span>
                                Sign in
                            </span>
                        </button>
                    </div>
                    
                </div>
            </div>



        </div>


    </main>
</template>

<style></style>
