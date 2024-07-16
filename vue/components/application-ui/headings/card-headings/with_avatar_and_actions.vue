<template>
  <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
    <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
      <div class="ml-4 mt-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-4">
            <h3 class="text-base font-semibold leading-6 text-gray-900">Tom Cook</h3>
            <p class="text-sm text-gray-500">
              <a href="#">@tom_cook</a>
            </p>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-4 flex flex-shrink-0">
        <button type="button" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <PhoneIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Phone</span>
        </button>
        <button type="button" class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <EnvelopeIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Email</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
</script>