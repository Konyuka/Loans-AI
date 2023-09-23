<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";


</script>

<template>
  <main>
    <div class="bg-white h-screen flex place-content-center">

      <div class="self-center relative isolate px-6 pt-7 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>

        <div class="mx-auto max-w-2xl py-10">
          <div data-wow-duration="1s" class="wow animate__jello flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Simple Pay</span>
              <img class="h-20 w-auto" src="@/assets/img/logo.png" alt="">
            </a>
          </div>


          <div class="text-left">

            <p class="mt-14 text-sm leading-8 text-gray-600">
              At Simple Pay, we understand that life's opportunities sometimes require a financial boost. Our
              range of flexible loan solutions is designed to empower you on your journey to success. 
              <br> <br>
              Whether you're
              pursuing your dreams or managing unexpected expenses, we're here to support you every step of the way.
              Join us today and experience financial freedom like never before.
            </p>

            <div class="mt-20 flex items-center justify-center gap-x-14">
              <RouterLink to="/register" data-wow-delay="0.5s" data-wow-duration="1s"
                class="wow animate__backInUp rounded-lg bg-primary px-5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get Started
              </RouterLink>

              <!-- <RouterLink to="/login" data-wow-delay="1s" data-wow-duration="1s"
                class="wow animate__backInUp text-md font-semibold leading-6 text-gray-900">Sign in <span aria-hidden="true">→</span></RouterLink> -->
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>
</template>

<style></style>
