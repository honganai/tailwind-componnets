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
  <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs" class="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex border-b border-white/10 py-4">
          <ul role="list" class="flex min-w-full flex-none gap-x-6 px-2 text-sm font-semibold leading-6 text-gray-400">
            <li v-for="tab in tabs" :key="tab.name">
              <a :href="tab.href" :class="tab.current ? 'text-indigo-400' : ''">{{ tab.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  { name: 'Overview', href: '#', current: true },
  { name: 'Activity', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
  { name: 'Collaborators', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
]
</script>