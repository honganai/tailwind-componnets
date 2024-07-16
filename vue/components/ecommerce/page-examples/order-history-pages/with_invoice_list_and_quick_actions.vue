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
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="mobileMenuOpen = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                      <button :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900', 'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium']">{{ category.name }}</button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel v-for="(category, categoryIdx) in navigation.categories" :key="category.name" class="space-y-12 px-4 pb-6 pt-10">
                    <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p :id="`mobile-featured-heading-${categoryIdx}`" class="font-medium text-gray-900">Featured</p>
                          <ul role="list" :aria-labelledby="`mobile-featured-heading-${categoryIdx}`" class="mt-6 space-y-6">
                            <li v-for="item in category.featured" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p id="mobile-categories-heading" class="font-medium text-gray-900">Categories</p>
                          <ul role="list" aria-labelledby="mobile-categories-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.categories" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p id="mobile-collection-heading" class="font-medium text-gray-900">Collection</p>
                          <ul role="list" aria-labelledby="mobile-collection-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.collection" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p id="mobile-brand-heading" class="font-medium text-gray-900">Brands</p>
                          <ul role="list" aria-labelledby="mobile-brand-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.brands" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <!-- Currency selector -->
                <form>
                  <div class="inline-block">
                    <label for="mobile-currency" class="sr-only">Currency</label>
                    <div class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                      <select id="mobile-currency" name="currency" class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800">
                        <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                        <ChevronDownIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <!-- Currency selector -->
            <form class="hidden lg:block lg:flex-1">
              <div class="flex">
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                  <select id="desktop-currency" name="currency" class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100">
                    <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                    <ChevronDownIcon class="h-5 w-5 text-gray-300" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </form>

            <p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">Get free delivery on orders over $100</p>

            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
              <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
              <div class="flex h-16 items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:items-center">
                  <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Mega menus -->
                  <PopoverGroup class="ml-8">
                    <div class="flex h-full justify-center space-x-8">
                      <Popover v-for="(category, categoryIdx) in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                        <div class="relative flex">
                          <PopoverButton :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">{{ category.name }}</PopoverButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                          <PopoverPanel class="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div class="relative bg-white">
                              <div class="mx-auto max-w-7xl px-8">
                                <div class="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                  <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p :id="`desktop-featured-heading-${categoryIdx}`" class="font-medium text-gray-900">Featured</p>
                                      <ul role="list" :aria-labelledby="`desktop-featured-heading-${categoryIdx}`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.featured" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p id="desktop-categories-heading" class="font-medium text-gray-900">Categories</p>
                                      <ul role="list" aria-labelledby="desktop-categories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.categories" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p id="desktop-collection-heading" class="font-medium text-gray-900">Collection</p>
                                      <ul role="list" aria-labelledby="desktop-collection-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.collection" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div>
                                      <p id="desktop-brand-heading" class="font-medium text-gray-900">Brands</p>
                                      <ul role="list" aria-labelledby="desktop-brand-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.brands" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                      <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex flex-1 items-center lg:hidden">
                  <button type="button" class="-ml-2 rounded-md bg-white p-2 text-gray-400" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Search</span>
                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <span class="sr-only">Your Company</span>
                  <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
                </a>

                <div class="flex flex-1 items-center justify-end">
                  <div class="flex items-center lg:ml-8">
                    <div class="flex space-x-8">
                      <div class="hidden lg:flex">
                        <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Search</span>
                          <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>

                      <div class="flex">
                        <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Account</span>
                          <UserIcon class="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <div class="flow-root">
                      <a href="#" class="group -m-2 flex items-center p-2">
                        <ShoppingCartIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span class="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8">
      <div class="max-w-xl">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Your Orders</h1>
        <p class="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
      </div>

      <div class="mt-12 space-y-16 sm:mt-16">
        <section v-for="order in orders" :key="order.number" :aria-labelledby="`${order.number}-heading`">
          <div class="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0">
            <h2 :id="`${order.number}-heading`" class="text-lg font-medium text-gray-900 md:flex-shrink-0">Order #{{ order.number }}</h2>
            <div class="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1">
              <p class="text-sm font-medium text-gray-500">{{ order.status }}</p>
              <div class="flex text-sm font-medium">
                <a :href="order.href" class="text-indigo-600 hover:text-indigo-500">Manage order</a>
                <div class="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                  <a :href="order.invoiceHref" class="text-indigo-600 hover:text-indigo-500">View Invoice</a>
                </div>
              </div>
            </div>
          </div>

          <div class="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200">
            <div v-for="product in order.products" :key="product.id" class="py-6 sm:flex">
              <div class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48" />
                <div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
                  <h3 class="text-sm font-medium text-gray-900">
                    <a :href="product.href">{{ product.name }}</a>
                  </h3>
                  <p class="truncate text-sm text-gray-500">
                    <span>{{ product.color }}</span>
                    {{ ' ' }}
                    <span class="mx-1 text-gray-400" aria-hidden="true">&middot;</span>
                    {{ ' ' }}
                    <span>{{ product.size }}</span>
                  </p>
                  <p class="mt-1 font-medium text-gray-900">{{ product.price }}</p>
                </div>
              </div>
              <div class="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                <button type="button" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0">Buy again</button>
                <button type="button" class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0">Shop similar</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer aria-labelledby="footer-heading" class="border-t border-gray-200 bg-white">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
          <div class="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
            <div>
              <h3 class="text-sm font-medium text-gray-900">Account</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li v-for="item in footerNavigation.account" :key="item.name" class="text-sm">
                  <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">Service</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li v-for="item in footerNavigation.service" :key="item.name" class="text-sm">
                  <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
            <div>
              <h3 class="text-sm font-medium text-gray-900">Company</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li v-for="item in footerNavigation.company" :key="item.name" class="text-sm">
                  <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">Connect</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li v-for="item in footerNavigation.connect" :key="item.name" class="text-sm">
                  <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
          <div class="flex items-center justify-center text-sm text-gray-500">
            <p>Shipping to Canada ($CAD)</p>
            <p class="ml-3 border-l border-gray-200 pl-3">English</p>
          </div>
          <p class="mt-6 text-center text-sm text-gray-500 sm:mt-0">&copy; 2021 Your Company, Inc.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const orders = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Machined Brass Puzzle',
        href: '#',
        price: '$95.00',
        color: 'Brass',
        size: '3" x 3" x 3"',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-07-product-01.jpg',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
      },
      // More products...
    ],
  },
  // More orders...
]
const footerNavigation = {
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Saved Items', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Redeem Gift card', href: '#' },
  ],
  service: [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
    { name: 'Get in touch', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  connect: [
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
    { name: 'Twitter', href: '#' },
  ],
}

const mobileMenuOpen = ref(false)
</script>