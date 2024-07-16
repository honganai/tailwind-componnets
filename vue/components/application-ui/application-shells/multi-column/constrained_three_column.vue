<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-col">
    <header class="shrink-0 bg-gray-900">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        <div class="flex items-center gap-x-8">
          <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your profile</span>
            <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </a>
        </div>
      </div>
    </header>

    <!-- 3 column wrapper -->
    <div class="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
      <!-- Left sidebar & main wrapper -->
      <div class="flex-1 xl:flex">
        <div class="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:pl-6">
          <!-- Left column area -->
        </div>

        <div class="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
          <!-- Main area -->
        </div>
      </div>

      <div class="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6">
        <!-- Right column area -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { BellIcon } from '@heroicons/vue/24/outline'
</script>