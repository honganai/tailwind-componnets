<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-medium leading-6 text-gray-900">RAM</h2>
      <a href="#" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">See performance specs</a>
    </div>

    <RadioGroup v-model="mem" class="mt-2">
      <RadioGroupLabel class="sr-only">Choose a memory option</RadioGroupLabel>
      <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
        <RadioGroupOption as="template" v-for="option in memoryOptions" :key="option.name" :value="option" :disabled="!option.inStock" v-slot="{ active, checked }">
          <div :class="[option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25', active ? 'ring-2 ring-indigo-600 ring-offset-2' : '', checked ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50', 'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1']">
            <RadioGroupLabel as="span">{{ option.name }}</RadioGroupLabel>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const memoryOptions = [
  { name: '4 GB', inStock: true },
  { name: '8 GB', inStock: true },
  { name: '16 GB', inStock: true },
  { name: '32 GB', inStock: true },
  { name: '64 GB', inStock: true },
  { name: '128 GB', inStock: false },
]

const mem = ref(memoryOptions[2])
</script>