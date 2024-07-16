<template>
  <div class="overflow-hidden rounded-md border border-gray-300 bg-white">
    <ul role="list" class="divide-y divide-gray-300">
      <li v-for="item in items" :key="item.id" class="px-6 py-4">
        <!-- Your content -->
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [
  { id: 1 },
  // More items...
]
</script>