<script setup>
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue";

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
                    <div data-wow-duration="1s" class="w-[91vw] flex flex-row justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Simple Pay</span>
                            <img class="h-10 w-auto" src="@/assets/img/logo.png" alt="">
                        </a>
                        <div class="">
                            <i class="fas fa-bell fa-xl text-primary mr-7"></i>
                            <i class="fas fa-user fa-xl text-primary"></i>
                        </div>
                    </div>

                    <div class="mt-5 grid grid-cols-1 gap-2">
                       
                    </div>



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
}
</style>
