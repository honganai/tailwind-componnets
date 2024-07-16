<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex items-center justify-between">
      <span class="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">Projects</span>
      <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <PlusIcon class="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        <span>Button text</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>