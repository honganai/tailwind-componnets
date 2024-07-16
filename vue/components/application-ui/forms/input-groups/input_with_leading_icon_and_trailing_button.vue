<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div>
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Search candidates</label>
    <div class="mt-2 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <UsersIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input type="email" name="email" id="email" class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="John Smith" />
      </div>
      <button type="button" class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <BarsArrowUpIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Sort
      </button>
    </div>
  </div>
</template>

<script setup>
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/vue/20/solid'
</script>