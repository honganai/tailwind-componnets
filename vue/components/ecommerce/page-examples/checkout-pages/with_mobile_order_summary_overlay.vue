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
  <div class="bg-white">
    <!-- Background color split screen for large screens -->
    <div class="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
    <div class="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true" />

    <header class="relative border-b border-gray-200 bg-white text-sm font-medium text-gray-700">
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="relative flex justify-end sm:justify-center">
          <a href="#" class="absolute left-0 top-1/2 -mt-4">
            <span class="sr-only">Your Company</span>
            <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" class="h-8 w-auto" />
          </a>
          <nav aria-label="Progress" class="hidden sm:block">
            <ol role="list" class="flex space-x-4">
              <li v-for="(step, stepIdx) in steps" :key="step.name" class="flex items-center">
                <a v-if="step.status === 'current'" :href="step.href" aria-current="page" class="text-indigo-600">{{ step.name }}</a>
                <a v-else :href="step.href">{{ step.name }}</a>
                <ChevronRightIcon v-if="stepIdx !== steps.length - 1" class="ml-4 h-5 w-5 text-gray-300" aria-hidden="true" />
              </li>
            </ol>
          </nav>
          <p class="sm:hidden">Step 2 of 4</p>
        </div>
      </div>
    </header>

    <main class="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
      <h1 class="sr-only">Order information</h1>

      <section aria-labelledby="summary-heading" class="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16">
        <div class="mx-auto max-w-lg lg:max-w-none">
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

          <ul role="list" class="divide-y divide-gray-200 text-sm font-medium text-gray-900">
            <li v-for="product in products" :key="product.id" class="flex items-start space-x-4 py-6">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-20 w-20 flex-none rounded-md object-cover object-center" />
              <div class="flex-auto space-y-1">
                <h3>{{ product.name }}</h3>
                <p class="text-gray-500">{{ product.color }}</p>
                <p class="text-gray-500">{{ product.size }}</p>
              </div>
              <p class="flex-none text-base font-medium">{{ product.price }}</p>
            </li>
          </ul>

          <dl class="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Subtotal</dt>
              <dd>$320.00</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Shipping</dt>
              <dd>$15.00</dd>
            </div>

            <div class="flex items-center justify-between">
              <dt class="text-gray-600">Taxes</dt>
              <dd>$26.80</dd>
            </div>

            <div class="flex items-center justify-between border-t border-gray-200 pt-6">
              <dt class="text-base">Total</dt>
              <dd class="text-base">$361.80</dd>
            </div>
          </dl>

          <Popover class="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden" v-slot="{ open }">
            <div class="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
              <div class="mx-auto max-w-lg">
                <PopoverButton class="flex w-full items-center py-6 font-medium">
                  <span class="mr-auto text-base">Total</span>
                  <span class="mr-2 text-base">$361.80</span>
                  <ChevronUpIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>

            <TransitionRoot as="template" :show="open">
              <div>
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <PopoverOverlay class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-y-full" enter-to="translate-y-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-y-0" leave-to="translate-y-full">
                  <PopoverPanel class="relative bg-white px-4 py-6 sm:px-6">
                    <dl class="mx-auto max-w-lg space-y-6">
                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Subtotal</dt>
                        <dd>$320.00</dd>
                      </div>

                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Shipping</dt>
                        <dd>$15.00</dd>
                      </div>

                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">Taxes</dt>
                        <dd>$26.80</dd>
                      </div>
                    </dl>
                  </PopoverPanel>
                </TransitionChild>
              </div>
            </TransitionRoot>
          </Popover>
        </div>
      </section>

      <form class="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
        <div class="mx-auto max-w-lg lg:max-w-none">
          <section aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" class="text-lg font-medium text-gray-900">Contact information</h2>

            <div class="mt-6">
              <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
              <div class="mt-1">
                <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>
          </section>

          <section aria-labelledby="payment-heading" class="mt-10">
            <h2 id="payment-heading" class="text-lg font-medium text-gray-900">Payment details</h2>

            <div class="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
              <div class="col-span-3 sm:col-span-4">
                <label for="name-on-card" class="block text-sm font-medium text-gray-700">Name on card</label>
                <div class="mt-1">
                  <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-3 sm:col-span-4">
                <label for="card-number" class="block text-sm font-medium text-gray-700">Card number</label>
                <div class="mt-1">
                  <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="col-span-2 sm:col-span-3">
                <label for="expiration-date" class="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                <div class="mt-1">
                  <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                <div class="mt-1">
                  <input type="text" name="cvc" id="cvc" autocomplete="csc" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="shipping-heading" class="mt-10">
            <h2 id="shipping-heading" class="text-lg font-medium text-gray-900">Shipping address</h2>

            <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
              <div class="sm:col-span-3">
                <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
                <div class="mt-1">
                  <input type="text" id="company" name="company" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <div class="mt-1">
                  <input type="text" id="address" name="address" autocomplete="street-address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="apartment" class="block text-sm font-medium text-gray-700">Apartment, suite, etc.</label>
                <div class="mt-1">
                  <input type="text" id="apartment" name="apartment" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                <div class="mt-1">
                  <input type="text" id="city" name="city" autocomplete="address-level2" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                <div class="mt-1">
                  <input type="text" id="region" name="region" autocomplete="address-level1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal code</label>
                <div class="mt-1">
                  <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="billing-heading" class="mt-10">
            <h2 id="billing-heading" class="text-lg font-medium text-gray-900">Billing information</h2>

            <div class="mt-6 flex items-center">
              <input id="same-as-shipping" name="same-as-shipping" type="checkbox" checked="" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <div class="ml-2">
                <label for="same-as-shipping" class="text-sm font-medium text-gray-900">Same as shipping information</label>
              </div>
            </div>
          </section>

          <div class="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
            <button type="submit" class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto">Continue</button>
            <p class="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">You won't be charged until the next step.</p>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ChevronRightIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

const steps = [
  { name: 'Cart', href: '#', status: 'complete' },
  { name: 'Billing Information', href: '#', status: 'current' },
  { name: 'Confirmation', href: '#', status: 'upcoming' },
]
const products = [
  {
    id: 1,
    name: 'Micro Backpack',
    href: '#',
    price: '$70.00',
    color: 'Moss',
    size: '5L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg',
    imageAlt:
      'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
  },
  // More products...
]
</script>