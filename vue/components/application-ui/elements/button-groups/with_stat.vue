<template>
  <span class="isolate inline-flex rounded-md shadow-sm">
    <button type="button" class="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
      <BookmarkIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
      Bookmark
    </button>
    <button type="button" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">12k</button>
  </span>
</template>

<script setup>
import { BookmarkIcon } from '@heroicons/vue/20/solid'
</script>