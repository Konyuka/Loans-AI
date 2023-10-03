<script setup>

</script>


<template>
    <div>
        <div data-wow-duration="1s" class="w-[90vw] flex flex-row justify-between">
            <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Simple Pay</span>
                <img class="h-10 w-auto" src="@/assets/img/logo.png" alt="">
            </a>
            <div class="">
                <i @click="$emit('notificationView')" class="fas fa-bell fa-xl text-primary mr-7"></i>
                <i @click="$emit('profileView')" class="fas fa-user fa-xl text-primary"></i>
            </div>
        </div>
    </div>
</template>