<script setup>
import { ref, onMounted } from "vue";

onMounted(()=>{
    getFiancialInfo();
});

const financialInfo = ref(null);
const errorMessage = ref(false);

const getFiancialInfo = () => {
    axios.post(route('named.route'))
    .then((response)=>{
        console.log(response.data)
        financialInfo.value = response.data;
    })
    .catch((err)=>{
        console.log(err);
        errorMessage.value =! errorMessage.value
    });

    
}


</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">


            <div class="h-screen flex place-content-center w-full">
                <div class="">

                    <div class="flex w-[90vw] relative">
                        <div class="mt-1 mr-[8vh]">
                            <i class="fas fa-caret-left fa-xl"></i>
                        </div>
                        <div class="text-center">
                            <h2 class="text-xl font-semibold text-primary">Financial Information</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-2 my-5">

                        <div class="relative mt-2">
                            <input id="email" name="email" type="number" autocomplete="email" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Value of Assets">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-envelope"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="email" name="email" type="number" autocomplete="email" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Value of Loan or Debts">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-envelope"></i>
                            </div>
                        </div>

                        <div class="relative mt-2">
                            <input id="email" name="email" type="number" autocomplete="email" required
                                class="px-10 block w-full rounded-md border-0 bg-white py-5 text-black tracking-wide  font-meduim text-left shadow-lg ring-1 ring-inset ring-white sm:text-sm sm:leading-6 focus:ring-primary"
                                placeholder="Monthly Expense">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="far fa-envelope"></i>
                            </div>
                        </div>

                        <div class="mt-10">
                            <h1 class="text-center text-2xl text-primary font-semibold">Upload documents</h1>

                            <fieldset>
                                <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">

                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Credit Score</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Payslip</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Salary Certificate</label>
                                        </div>
                                        <div class="ml-3 flex h-6 items-center">
                                            <input id="side-null" name="plan" type="radio" checked
                                                class="h-4 w-4 border-gray-300 text-primary focus:ring-indigo-600">
                                        </div>
                                    </div>
                                    <div class="relative flex items-start py-4">
                                        <div class="min-w-0 flex-1 text-sm leading-6">
                                            <label for="side-null"
                                                class="select-none font-medium text-primary text-lg">Bank Statement</label>
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
                            <label for="file-upload"
                                class="relative cursor-pointer rounded-md bg-white font-semibold text-primary">
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                <span class="text-center">Upload file</span>
                            </label>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG or PDF</p>
                        </div>



                    </div>

                    <div class="flex flex-col place-content-center my-10 pb-10">
                        <button type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                Complete Verification 
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
