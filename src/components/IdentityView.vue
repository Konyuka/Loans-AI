<script setup>

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex">
                        <div class="mt-1 mr-[10vh]">
                            <i class="fas fa-caret-left fa-xl"></i>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-primary">Verify Identity</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-5 my-5">

                        <p class="text-primary text-md">
                            Financial regulations require us to verify your ID <br> <br>
                            This helps prevent someone else from creating a Simple Pay account in your name
                        </p>

                        <div class="mt-2">
                            <h1 class="text-center text-2xl text-primary font-semibold">Type of document</h1>

                            <fieldset>
                                <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">

                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Identity card</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Passport</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Driving License</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div>
                                    </div>



                                </div>
                            </fieldset>

                        </div>

                        <div class="text-center mt-5">
                            <span class="mx-auto">
                                <i class="far fa-cloud-arrow-up fa-2x"></i>
                                <br>
                            </span>
                            <!-- <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                    clip-rule="evenodd" />
                            </svg> -->
                           
                            <label for="file-upload"
                                class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                <span class="text-center">Upload file</span>
                            </label>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG or PDF</p>
                        </div>

                    </div>

                    <div class="flex flex-col place-content-center my-10">
                        <button type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Next <i class="far fa-caret-right"></i>
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
}</style>
