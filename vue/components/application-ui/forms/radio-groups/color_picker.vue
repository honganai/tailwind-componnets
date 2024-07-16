<template>
  <RadioGroup v-model="selectedColor">
    <RadioGroupLabel class="block text-sm font-medium leading-6 text-gray-900">Choose a label color</RadioGroupLabel>
    <div class="mt-4 flex items-center space-x-3">
      <RadioGroupOption as="template" v-for="color in colors" :key="color.name" :value="color" v-slot="{ active, checked }">
        <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
          <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
          <span aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const colors = [
  { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
  { name: 'Purple', bgColor: 'bg-purple-500', selectedColor: 'ring-purple-500' },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  { name: 'Yellow', bgColor: 'bg-yellow-500', selectedColor: 'ring-yellow-500' },
]

const selectedColor = ref(colors[1])
</script>