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

const currentTab = ref('history');
const summaryModal = ref(false);

const month = ref({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
})

const setTab = (tab) => {
    currentTab.value = tab
}


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


                    <div class="mt-5 text-center">
                        <span class="isolate inline-flex rounded-md shadow-sm">

                            <button type="button" @click="setTab('profile')"
                                :class="[currentTab == 'profile' ? 'bg-primary text-white' : 'bg-white text-gray-900']"
                                class="relative inline-flex items-center rounded-l-md px-5 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                                User Profile
                            </button>

                            <button type="button" @click="setTab('history')"
                                :class="[currentTab == 'history' ? 'bg-primary text-white' : 'bg-white text-gray-900']"
                                class="relative -ml-px inline-flex items-center rounded-r-md px-5 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                                Loan History
                            </button>

                        </span>
                    </div>

                    <div v-if="currentTab == 'profile'" class="grid grid-cols-1 gap-3 mb-5">

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

                        <div class="relative mt-2 w-full">
                            <select id="location" name="location"
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6">
                                <option selected disabled>Bank</option>
                                <option>Bank 1</option>
                                <option>Bank 2</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-piggy-bank"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Branch">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-olive-branch"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="name" name="name" type="text" autocomplete="first-name" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Account Number">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-tachograph-digital"></i>
                            </div>
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
                            <!-- <h1 class="text-center text-xl text-primary font-semibold">Documents</h1> -->
                            <!-- <p class="text-xs leading-5 text-gray-600 text-center">PNG, JPG or PDF</p> -->
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
                                                    <span class="text-center text-xs">Download</span>
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
                                                    <span class="text-center text-xs">Update</span>
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
                                                    <span class="text-center text-xs">Download</span>
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
                                                    <span class="text-center text-xs">Update</span>
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
                                                    <span class="text-center text-xs">Download</span>
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
                                                    <span class="text-center text-xs">Update</span>
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

                    <div v-if="currentTab == 'history'">
                        <ul role="list" class="divide-y divide-gray-100">
                            <li class="flex items-center justify-between gap-x-6 py-5">
                                <div class="min-w-0">
                                    <div class="flex items-start gap-x-3">
                                        <p class="text-sm font-semibold leading-6 text-gray-900">Applied for 160 OMR</p>
                                    </div>
                                    <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                        <p class="whitespace-nowrap">Applied:
                                            <time datetime="2023-03-17T00:00Z">Mar 17, 2023</time>
                                        </p>
                                        <svg viewBox="0 0 2 2" class="h-1 w-1 fill-current bg-primary">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <p class="whitespace-nowrap">Paid:
                                            <time datetime="2023-03-17T00:00Z">Apr 17, 2023</time>
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-none items-center gap-x-4">
                                    <div class="relative flex-none">
                                        <button @click="summaryModal=!summaryModal" type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                            id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                                            <span class="sr-only">Open options</span>
                                            <i class="fas fa-eye text-primary"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li class="flex items-center justify-between gap-x-6 py-5">
                                <div class="min-w-0">
                                    <div class="flex items-start gap-x-3">
                                        <p class="text-sm font-semibold leading-6 text-gray-900">Applied for 160 OMR</p>
                                    </div>
                                    <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                        <p class="whitespace-nowrap">Applied:
                                            <time datetime="2023-03-17T00:00Z">Mar 17, 2023</time>
                                        </p>
                                        <svg viewBox="0 0 2 2" class="h-1 w-1 fill-current bg-primary">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <p class="whitespace-nowrap">Paid:
                                            <time datetime="2023-03-17T00:00Z">Apr 17, 2023</time>
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-none items-center gap-x-4">
                                    <div class="relative flex-none">
                                        <button @click="summaryModal=!summaryModal" type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                            id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                                            <span class="sr-only">Open options</span>
                                            <i class="fas fa-eye text-primary"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li class="flex items-center justify-between gap-x-6 py-5">
                                <div class="min-w-0">
                                    <div class="flex items-start gap-x-3">
                                        <p class="text-sm font-semibold leading-6 text-gray-900">Applied for 160 OMR</p>
                                    </div>
                                    <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                        <p class="whitespace-nowrap">Applied:
                                            <time datetime="2023-03-17T00:00Z">Mar 17, 2023</time>
                                        </p>
                                        <svg viewBox="0 0 2 2" class="h-1 w-1 fill-current bg-primary">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <p class="whitespace-nowrap">Paid:
                                            <time datetime="2023-03-17T00:00Z">Apr 17, 2023</time>
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-none items-center gap-x-4">
                                    <div class="relative flex-none">
                                        <button @click="summaryModal=!summaryModal" type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900"
                                            id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                                            <span class="sr-only">Open options</span>
                                            <i class="fas fa-eye text-primary"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>



                </div>
            </div>

            <div v-if="summaryModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-primary bg-opacity-70"></div>

                <div class="mb-[10vh] fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                            <div>
                                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="mt-3 text-center sm:mt-5">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                        Loan Application Summary
                                    </h3>
                                    <div class="mt-2">
                                        <div class="grid grid-cols-2 gap-1">

                                            <div
                                                class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                                <p class="self-center text-medium text-sm text-primary-100">Loan Requested
                                                </p>
                                                <p class="self-center text-primary font-bold">160  OMR</p>
                                            </div>
                                            <div
                                                class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                                <p class="self-center text-medium text-sm text-primary-100">Loan Term</p>
                                                <p class="self-center text-primary font-bold">3 Month(s)</p>
                                            </div>
                                            <div
                                                class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                                <p class="self-center text-medium text-sm text-primary-100">Monthly Interest
                                                </p>
                                                <p class="self-center text-primary font-bold">3 OMR</p>
                                            </div>
                                            <div
                                                class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                                <p class="self-center text-medium text-sm text-primary-100">Total Interest
                                                </p>
                                                <p class="self-center text-primary font-bold">9 OMR
                                                </p>
                                            </div>
                                            <div
                                                class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                                <p class="self-center text-medium text-sm text-primary-100">Processing
                                                    Fee(1.5%)</p>
                                                <p class="self-center text-primary font-bold">1.5 OMR</p>
                                            </div>

                                            <div
                                                class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                                <p class="self-center text-medium text-sm text-gray">Late payment fee</p>
                                                <p class="self-center text-primary font-bold text-center text-sm">2 OMR (2%)</p>
                                            </div>

                                            <div
                                                class="col-span-2 place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                                <p class="self-center text-medium text-sm text-gray">You paid back</p>
                                                <p class="self-center text-primary font-bold text-center text-lg">175 OMR</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-6">
                                <button type="button" @click="summaryModal=!summaryModal"
                                    class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Close Summary
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>

        <Footer class="fixed bottom-0"></Footer>


    </main></template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>.slider-red {
    --slider-connect-bg: #1f3357;
    --slider-tooltip-bg: #1f3357;
    --slider-handle-ring-color: black;
    --slider-height: 10px;
    --slider-radius: 9999px;
}</style>
