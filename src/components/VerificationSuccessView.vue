<script setup>



</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex w-[90vw] relative">
                        <div class="mt-1 mr-[8vh]">
                            <!-- <i class="fas fa-caret-left fa-xl"></i> -->
                        </div>
                        <div class="text-center">
                            <h2 class="text-xl font-semibold text-primary">Verification Successful</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-2 my-5">

                        <div class="grid grid-cols-2 gap-1 pt-5">

                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Loan taken</p>
                                <p class="self-center text-primary font-bold">200 OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Processing Fee(3%)</p>
                                <p class="self-center text-primary font-bold">200 OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Receiving Amount</p>
                                <p class="self-center text-primary font-bold">200 OMR</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Interest</p>
                                <p class="self-center text-primary font-bold">3% Monthly</p>
                            </div>
                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Loan Duration</p>
                                <p class="self-center text-primary font-bold">3 Month(s)</p>
                            </div>

                            <div class="place-content-center flex flex-col  bg-white shadow-lg rounded-xl  h-20 w-full">
                                <p class="self-center text-medium tracking-widest text-sm text-gray">Next due date</p>
                                <p class="self-center text-primary font-bold">13th Nov 2023</p>
                            </div>


                        </div>

                        <div class="flex items-center py-5 mt-3">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ">
                            <label for="remember-me" class="ml-3 block text-sm font-semibold leading-6 text-gray-900">I accept the loan terms above
                            </label>
                        </div>


                    </div>

                    <div class="flex flex-col place-content-center my-10 pb-10">
                        <button type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Receive Funds
                            </span>

                        </button>
                    </div>

                </div>
            </div>



        </div>


    </main>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.slider-red {
    --slider-connect-bg: #292561;
    --slider-tooltip-bg: #292561;
    --slider-handle-ring-color: black;
    --slider-height: 10px;
    --slider-radius: 9999px;
}
</style>
