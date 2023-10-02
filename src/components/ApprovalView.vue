<script setup>

</script>

<template>
    <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">

        <div class="flex">
            <div class="mt-1 mr-[7vh]"> 
                <!-- <i @click="$emit('verificationView')" class="fas fa-arrow-left fa-xl"></i> -->
            </div>
            <div>
                <!-- <h2 class="text-xl font-semibold text-primary">Direct Debit Authorization</h2> -->
            </div>
        </div>

        <div class="min-h-[70vh] my-6 place-content-center flex">
            <p class="self-center text-center text-black">
                We have received your submission. <br>
                Please check your dashboard to check the status of your loan application <br>
                once approved, you will be able to receive your funds
            </p>
        </div>



        <div class="flex flex-col place-content-center my-10 pb-10">
            <button @click="$emit('dashView')" type="button"
                class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span>
                    Dashboard
                </span>

            </button>
        </div>
    </div>
</template>

