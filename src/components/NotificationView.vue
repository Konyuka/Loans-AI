<script setup>
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue";
import Nav from "./Nav.vue";


const emit = defineEmits([
    'identityView'
]);

const amount = ref(20);
const duration = ref(1);

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-5 lg:px-8 w-screen">


            <div class="min-h-screen flex place-content-center w-full">
                <div class="">
                    <Nav @notificationView="$emit('notificationView')" @profileView="$emit('profileView')" />

                    
                        <div class="mt-2 text-center">
                            <h2 class="text-xl font-semibold text-primary">Notifications</h2>
                        </div>

                    <ul role="list" class="divide-y divide-gray-100">
                        <li class="flex justify-between gap-x-6 py-5">
                            <div class="flex min-w-0 gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <p class="text-sm font-semibold leading-6 text-gray-900"></p>
                                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                        Following the previous release, we wish to inform you
                                    </p>
                                </div>
                            </div>
                            <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p class="mt-1 text-xs leading-5 text-gray-500"> <time
                                        datetime="2023-01-23T13:23Z">4d ago</time></p>
                            </div>
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <div class="flex min-w-0 gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <p class="text-sm font-semibold leading-6 text-gray-900">Loan Payment Remider 1</p>
                                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                        Following the previous release, we wish to inform you
                                    </p>
                                </div>
                            </div>
                            <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p class="mt-1 text-xs leading-5 text-gray-500"> <time
                                        datetime="2023-01-23T13:23Z">4d ago</time></p>
                            </div>
                        </li>
                        <li class="flex justify-between gap-x-6 py-5">
                            <div class="flex min-w-0 gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <p class="text-sm font-semibold leading-6 text-gray-900">Loan Payment Remider 2</p>
                                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                        Following the previous release, we wish to inform you
                                    </p>
                                </div>
                            </div>
                            <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p class="mt-1 text-xs leading-5 text-gray-500"> <time
                                        datetime="2023-01-23T13:23Z">4d ago</time></p>
                            </div>
                        </li>

                    </ul>




                </div>
            </div>



        </div>

        <Footer class="fixed bottom-0"></Footer>


    </main>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.slider-red {
    --slider-connect-bg: #1f3357;
    --slider-tooltip-bg: #1f3357;
    --slider-handle-ring-color: black;
    --slider-height: 10px;
    --slider-radius: 9999px;
}</style>
