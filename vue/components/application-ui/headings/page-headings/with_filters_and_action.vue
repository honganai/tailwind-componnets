<template>
  <div>
    <div class="flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
      <h1 class="text-base font-semibold leading-7 text-gray-900">Cashflow</h1>
      <div class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
        <a href="#" class="text-indigo-600">Last 7 days</a>
        <a href="#" class="text-gray-700">Last 30 days</a>
        <a href="#" class="text-gray-700">All-time</a>
      </div>
      <a href="#" class="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <PlusSmallIcon class="-ml-1.5 h-5 w-5" aria-hidden="true" />
        New invoice
      </a>
    </div>
  </div>
</template>

<script setup>
import { PlusSmallIcon } from '@heroicons/vue/20/solid'
</script>