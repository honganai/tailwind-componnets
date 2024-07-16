<template>
  <div class="border-b border-gray-200 pb-5">
    <div class="sm:flex sm:items-baseline sm:justify-between">
      <div class="sm:w-0 sm:flex-1">
        <h1 id="message-heading" class="text-base font-semibold leading-6 text-gray-900">Full-Stack Developer</h1>
        <p class="mt-1 truncate text-sm text-gray-500">Checkout and Payments Team</p>
      </div>

      <div class="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
        <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Open</span>
        <Menu as="div" class="relative ml-3 inline-block text-left">
          <div>
            <MenuButton class="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex justify-between px-4 py-2 text-sm']">
                    <span>Edit</span>
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex justify-between px-4 py-2 text-sm']">
                    <span>Duplicate</span>
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button type="button" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex w-full justify-between px-4 py-2 text-sm']">
                    <span>Archive</span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
</script>