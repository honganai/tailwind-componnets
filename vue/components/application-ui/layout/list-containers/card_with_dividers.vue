<template>
  <div class="overflow-hidden rounded-md bg-white shadow">
    <ul role="list" class="divide-y divide-gray-200">
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