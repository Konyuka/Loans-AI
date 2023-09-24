<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">
                    <div data-wow-duration="1s" class="wow animate__jello flex lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Simple Pay</span>
                            <img class="w-auto" src="@/assets/img/logo.png" alt="">
                        </a>
                    </div>

                    <div class="mt-10">
                        <div class="relative">

                            <input id="large-range" type="range" value="50" min="20" max="200" step="20"
                                class="w-full h-2 bg-gray rounded-lg appearance-none cursor-pointer range-lg dark:bg-black">
                            <!-- <div class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                                unselectable="on" onselectstart="return false;" style="left: 11.2903%;">
                                <div class="relative -mt-2 w-1">
                                    <div class="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                                        style="margin-left: -25px;">
                                        <div class="relative shadow-md">
                                            <div class="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                                                $ 15</div>
                                            <svg class="absolute text-black w-full h-2 left-0 top-100" x="0px" y="0px"
                                                viewBox="0 0 255 255" xml:space="preserve">
                                                <polygon class="fill-current" points="0,0 127.5,127.5 255,0">
                                                </polygon>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">10</div>
                            <div class="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">150</div>

                        </div>

                        <input
        type="range" min="0" max="100" value="50" step="any" 
        class="w-full h-full appearance-none flex items-center cursor-pointer bg-transparent z-30
        [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5 [&::-moz-range-thumb]:appearance-none
        [&::-ms-thumb]:bg-blue-600 [&::-ms-thumb]:rounded-full [&::-ms-thumb]:border-0 [&::-ms-thumb]:w-2.5 [&::-ms-thumb]:h-2.5 [&::-ms-thumb]:appearance-none
        [&::-webkit-slider-runnable-track]:bg-neutral-200 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:overflow-hidden [&::-moz-range-track]:bg-neutral-200 [&::-moz-range-track]:rounded-full [&::-ms-track]:bg-neutral-200 [&::-ms-track]:rounded-full
        [&::-moz-range-progress]:bg-blue-400 [&::-moz-range-progress]:rounded-full [&::-ms-fill-lower]:bg-blue-400 [&::-ms-fill-lower]:rounded-full [&::-webkit-slider-thumb]:shadow-[-999px_0px_0px_990px_#4e97ff]
    ">

                        <!-- component -->
                        <div class="flex  w-64 m-auto items-center h-32 justify-center">
                            <div class="py-1 relative min-w-full">
                                <div class="h-2 bg-gray-200 rounded-full">
                                    <div class="absolute h-2 rounded-full bg-teal-600 w-0" style="width: 58.5714%;"></div>
                                    <div class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                                        unselectable="on" onselectstart="return false;" style="left: 58.5714%;">
                                        <div class="relative -mt-2 w-1">
                                            <div class="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                                                style="margin-left: -20.5px;">
                                                <div class="relative shadow-md">
                                                    <div
                                                        class="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                                                        92</div>
                                                    <svg class="absolute text-black w-full h-2 left-0 top-100" x="0px"
                                                        y="0px" viewBox="0 0 255 255" xml:space="preserve">
                                                        <polygon class="fill-current" points="0,0 127.5,127.5 255,0">
                                                        </polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">10</div>
                                    <div class="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">150</div>
                                </div>
                            </div>
                        </div>

                        <!-- between two numbers -->

                        <div class="flex w-64 m-auto items-center h-32 justify-center">
                            <div class="py-1 relative min-w-full">
                                <div class="h-2 bg-gray-200 rounded-full">
                                    <div class="absolute h-2 rounded-full bg-black w-0"
                                        style="width: 24.1935%; left: 11.2903%;"></div>
                                    <div class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                                        unselectable="on" onselectstart="return false;" style="left: 11.2903%;">
                                        <div class="relative -mt-2 w-1">
                                            <div class="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                                                style="margin-left: -25px;">
                                                <div class="relative shadow-md">
                                                    <div
                                                        class="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                                                        $ 15</div>
                                                    <svg class="absolute text-black w-full h-2 left-0 top-100" x="0px"
                                                        y="0px" viewBox="0 0 255 255" xml:space="preserve">
                                                        <polygon class="fill-current" points="0,0 127.5,127.5 255,0">
                                                        </polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
                                        unselectable="on" onselectstart="return false;" style="left: 35.4839%;">
                                        <div class="relative -mt-2 w-1">
                                            <div class="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                                                style="margin-left: -25px;">
                                                <div class="relative shadow-md">
                                                    <div
                                                        class="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                                                        $ 30</div>
                                                    <svg class="absolute text-black w-full h-2 left-0 top-100" x="0px"
                                                        y="0px" viewBox="0 0 255 255" xml:space="preserve">
                                                        <polygon class="fill-current" points="0,0 127.5,127.5 255,0">
                                                        </polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">$ 8</div>
                                    <div class="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">$ 70</div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="flex flex-col place-content-center mt-5">
                        <button type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Get instant loan
                            </span>

                        </button>
                    </div>

                </div>
            </div>



        </div>


    </main>
</template>

<style></style>
