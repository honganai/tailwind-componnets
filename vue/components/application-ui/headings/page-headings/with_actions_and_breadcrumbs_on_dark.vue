<template>
  <div>
    <div>
      <nav class="sm:hidden" aria-label="Back">
        <a href="#" class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
          <ChevronLeftIcon class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
          Back
        </a>
      </nav>
      <nav class="hidden sm:flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div class="flex">
              <a href="#" class="text-sm font-medium text-gray-400 hover:text-gray-200">Jobs</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
              <a href="#" class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">Engineering</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
              <a href="#" aria-current="page" class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">Back End Developer</a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="mt-2 md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Back End Developer</h2>
      </div>
      <div class="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
        <button type="button" class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">Edit</button>
        <button type="button" class="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Publish</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>