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
  <form>
    <div class="space-y-12 sm:space-y-16">
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

        <div class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Username</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">About</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <textarea id="about" name="about" rows="3" class="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
            <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <div class="flex items-center gap-x-3">
                <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Cover photo</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <div class="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

        <div class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">First name</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Last name</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Email address</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Country</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Street address</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">City</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">State / Province</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">ZIP / Postal code</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

        <div class="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <fieldset>
            <legend class="sr-only">By Email</legend>
            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
              <div class="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">By Email</div>
              <div class="mt-4 sm:col-span-2 sm:mt-0">
                <div class="max-w-lg space-y-6">
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    </div>
                    <div class="text-sm leading-6">
                      <label for="comments" class="font-medium text-gray-900">Comments</label>
                      <p class="mt-1 text-gray-600">Get notified when someones posts a comment on a posting.</p>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    </div>
                    <div class="text-sm leading-6">
                      <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                      <p class="mt-1 text-gray-600">Get notified when a candidate applies for a job.</p>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    </div>
                    <div class="text-sm leading-6">
                      <label for="offers" class="font-medium text-gray-900">Offers</label>
                      <p class="mt-1 text-gray-600">Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="sr-only">Push Notifications</legend>
            <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
              <div class="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Push Notifications</div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <div class="max-w-lg">
                  <p class="text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                  <div class="mt-6 space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                      <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
</script>