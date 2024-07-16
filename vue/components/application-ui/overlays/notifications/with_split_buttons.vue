<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="pointer-events-auto flex w-full max-w-md divide-x divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="flex w-0 flex-1 items-center p-4">
            <div class="w-full">
              <p class="text-sm font-medium text-gray-900">Receive notifications</p>
              <p class="mt-1 text-sm text-gray-500">Notifications may include alerts, sounds, and badges.</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col divide-y divide-gray-200">
              <div class="flex h-0 flex-1">
                <button type="button" @click="show = false" class="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">Reply</button>
              </div>
              <div class="flex h-0 flex-1">
                <button type="button" @click="show = false" class="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Don't allow</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>