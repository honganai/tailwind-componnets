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
                    <p class="absolute left-4 top-4 text-center sm:static sm:mt-6">
                      <a :href="product.href" class="font-medium text-indigo-600 hover:text-indigo-500">View full details</a>
                    </p>
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{{ product.name }}</h2>

                    <section aria-labelledby="information-heading" class="mt-4">
                      <h3 id="information-heading" class="sr-only">Product information</h3>

                      <div class="flex items-center">
                        <p class="text-lg text-gray-900 sm:text-xl">{{ product.price }}</p>

                        <div class="ml-4 border-l border-gray-300 pl-4">
                          <h4 class="sr-only">Reviews</h4>
                          <div class="flex items-center">
                            <div class="flex items-center">
                              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                            </div>
                            <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                          </div>
                        </div>
                      </div>

                      <div class="mt-6 flex items-center">
                        <CheckIcon class="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        <p class="ml-2 font-medium text-gray-500">In stock and ready to ship</p>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" class="mt-6">
                      <h3 id="options-heading" class="sr-only">Product options</h3>

                      <form>
                        <div class="sm:flex sm:justify-between">
                          <!-- Size selector -->
                          <RadioGroup v-model="selectedSize">
                            <RadioGroupLabel class="block text-sm font-medium text-gray-700">Size</RadioGroupLabel>
                            <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name" :value="size" v-slot="{ active, checked }">
                                <div :class="[active ? 'ring-2 ring-indigo-500' : '', 'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none']">
                                  <RadioGroupLabel as="p" class="text-base font-medium text-gray-900">{{ size.name }}</RadioGroupLabel>
                                  <RadioGroupDescription as="p" class="mt-1 text-sm text-gray-500">{{ size.description }}</RadioGroupDescription>
                                  <div :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                                </div>
                              </RadioGroupOption>
                            </div>
                          </RadioGroup>
                        </div>
                        <div class="mt-4 flex">
                          <a href="#" class="group flex text-sm text-gray-500 hover:text-gray-700">
                            <span>What size should I buy?</span>
                            <QuestionMarkCircleIcon class="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                          </a>
                        </div>
                        <div class="mt-6">
                          <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Add to bag</button>
                        </div>
                        <div class="mt-6 text-center">
                          <a href="#" class="group inline-flex text-base font-medium">
                            <ShieldCheckIcon class="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                            <span class="text-gray-500 group-hover:text-gray-700">Lifetime Guarantee</span>
                          </a>
                        </div>
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
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ShieldCheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/vue/20/solid'

const product = {
  name: 'Everyday Ruck Snack',
  price: '$220',
  rating: 3.9,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg',
  imageAlt: 'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}

const open = ref(false)
const selectedSize = ref(product.sizes[0])
</script>