<template>
  <ul role="list" class="space-y-3">
    <li v-for="item in items" :key="item.id" class="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
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