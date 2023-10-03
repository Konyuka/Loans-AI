<script setup>
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue";
import Nav from "./Nav.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const user = ref({
    fname: null,
    lname: null,
    email: null,
    number: null,
    password: null,
});

const month = ref({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
})


onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-5 max-w-[100vw]">


            <div class="min-h-screen flex place-content-center w-full pb-10">
                <div class="">
                    <Nav @notificationView="$emit('notificationView')" @profileView="$emit('profileView')" />
                    

                    <div class="mt-2 text-center">
                        <h2 class="text-xl font-semibold text-primary">User Profile</h2>
                    </div>

                    <div class="grid grid-cols-1 gap-3 mb-5">

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
                            <input v-model="user.number" type="number" name="phone-number" id="phone-number"
                                autocomplete="phone" required
                                class=" tracking-widest block rounded-md border-0 py-5 pl-24 w-full text-gray-900 ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                placeholder="Phone">
                        </div>

                        <div class=" relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Employer name">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-business-time"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="last-name" name="last-name" type="text" autocomplete="last-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Job title">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-user-doctor"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="name" name="name" type="number" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Salary">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-money-bill"></i>
                            </div>
                        </div>

                        <div class="relative mt-2 grid grid-cols-2 gap-2">
                            <div>
                                <input id="name" name="name" type="number" autocomplete="first-name" required
                                    class="placeholder:text-md px-1 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-center shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                    placeholder="Contract Length">

                            </div>
                            <div>
                                <select id="location" name="location"
                                    class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6">
                                    <option selected>Month(s)</option>
                                    <option>Year(s)</option>
                                </select>
                            </div>
                        </div>

                        <div class="relative mt-5">
                            <VueDatePicker v-model="month" month-picker placeholder="Contract end date"
                                class="dp_theme font-sans text-center"></VueDatePicker>
                        </div>

                        <div class="relative mt-2">
                            <input v-model="user.password" id="password" name="password" type="password"
                                autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-key"></i>
                            </div>
                        </div>
                        <div class="relative mt-2">
                            <input v-model="user.password" id="password" name="password" type="password"
                                autocomplete="password" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Confirm Password">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-key"></i>
                            </div>
                        </div>

                        <div class="mt-2">
                            <h1 class="text-center text-xl text-primary font-semibold">Update documents</h1>
                            <p class="text-xs leading-5 text-gray-600 text-center">PNG, JPG or PDF</p>
                            <fieldset>
                                <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">

                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Identity card</label>
                                            <p>Last update on:</p>
                                            <p>12th March 2023</p>
                                        </div>

                                        <div class="text-center flex gap-5">
                                            <div>
                                                <span class="mx-auto">
                                                    <i class="far fa-cloud-arrow-down fa-lg"></i>
                                                    <br>
                                                </span>
                                                <label for="file-upload"
                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    <span class="text-center text-xs">Download file</span>
                                                </label>
                                            </div>
                                            <div>
                                                <span class="mx-auto">
                                                    <i class="far fa-cloud-arrow-up fa-lg"></i>
                                                    <br>
                                                </span>
                                                <label for="file-upload"
                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    <span class="text-center text-xs">Upload file</span>
                                                </label>
                                            </div>
                                        </div>

                                        <!-- <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div> -->
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Passport</label>
                                            <p>Last update on:</p>
                                            <p>21st March 2023</p>
                                        </div>
                                        <div class="text-center flex gap-5">
                                            <div>
                                                <span class="mx-auto">
                                                    <i class="far fa-cloud-arrow-down fa-lg"></i>
                                                    <br>
                                                </span>
                                                <label for="file-upload"
                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    <span class="text-center text-xs">Download file</span>
                                                </label>
                                            </div>
                                            <div>
                                                <span class="mx-auto">
                                                    <i class="far fa-cloud-arrow-up fa-lg"></i>
                                                    <br>
                                                </span>
                                                <label for="file-upload"
                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    <span class="text-center text-xs">Upload file</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Driving License</label>
                                            <p>Last update on:</p>
                                            <p>15th March 2023</p>
                                        </div>
                                        <div class="text-center flex gap-5">
                                            <div>
                                                <span class="mx-auto">
                                                    <i class="far fa-cloud-arrow-down fa-lg"></i>
                                                    <br>
                                                </span>
                                                <label for="file-upload"
                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    <span class="text-center text-xs">Download file</span>
                                                </label>
                                            </div>
                                            <div>
                                                <span class="mx-auto">
                                                    <i class="far fa-cloud-arrow-up fa-lg"></i>
                                                    <br>
                                                </span>
                                                <label for="file-upload"
                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    <span class="text-center text-xs">Upload file</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </fieldset>

                        </div>



                        <button type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Update Information
                        </button>
                    </div>



                </div>
            </div>



        </div>

        <Footer class="fixed bottom-0"></Footer>


    </main>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.slider-red {
    --slider-connect-bg: #1f3357;
    --slider-tooltip-bg: #1f3357;
    --slider-handle-ring-color: black;
    --slider-height: 10px;
    --slider-radius: 9999px;
}
</style>
