<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add user</button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr class="divide-x divide-gray-200">
                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">Role</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="person in people" :key="person.email" class="divide-x divide-gray-200">
                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">{{ person.name }}</td>
                <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ person.title }}</td>
                <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{ person.email }}</td>
                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{{ person.role }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]
</script>