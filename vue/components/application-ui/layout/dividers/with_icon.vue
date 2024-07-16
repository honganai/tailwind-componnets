<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="bg-white px-2 text-gray-500">
        <PlusIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>