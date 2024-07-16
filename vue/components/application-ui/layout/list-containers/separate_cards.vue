<template>
  <ul role="list" class="space-y-3">
    <li v-for="item in items" :key="item.id" class="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
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