<script setup>
import { ref, computed, onMounted } from "vue";
import { useUserData } from '@/stores/userData'
const userData = useUserData()

const emit = defineEmits([
    'dashView'
])

const timeRemaining = ref(5);
const timer = ref(null);

const value1Data = ref(null);
const value2Data = ref(null);
const value3Data = ref(null);
const value4Data = ref(null);

const formattedTime = computed(() => {
    const minutes = Math.floor(timeRemaining.value / 60);
    const seconds = timeRemaining.value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

const spaceUserData = (number) => {
    const numberString = String(number);
    const characters = numberString.split('');
    characters.reverse();
    for (let i = 3; i < characters.length; i += 4) {
        characters.splice(i, 0, ' ');
    }
    characters.reverse();
    const formattedNumberString = characters.join('');
    return formattedNumberString;
}

const resetTimer = () => {
    clearInterval(timer.value);
    timer.value = setInterval(updateTime, 1000);
    timeRemaining.value = 90;
}

const updateTime = () => {
    if (timeRemaining.value > 0) {
        timeRemaining.value -= 1;
    } else {
        clearInterval(timer.value);
    }
}

const focusNextInput = (inputNumber) => {
     if (inputNumber === null) {
        value2.focus();
    } else if (inputNumber === 1) {
        value2.focus();
    } else if (inputNumber === 2) {
        value3.focus();
    } else if (inputNumber === 3) {
        value4.focus();
    }
}

const validateCode = () => {
   emit('dashView') 
}

onMounted(() => {
    timer.value = setInterval(updateTime, 1000);
});

</script>

<template>
    <main>


        <div class="relative isolate px-6 pt-7 lg:px-8 w-screen">
            <div class="flex">
                <div class="mt-1 mr-[7vh]">
                    <i class="fas fa-arrow-left fa-xl"></i>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-primary">Enter digit verification</h2>
                </div>
            </div>

            <div class="h-[80vh] flex place-content-center w-full">
                <div class="self-center">
                    <h1 class="text-4xl text-center">Enter 4-digit verification code</h1>
                    <div class="text-center mt-10">
                        <p>Enter the code sent to <br>

                            <span class="font-semibold">
                                +968 {{ spaceUserData(userData.userData.number) }}
                            </span>
                        </p>
                        <p v-if="timeRemaining > 0">This code wil expire in <br>
                        <div>
                            <span class="font-semibold">
                                {{ formattedTime }}
                            </span>
                        </div>
                        </p>
                    </div>

                    <div v-if="timeRemaining <= 0" class="mt-10">
                        <button @click="resetTimer()" type="button"
                            class="w-full rounded-2xl bg-primary px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Resend Code
                        </button>
                    </div>

                    <div class="grid grid-cols-4 gap-5 mt-20">
                        <div class="relative flex place-content-center rounded-md bg-black bg-opacity-5 h-20 w-18">
                            <div>
                                <input  @input="focusNextInput(1)" v-model="value1Data"  type="number" name="value1" id="value1"
                                    class="bg-black bg-opacity-5 block w-full h-full text-center text-4xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div class="flex place-content-center rounded-md bg-black bg-opacity-5 h-20 w-18">
                            <div>
                                <input  @input="focusNextInput(2)" v-model="value2Data" type="number" name="value2" id="value2"
                                    class="bg-black bg-opacity-5 block w-full h-full text-center text-4xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div class="flex place-content-center rounded-md bg-black bg-opacity-5 h-20 w-18">
                            <div>
                                <input @input="focusNextInput(3)" v-model="value3Data" type="number" name="value3" id="value3"
                                    class="bg-black bg-opacity-5 block w-full h-full text-center text-4xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div class="flex place-content-center rounded-md bg-black bg-opacity-5 h-20 w-18">
                            <div>
                                <input @input="validateCode()" v-model="value4Data" type="number" name="value4" id="value4"
                                    class="bg-black bg-opacity-5 block w-full h-full text-center text-4xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    </main>
</template>

<style></style>
