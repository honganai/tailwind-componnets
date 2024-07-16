<template>
  <div class="px-4 sm:px-0">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
  </div>
  <div class="mt-6 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">Margot Foster</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
          </span>
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">Backend Developer</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
          </span>
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">margotfoster@example.com</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
          </span>
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">$120,000</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
          </span>
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
          </span>
        </dd>
      </div>
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                  <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                  <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                </div>
              </div>
              <div class="ml-4 flex flex-shrink-0 space-x-4">
                <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                <span class="text-gray-200" aria-hidden="true">|</span>
                <button type="button" class="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800">Remove</button>
              </div>
            </li>
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                  <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                  <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                </div>
              </div>
              <div class="ml-4 flex flex-shrink-0 space-x-4">
                <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                <span class="text-gray-200" aria-hidden="true">|</span>
                <button type="button" class="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800">Remove</button>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
</script>