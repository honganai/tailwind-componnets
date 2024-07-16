<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div>
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
                  <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="mobileMenuOpen = false">
                    <span class="absolute -inset-0.5" />
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
                    <TabPanel v-for="category in navigation.categories" :key="category.name" class="space-y-10 px-4 pb-8 pt-10">
                      <div class="grid grid-cols-2 gap-x-4">
                        <div v-for="item in category.featured" :key="item.name" class="group relative text-sm">
                          <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center" />
                          </div>
                          <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                            <span class="absolute inset-0 z-10" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                          <p aria-hidden="true" class="mt-1">Shop now</p>
                        </div>
                      </div>
                      <div v-for="section in category.sections" :key="section.name">
                        <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-medium text-gray-900">{{ section.name }}</p>
                        <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading-mobile`" class="mt-6 flex flex-col space-y-6">
                          <li v-for="item in section.items" :key="item.name" class="flow-root">
                            <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{ item.name }}</a>
                          </li>
                        </ul>
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
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                  </div>
                  <div class="flow-root">
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6">
                  <a href="#" class="-m-2 flex items-center p-2">
                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                    <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span class="sr-only">, change currency</span>
                  </a>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <header class="relative bg-white">
        <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

        <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="border-b border-gray-200">
            <div class="flex h-16 items-center">
              <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden" @click="mobileMenuOpen = true">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Logo -->
              <div class="ml-4 flex lg:ml-0">
                <a href="#">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
              </div>

              <!-- Flyout menus -->
              <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
                <div class="flex h-full space-x-8">
                  <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                    <div class="relative flex">
                      <PopoverButton :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">{{ category.name }}</PopoverButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                      <PopoverPanel class="absolute inset-x-0 top-full z-10 text-sm text-gray-500">
                        <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                        <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                        <div class="relative bg-white">
                          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                <div v-for="item in category.featured" :key="item.name" class="group relative text-base sm:text-sm">
                                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center" />
                                  </div>
                                  <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                    <span class="absolute inset-0 z-10" aria-hidden="true" />
                                    {{ item.name }}
                                  </a>
                                  <p aria-hidden="true" class="mt-1">Shop now</p>
                                </div>
                              </div>
                              <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                <div v-for="section in category.sections" :key="section.name">
                                  <p :id="`${section.name}-heading`" class="font-medium text-gray-900">{{ section.name }}</p>
                                  <ul role="list" :aria-labelledby="`${section.name}-heading`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                    <li v-for="item in section.items" :key="item.name" class="flex">
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

              <div class="ml-auto flex items-center">
                <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                  <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
                </div>

                <div class="hidden lg:ml-8 lg:flex">
                  <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">
                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                    <span class="ml-3 block text-sm font-medium">CAD</span>
                    <span class="sr-only">, change currency</span>
                  </a>
                </div>

                <!-- Search -->
                <div class="flex lg:ml-6">
                  <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Search</span>
                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Cart -->
                <div class="ml-4 flow-root lg:ml-6">
                  <a href="#" class="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span class="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button" class="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500" @click="mobileFiltersOpen = false">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4">
                  <Disclosure as="div" v-for="section in filters" :key="section.name" class="border-t border-gray-200 pb-4 pt-4" v-slot="{ open }">
                    <fieldset>
                      <legend class="w-full px-2">
                        <DisclosureButton class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                          <span class="text-sm font-medium text-gray-900">{{ section.name }}</span>
                          <span class="ml-6 flex h-7 items-center">
                            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true" />
                          </span>
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel class="px-4 pb-2 pt-4">
                        <div class="space-y-6">
                          <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                            <input :id="`${section.id}-${optionIdx}-mobile`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label :for="`${section.id}-${optionIdx}-mobile`" class="ml-3 text-sm text-gray-500">{{ option.label }}</label>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </fieldset>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <div class="border-b border-gray-200">
        <nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol role="list" class="flex items-center space-x-4 py-4">
            <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.id">
              <div class="flex items-center">
                <a :href="breadcrumb.href" class="mr-4 text-sm font-medium text-gray-900">{{ breadcrumb.name }}</a>
                <svg viewBox="0 0 6 20" aria-hidden="true" class="h-5 w-auto text-gray-300">
                  <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                </svg>
              </div>
            </li>
            <li class="text-sm">
              <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">New Arrivals</a>
            </li>
          </ol>
        </nav>
      </div>

      <main class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div class="border-b border-gray-200 pb-10 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
          <p class="mt-4 text-base text-gray-500">Checkout out the latest release of Basic Tees, new and improved with four openings!</p>
        </div>

        <div class="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 class="sr-only">Filters</h2>

            <button type="button" class="inline-flex items-center lg:hidden" @click="mobileFiltersOpen = true">
              <span class="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </button>

            <div class="hidden lg:block">
              <form class="space-y-10 divide-y divide-gray-200">
                <div v-for="(section, sectionIdx) in filters" :key="section.name" :class="sectionIdx === 0 ? null : 'pt-10'">
                  <fieldset>
                    <legend class="block text-sm font-medium text-gray-900">{{ section.name }}</legend>
                    <div class="space-y-3 pt-6">
                      <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                        <input :id="`${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label :for="`${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{ option.label }}</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </aside>

          <section aria-labelledby="product-heading" class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <h2 id="product-heading" class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
              <div v-for="product in products" :key="product.id" class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center sm:h-full sm:w-full" />
                </div>
                <div class="flex flex-1 flex-col space-y-2 p-4">
                  <h3 class="text-sm font-medium text-gray-900">
                    <a :href="product.href">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="text-sm text-gray-500">{{ product.description }}</p>
                  <div class="flex flex-1 flex-col justify-end">
                    <p class="text-sm italic text-gray-500">{{ product.options }}</p>
                    <p class="text-base font-medium text-gray-900">{{ product.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer aria-labelledby="footer-heading" class="border-t border-gray-200 bg-white">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="py-20">
            <div class="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
              <!-- Image section -->
              <div class="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
              </div>

              <!-- Sitemap sections -->
              <div class="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                <div class="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Products</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li v-for="item in footerNavigation.products" :key="item.name" class="text-sm">
                        <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Company</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li v-for="item in footerNavigation.company" :key="item.name" class="text-sm">
                        <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Customer Service</h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.customerService" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Newsletter section -->
              <div class="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                <h3 class="text-sm font-medium text-gray-900">Sign up for our newsletter</h3>
                <p class="mt-6 text-sm text-gray-500">The latest deals and savings, sent to your inbox weekly.</p>
                <form class="mt-2 flex sm:max-w-md">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input id="email-address" type="text" autocomplete="email" required="" class="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  <div class="ml-4 flex-shrink-0">
                    <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-100 py-10 text-center">
            <p class="text-sm text-gray-500">&copy; 2021 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
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
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/vue/20/solid'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const breadcrumbs = [{ id: 1, name: 'Men', href: '#' }]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]
const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '#',
    price: '$256',
    description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

const mobileMenuOpen = ref(false)
const mobileFiltersOpen = ref(false)
</script>