<template>
  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="item in items" :key="item.id" class="px-4 py-4 sm:px-0">
      <!-- Your content -->
    </li>
  </ul>
</template>

<script setup>
const items = [
  { id: 1 },
  // More items...
]
</script>