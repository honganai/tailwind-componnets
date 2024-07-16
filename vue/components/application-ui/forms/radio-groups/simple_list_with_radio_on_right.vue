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
  <fieldset>
    <legend class="text-base font-semibold text-gray-900">Select a side</legend>
    <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
      <div v-for="(side, sideIdx) in sides" :key="sideIdx" class="relative flex items-start py-4">
        <div class="min-w-0 flex-1 text-sm leading-6">
          <label :for="`side-${side.id}`" class="select-none font-medium text-gray-900">{{ side.name }}</label>
        </div>
        <div class="ml-3 flex h-6 items-center">
          <input :id="`side-${side.id}`" name="plan" type="radio" :checked="side.id === null" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
]
</script>