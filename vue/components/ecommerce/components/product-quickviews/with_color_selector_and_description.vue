<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95" enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 md:scale-100" leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
            <DialogPanel class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8" @click="open = false">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div class="sm:col-span-4 lg:col-span-5">
                    <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                      <img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center" />
                    </div>
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{{ product.name }}</h2>

                    <section aria-labelledby="information-heading" class="mt-3">
                      <h3 id="information-heading" class="sr-only">Product information</h3>

                      <p class="text-2xl text-gray-900">{{ product.price }}</p>

                      <!-- Reviews -->
                      <div class="mt-3">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-gray-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                          </div>
                          <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                        </div>
                      </div>

                      <div class="mt-6">
                        <h4 class="sr-only">Description</h4>

                        <p class="text-sm text-gray-700">{{ product.description }}</p>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" class="mt-6">
                      <h3 id="options-heading" class="sr-only">Product options</h3>

                      <form>
                        <!-- Colors -->
                        <div>
                          <h4 class="text-sm text-gray-600">Color</h4>

                          <RadioGroup v-model="selectedColor" class="mt-2">
                            <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                            <div class="flex items-center space-x-3">
                              <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">
                                <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                  <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                                  <span aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                                </div>
                              </RadioGroupOption>
                            </div>
                          </RadioGroup>
                        </div>

                        <div class="mt-6">
                          <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Add to bag</button>
                        </div>

                        <p class="absolute left-4 top-4 text-center sm:static sm:mt-6">
                          <a :href="product.href" class="font-medium text-indigo-600 hover:text-indigo-500">View full details</a>
                        </p>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/20/solid'

const product = {
  name: 'Zip Tote Basket',
  price: '$220',
  rating: 3.9,
  href: '#',
  description:
    'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
  imageAlt: 'Back angled view with bag open and handles to the side.',
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
}

const open = ref(false)
const selectedColor = ref(product.colors[0])
</script>