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
  <div>
    <label class="text-base font-semibold text-gray-900">Notifications</label>
    <p class="text-sm text-gray-500">How do you prefer to receive notifications?</p>
    <fieldset class="mt-4">
      <legend class="sr-only">Notification method</legend>
      <div class="space-y-4">
        <div v-for="notificationMethod in notificationMethods" :key="notificationMethod.id" class="flex items-center">
          <input :id="notificationMethod.id" name="notification-method" type="radio" :checked="notificationMethod.id === 'email'" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label :for="notificationMethod.id" class="ml-3 block text-sm font-medium leading-6 text-gray-900">{{ notificationMethod.title }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]
</script>