<script setup>
const emit = defineEmits([
    'pendingView'
]);
</script>

<template>
    <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">

        <div class="flex">
            <div class="mt-1 mr-[7vh]">
                <!-- <i @click="$emit('verificationView')" class="fas fa-arrow-left fa-xl"></i> -->
            </div>
            <div>
                <h2 class="text-xl font-semibold text-primary">Direct Debit Authorization</h2>
            </div>
        </div>

        <div class=" my-6">

            <div>

                <div class="grid grid-cols-1 gap-2">
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

                </div>



            </div>

            <div class="flex items-center mt-5">
                <input id="remember-me" name="remember-me" type="checkbox" required
                    class="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary">
                <label for="remember-me" class="ml-3 block text-xs leading-6 text-gray-900">
                    I [name] hereby declare that i am the holder of [bank_account_input] at [bank select] [bank branch] . I
                    hereby authorize [bank] to periodically debit my account every [loan duration/installment] and pay
                    Simple Pay Capital Limited the amount of [loan amount].
                </label>
            </div>

        </div>



        <div class="flex flex-col place-content-center my-10 pb-10">
            <button @click="$emit('pendingView')" type="button"
                class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span>
                    Submit for approval
                </span>

            </button>
        </div>
    </div>
</template>

