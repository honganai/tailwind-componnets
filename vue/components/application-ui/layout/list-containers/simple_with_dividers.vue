<template>
  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="item in items" :key="item.id" class="py-4">
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