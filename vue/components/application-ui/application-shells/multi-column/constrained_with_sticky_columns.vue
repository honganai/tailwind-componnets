<template>
  <div class="flex min-h-full flex-col">
    <header class="shrink-0 border-b border-gray-200 bg-white">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <div class="flex items-center gap-x-8">
          <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your profile</span>
            <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </a>
        </div>
      </div>
    </header>

    <div class="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
      <aside class="sticky top-8 hidden w-44 shrink-0 lg:block">
        <!-- Left column area -->
      </aside>

      <main class="flex-1">
        <!-- Main area -->
      </main>

      <aside class="sticky top-8 hidden w-96 shrink-0 xl:block">
        <!-- Right column area -->
      </aside>
    </div>
  </div>
</template>

<script setup>
import { BellIcon } from '@heroicons/vue/24/outline'
</script>