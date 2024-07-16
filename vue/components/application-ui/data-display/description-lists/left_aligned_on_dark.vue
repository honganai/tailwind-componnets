<template>
  <div>
    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-white">Applicant Information</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-400">Personal details and application.</p>
    </div>
    <div class="mt-6 border-t border-white/10">
      <dl class="divide-y divide-white/10">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Full name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">Margot Foster</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Application for</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">Backend Developer</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Email address</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Salary expectation</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">$120,000</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">About</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-white">Attachments</dt>
          <dd class="mt-2 text-sm text-white sm:col-span-2 sm:mt-0">
            <ul role="list" class="divide-y divide-white/10 rounded-md border border-white/20">
              <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                    <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-400 hover:text-indigo-300">Download</a>
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
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-400 hover:text-indigo-300">Download</a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
</script>