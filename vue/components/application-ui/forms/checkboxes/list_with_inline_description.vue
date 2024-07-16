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
  <fieldset>
    <legend class="sr-only">Notifications</legend>
    <div class="space-y-5">
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900">New comments</label>
          {{ ' ' }}
          <span id="comments-description" class="text-gray-500"><span class="sr-only">New comments </span>so you always know what's happening.</span>
        </div>
      </div>
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="candidates" class="font-medium text-gray-900">New candidates</label>
          {{ ' ' }}
          <span id="candidates-description" class="text-gray-500"><span class="sr-only">New candidates </span>who apply for any open postings.</span>
        </div>
      </div>
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="offers" class="font-medium text-gray-900">Offers</label>
          {{ ' ' }}
          <span id="offers-description" class="text-gray-500"><span class="sr-only">Offers </span>when they are accepted or rejected by candidates.</span>
        </div>
      </div>
    </div>
  </fieldset>
</template>
