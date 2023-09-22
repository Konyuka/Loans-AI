<script setup>
import { RouterLink } from 'vue-router'
import { ref } from "vue";

const mobileMenu = ref(false)

</script>

<template>
  <main>
    <div class="bg-white">
      <header class="absolute inset-x-0 top-0 z-50">
        <div class="mx-auto max-w-7xl">
          <div class="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav class="flex items-center justify-between lg:justify-start" aria-label="Global">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img alt="Your Company" class="h-18 w-auto" src="@/assets/img/logo.png">
              </a>

              <button @click="mobileMenu=!mobileMenu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <div class="hidden lg:ml-12 lg:flex lg:gap-x-14">
                <a href="#"
                  class="text-md font-semibold leading-6 text-black transform transition hover:scale-125 duration-600 ease-in-out hover:text-accent">Products</a>
                <a href="#"
                  class="text-md font-semibold leading-6 text-black transform transition hover:scale-125 duration-600 ease-in-out hover:text-accent">Contacts</a>
                <a href="#"
                  class="text-md font-semibold leading-6 text-black transform transition hover:scale-125 duration-600 ease-in-out hover:text-accent">About</a>
              </div>
            </nav>
          </div>
        </div>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div v-if="mobileMenu" class="lg:hidden" role="dialog" aria-modal="true">
          <!-- Background backdrop, show/hide based on slide-over state. -->
          <div class="fixed inset-0 z-50"></div>
          <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="@/assets/img/logo.png" alt="">
              </a>
              <button @click="mobileMenu = !mobileMenu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                    in</a>
                </div>
                <div class="py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                    in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="relative">
        <div class="mx-auto max-w-7xl">
          <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div class="relative px-6 py-40 lg:px-8  lg:pr-0">
              <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                
                <h1 class="text-3xl font-bold tracking-tight text-primary leading-10">
                  Unlock Your Financial Potential <br>
                  Your Bridge to a Brighter Tomorrow
                </h1>
                <p class="mt-8 text-md leading-8 text-black">
                  At Simple Pay, we understand that life's opportunities sometimes require a financial boost. Our
                  range of flexible loan solutions is designed to empower you on your journey to success. Whether you're
                  pursuing your dreams or managing unexpected expenses, we're here to support you every step of the way.
                  Join us today and experience financial freedom like never before.
                </p>
                <div class="mt-16 flex items-center gap-x-6">
                  <RouterLink to="/register"
                    class="transform transition hover:scale-125 duration-600 ease-in-out hover:bg-accent hover:text-white rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                  </RouterLink>
                  <RouterLink to="/login" class="transform transition hover:scale-125 duration-600 ease-in-out text-md font-semibold leading-6 text-gray-900">
                    Sign in <span
                      aria-hidden="true">→</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="@/assets/img/hero.jpg"
            alt="">
        </div>
      </div>
    </div>

</main></template>
