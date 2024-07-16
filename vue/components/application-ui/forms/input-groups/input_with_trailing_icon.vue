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
    <label for="account-number" class="block text-sm font-medium leading-6 text-gray-900">Account number</label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <input type="text" name="account-number" id="account-number" class="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="000-00-0000" />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <QuestionMarkCircleIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { QuestionMarkCircleIcon } from '@heroicons/vue/20/solid'
</script>