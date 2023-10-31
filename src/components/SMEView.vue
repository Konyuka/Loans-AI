<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits([
    'employmentView',
    'verificationView'
]);

const docsModal = ref(false);

const applyNoDocs = () => {
    const noDocs = true
    emit('verificationView', noDocs);
}

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
<main>


    <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


        <div class="h-screen flex place-content-center w-full">
            <div class="">

                <div class="flex w-[90vw] relative">
                    <div class="mt-1 mr-[8vh]">
                        <i @click="$emit('dashView')" class="fas fa-caret-left fa-xl"></i>
                    </div>
                    <div class="text-center">
                        <h2 class="text-xl font-semibold text-primary">Financial Information</h2>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-2 my-5">

                    <div>
                        <div class="relative mt-2 grid grid-cols-1 gap-2">
                            <div>
                                <input id="name" name="name" type="text" autocomplete="first-name" required
                                    class="placeholder:text-md px-1 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-center shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                    placeholder="Business Name">

                            </div>
                            <div>
                                <input id="name" name="name" type="number" autocomplete="first-name" required
                                    class="placeholder:text-md px-1 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-center shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                    placeholder="Business Registration Number">

                            </div>
                            <div>
                                <input id="name" name="name" type="number" autocomplete="first-name" required
                                    class="placeholder:text-md px-1 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-center shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                    placeholder="Years of Operation">

                            </div>
                            <div>
                                <select id="location" name="location"
                                    class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide font-meduim text-left shadow-lg ring-1 ring-inset ring-white focus:ring-primary sm:text-sm sm:leading-6">
                                    <option selected>Type of Business</option>
                                    <option>Manufacturing</option>
                                    <option>Retails</option>
                                    <option>Services</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div class="mt-5">
                        <h1 class="text-center text-2xl text-primary font-semibold">Upload documents</h1>
                        <p class="text-xs leading-5 text-gray-600 text-center">PNG, JPG or PDF</p>
                        <fieldset>
                            <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">

                                <div class="relative flex items-start py-4">
                                    <div class="min-w-0 flex-1 text-sm leading-6">
                                        <label for="side-null"
                                            class="select-none font-medium text-primary text-lg">Business License
                                        </label>
                                    </div>
                                    <div class="text-center">
                                        <span class="mx-auto">
                                            <i class="far fa-cloud-arrow-up fa-lg"></i>
                                            <br>
                                        </span>
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                            <span class="text-center text-sm">Upload file</span>
                                        </label>
                                    </div>
                                </div>

                                <div class="relative flex items-start py-4">
                                    <div class="min-w-0 flex-1 text-sm leading-6">
                                        <label for="side-null" class="select-none font-medium text-primary text-lg">
                                            Bank Statements <br> <span class="text-xs">(Last 6 months)</span>
                                        </label>
                                    </div>
                                    <div class="text-center">
                                        <span class="mx-auto">
                                            <i class="far fa-cloud-arrow-up fa-lg"></i>
                                            <br>
                                        </span>
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                            <span class="text-center text-sm">Upload file</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="relative flex items-start py-4">
                                    <div class="min-w-0 flex-1 text-sm leading-6">
                                        <label for="side-null" class="select-none font-medium text-primary text-lg">
                                            Financial Statements <br> <span class="text-xs">(Last 2 years)</span>
                                        </label>
                                    </div>
                                    <div class="text-center">
                                        <span class="mx-auto">
                                            <i class="far fa-cloud-arrow-up fa-lg"></i>
                                            <br>
                                        </span>
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                            <span class="text-center text-sm">Upload file</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                    </div>

                    <div class="mt-10 flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" required
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary">
                        <label for="remember-me" class="ml-3 block text-xs leading-6 text-gray-900">I accept that I have
                            read our <a href="#" class="text-primary font-semibold hover:cursor-pointer">terms &
                                conditions</a>
                        </label>
                    </div>





                </div>

                <div class="flex flex-col place-content-center my-10 pb-10">
                    <button @click="$emit('pendingView')" type="button"
                        class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <span>
                            Submit Application
                        </span>

                    </button>

                </div>



            </div>
        </div>

        <div v-if="docsModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 bg-primary bg-opacity-60"></div>

            <div class="pb-[30vh] fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div>

                            <div class="mt-3 text-center sm:mt-5">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Application
                                    without documents</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">
                                        For loan applications without the required documents, we only allow cash pick up
                                        from our branches.
                                        You only need to provide a collateral of you labour card and passport for your
                                        loan request to be processed.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <!-- @click="applyNoDocs()"  -->
                            <button @click="$emit('verificationView', 'noDocs')" type="button"
                                class="inline-flex w-full justify-center rounded-2xl bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">Proceed</button>
                            <button @click="docsModal = !docsModal" type="button"
                                class="mt-3 inline-flex w-full justify-center rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0">Cancel</button>
                        </div>
                    </div>
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
