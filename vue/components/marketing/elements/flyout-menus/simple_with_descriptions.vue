<template>
  <Popover class="relative">
    <PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
      <span>Solutions</span>
      <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div v-for="item in solutions" :key="item.name" class="relative rounded-lg p-4 hover:bg-gray-50">
            <a :href="item.href" class="font-semibold text-gray-900">
              {{ item.name }}
              <span class="absolute inset-0" />
            </a>
            <p class="mt-1 text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const solutions = [
  { name: 'Blog', description: 'Learn about tips, product updates and company culture', href: '#' },
  {
    name: 'Help center',
    description: 'Get all of your questions answered in our forums of contact support',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it', href: '#' },
  { name: 'Events', description: 'Check out webinars with experts and learn about our annual conference', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously', href: '#' },
]
</script>