<script setup>
import { ref } from "vue";
import { useUserData } from '@/stores/userData'
const userData = useUserData()

const emit = defineEmits([
    'signInView',
    'digitView',
]);

const user = ref({
    fname: null,
    lname: null,
    email: null,
    number: null,
    password: null,
});

const signUp = () => {
    userData.updateUserData(user.value);
    emit('digitView')
}


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

                    <div class="grid grid-cols-1 gap-3 mt-2">

                        <div class="relative mt-2">
                            <input v-model="user.fname" id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="First name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-user"></i>
                            </div>
                        </div>
                        <div class="relative mt-2">
                            <input v-model="user.lname" id="name" name="name" type="text" autocomplete="last-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Last name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-user"></i>
                            </div>
                        </div>
                        <div class="relative mt-2">
                            <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Email">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-envelope"></i>
                            </div>
                        </div>
                        <div class="relative mt-2 rounded-md shadow-lg">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <select disabled id="country" name="country" autocomplete="country"
                                    class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm">
                                    <option class="mr-2 bg-gray tracking-widest">+968 </option>
                                </select>
                            </div>
                            <input v-model="user.number" type="number" name="phone-number" id="phone-number" autocomplete="phone" required
                                class=" tracking-widest block rounded-md border-0 py-5 pl-24 w-full text-gray-900 ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                placeholder="Phone">
                        </div>
                        <div class="relative mt-2">
                            <input v-model="user.password" id="password" name="password" type="password" autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-key"></i>
                            </div>
                        </div>


                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" required
                                class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary">
                            <label for="remember-me" class="ml-3 block text-xs leading-6 text-gray-900">I accept that I have
                                read our <a href="#" class="text-primary font-semibold hover:cursor-pointer">terms &
                                    conditions</a>
                            </label>
                        </div>

                    </div>
                </div>



                <div class="flex flex-col place-content-center mt-5">
                    <button @click="signUp()" type="button"
                        class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign up
                    </button>

                    <p class="mt-5 text-center text-sm text-gray-400">
                        Already a member?
                        <button @click="$emit('signInView')" class="font-semibold leading-6 text-primary">Sign in
                            here</button>
                    </p>

                    <div class="mt-5">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-gray-200"></div>
                            </div>
                            <div class="relative flex justify-center text-sm font-medium leading-6">
                                <span class="bg-white px-6 text-gray-900">Or sign in with</span>
                            </div>
                        </div>

                        <div class="mt-6 grid grid-cols-4 gap-4 mb-10">
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
