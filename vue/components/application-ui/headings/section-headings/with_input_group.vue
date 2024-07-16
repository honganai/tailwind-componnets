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
  <div class="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
    <div class="mt-3 sm:ml-4 sm:mt-0">
      <label for="mobile-search-candidate" class="sr-only">Search</label>
      <label for="desktop-search-candidate" class="sr-only">Search</label>
      <div class="flex rounded-md shadow-sm">
        <div class="relative flex-grow focus-within:z-10">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input type="text" name="mobile-search-candidate" id="mobile-search-candidate" class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden" placeholder="Search" />
          <input type="text" name="desktop-search-candidate" id="desktop-search-candidate" class="hidden w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block" placeholder="Search candidates" />
        </div>
        <button type="button" class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <BarsArrowUpIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Sort
          <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
</script>