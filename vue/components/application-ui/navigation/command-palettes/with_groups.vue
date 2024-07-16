<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
          <DialogPanel class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="relative">
                <MagnifyingGlassIcon class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <ComboboxInput class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." @change="query = $event.target.value" />
              </div>

              <div v-if="query === ''" class="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                <GlobeAmericasIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                <p class="mt-4 font-semibold text-gray-900">Search for clients and projects</p>
                <p class="mt-2 text-gray-500">Quickly access clients and projects by running a global search.</p>
              </div>

              <ComboboxOptions v-if="filteredItems.length > 0" static class="max-h-80 scroll-pb-2 scroll-pt-11 space-y-2 overflow-y-auto pb-2">
                <li v-for="[category, items] in Object.entries(groups)" :key="category">
                  <h2 class="bg-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-900">
                    {{ category }}
                  </h2>
                  <ul class="mt-2 text-sm text-gray-800">
                    <ComboboxOption v-for="item in items" :key="item.id" :value="item" as="template" v-slot="{ active }">
                      <li :class="['cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white']">
                        {{ item.name }}
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
              </ComboboxOptions>

              <div v-if="query !== '' && filteredItems.length === 0" class="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                <FaceFrownIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                <p class="mt-4 font-semibold text-gray-900">No results found</p>
                <p class="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/vue/24/outline'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const items = [
  { id: 1, name: 'Workflow Inc.', category: 'Clients', url: '#' },
  // More items...
]

const open = ref(true)
const query = ref('')
const filteredItems = computed(() =>
  query.value === ''
    ? []
    : items.filter((item) => {
        return item.name.toLowerCase().includes(query.value.toLowerCase())
      })
)
const groups = computed(() =>
  filteredItems.value.reduce((groups, item) => {
    return { ...groups, [item.category]: [...(groups[item.category] || []), item] }
  }, {})
)

function onSelect(item) {
  window.location = item.url
}
</script>