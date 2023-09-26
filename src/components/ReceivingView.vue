<script setup>



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
                                                class="select-none font-medium text-primary text-lg">Card or Bank</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-primary">
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null" class="select-none font-medium text-primary text-lg">Cash
                                                Collection</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-primary">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                        <div class="mt-10">
                            <h2 class="text-lg font-medium text-gray-900 text-center">Card or Bank transfer details</h2>

                            <fieldset class="mt-4">
                                <legend class="sr-only">Payment type</legend>
                                <div class="space-y-4 flex items-center space-x-10 space-y-0">
                                    <div class="flex items-center">
                                        <input id="credit-card" name="payment-type" type="radio" checked
                                            class="h-4 w-4 border-gray-300 text-primary focus:ring-primary">
                                        <label for="credit-card"
                                            class="ml-3 block text-sm font-medium text-gray-700">Credit/Debit card</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="paypal" name="payment-type" type="radio"
                                            class="h-4 w-4 border-gray-300 text-primary focus:ring-primary">
                                        <label for="paypal" class="ml-3 block text-sm font-medium text-gray-700">Bank
                                            transfer</label>
                                    </div>
                                </div>
                            </fieldset>

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







                    </div>

                    <div class="flex flex-col place-content-center my-10 pb-10">
                        <button type="button"
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
