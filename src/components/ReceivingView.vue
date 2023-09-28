<script setup>
import { ref, watch } from "vue";


const emit = defineEmits([
    'dueView'
]);

const cash = ref(false)
const card = ref(false)
watch(cash, (newX) => {
    if (newX == true) {
        card.value = false;
    }
});
watch(card, (newX) => {
    if (newX == true) {
        cash.value = false;
    }
});


</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex w-[90vw] relative">

                        <div class="text-center">
                            <h2 class="text-xl font-semibold text-primary">How would you like to receive your funds?</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-2 my-5">

                        <div class="mt-5">
                            <h1 class="text-center text-2xl text-primary font-semibold">Disbursment type</h1>
                            <fieldset>
                                <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">

                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Card</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input v-model="card" id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"
                                                class="h-4 w-4 rounded border-black text-primary focus:ring-primary">
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null" class="select-none font-medium text-primary text-lg">Cash
                                            </label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input v-model="cash" id="comments" aria-describedby="comments-description"
                                                name="comments" type="checkbox"
                                                class="h-4 w-4 rounded border-black text-primary focus:ring-primary">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                        <div v-if="card" class="mt-10">
                            <h2 class="text-lg font-medium text-gray-900 text-center">Card Details</h2>



                            <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                                <div class="col-span-4">
                                    <label for="card-number" class="block text-sm font-medium text-gray-700">Card
                                        number</label>
                                    <div class="mt-1">
                                        <input type="text" id="card-number" name="card-number" autocomplete="cc-number"
                                            class="block w-full rounded-md border-gray-300 shadow-xl focus:border-primary focus:ring-black sm:text-sm">
                                    </div>
                                </div>

                                <div class="col-span-4">
                                    <label for="name-on-card" class="block text-sm font-medium text-gray-700">Name on
                                        card</label>
                                    <div class="mt-1">
                                        <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name"
                                            class="block w-full rounded-md border-gray-300 shadow-xl focus:border-primary focus:ring-black sm:text-sm">
                                    </div>
                                </div>

                                <div class="col-span-3">
                                    <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expiration
                                        date (MM/YY)</label>
                                    <div class="mt-1">
                                        <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp"
                                            class="block w-full rounded-md border-gray-300 shadow-xl focus:border-primary focus:ring-black sm:text-sm">
                                    </div>
                                </div>

                                <div>
                                    <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                                    <div class="mt-1">
                                        <input type="text" name="cvc" id="cvc" autocomplete="csc"
                                            class="block w-full rounded-md border-gray-300 shadow-xl focus:border-primary focus:ring-black sm:text-sm">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="cash" class="mt-10">
                            <h2 class="text-lg font-medium text-black text-center">Office Location</h2>



                            <div class="mt-3">
                                <div class="bg-white py-3">
                                    <div class="mx-auto max-w-7xl ">
                                        <div
                                            class="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                            <div>
                                                <h3 class="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Muscat</h3>
                                                <address
                                                    class="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                                                    <p>4556 Brendan Ferry</p>
                                                    <p>Muscat, CA 90210</p>
                                                </address>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <!-- component -->
                                <section class="mt-3 text-gray-600 body-font relative h-[50vh]">
                                    <div class="absolute inset-0 bg-gray-300">
                                        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0"
                                            title="map" scrolling="no"
                                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                                            style=""></iframe>
                                    </div>

                                </section>
                            </div>
                        </div>







                    </div>

                    <div v-if="cash != false || card != false" class="flex flex-col place-content-center my-10 pb-10">
                        <button @click="$emit('dueView')" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Confirm
                            </span>

                        </button>
                    </div>

                </div>
            </div>



        </div>


    </main>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>.slider-red {
    --slider-connect-bg: #292561;
    --slider-tooltip-bg: #292561;
    --slider-handle-ring-color: black;
    --slider-height: 10px;
    --slider-radius: 9999px;
}</style>
