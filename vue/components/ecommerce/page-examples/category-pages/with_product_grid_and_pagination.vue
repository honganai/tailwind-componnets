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
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
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
                    <div class="space-y-4">
                      <div v-for="(item, itemIdx) in category.featured" :key="itemIdx" class="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100">
                        <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center group-hover:opacity-75" />
                        <div class="flex flex-col justify-end">
                          <div class="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                            <a :href="item.href" class="font-medium text-gray-900">
                              <span class="absolute inset-0" aria-hidden="true" />
                              {{ item.name }}
                            </a>
                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-for="(column, columnIdx) in category.sections" :key="columnIdx" class="space-y-10">
                      <div v-for="section in column" :key="section.name">
                        <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-medium text-gray-900">{{ section.name }}</p>
                        <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading-mobile`" class="mt-6 flex flex-col space-y-6">
                          <li v-for="item in section.items" :key="item.name" class="flow-root">
                            <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{ item.name }}</a>
                          </li>
                        </ul>
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
      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center lg:hidden">
              <button type="button" class="-ml-2 rounded-md bg-white p-2 text-gray-400" @click="open = true">
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:block lg:flex-1 lg:self-stretch">
              <div class="flex h-full space-x-8">
                <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                  <div class="relative flex">
                    <PopoverButton :class="[open ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out']">
                      {{ category.name }}
                      <span :class="[open ? 'bg-indigo-600' : '', 'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform']" aria-hidden="true" />
                    </PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <PopoverPanel class="absolute inset-x-0 top-full z-20">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                      <div class="relative bg-white">
                        <div class="mx-auto max-w-7xl px-8">
                          <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div class="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                              <div v-for="(item, itemIdx) in category.featured" :key="item.name" :class="[itemIdx === 0 ? 'aspect-w-2 col-span-2' : '', 'group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100']">
                                <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center group-hover:opacity-75" />
                                <div class="flex flex-col justify-end">
                                  <div class="bg-white bg-opacity-60 p-4 text-sm">
                                    <a :href="item.href" class="font-medium text-gray-900">
                                      <span class="absolute inset-0" aria-hidden="true" />
                                      {{ item.name }}
                                    </a>
                                    <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                              <div v-for="(column, columnIdx) in category.sections" :key="columnIdx" class="space-y-10">
                                <div v-for="section in column" :key="section.name">
                                  <p :id="`${category.id}-${section.id}-heading`" class="font-medium text-gray-900">{{ section.name }}</p>
                                  <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading`" class="mt-4 space-y-4">
                                    <li v-for="item in section.items" :key="item.name" class="flex">
                                      <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                    </li>
                                  </ul>
                                </div>
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

            <!-- Logo -->
            <a href="#" class="flex">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>

            <div class="flex flex-1 items-center justify-end">
              <a href="#" class="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
                <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                <span class="ml-3 block text-sm font-medium">CAD</span>
                <span class="sr-only">, change currency</span>
              </a>

              <!-- Search -->
              <a href="#" class="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
              </a>

              <!-- Account -->
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                <span class="sr-only">Account</span>
                <UserIcon class="h-6 w-6" aria-hidden="true" />
              </a>

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

    <main class="pb-24">
      <div class="px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Workspace</h1>
        <p class="mx-auto mt-4 max-w-xl text-base text-gray-500">The secret to a tidy desk? Don't get rid of anything, just put it in really really nice looking containers.</p>
      </div>

      <!-- Filters -->
      <Disclosure as="section" aria-labelledby="filter-heading" class="grid items-center border-b border-t border-gray-200">
        <h2 id="filter-heading" class="sr-only">Filters</h2>
        <div class="relative col-start-1 row-start-1 py-4">
          <div class="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div>
              <DisclosureButton class="group flex items-center font-medium text-gray-700">
                <FunnelIcon class="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                2 Filters
              </DisclosureButton>
            </div>
            <div class="pl-6">
              <button type="button" class="text-gray-500">Clear all</button>
            </div>
          </div>
        </div>
        <DisclosurePanel class="border-t border-gray-200 py-10">
          <div class="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div class="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend class="block font-medium">Price</legend>
                <div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  <div v-for="(option, optionIdx) in filters.price" :key="option.value" class="flex items-center text-base sm:text-sm">
                    <input :id="`price-${optionIdx}`" name="price[]" :value="option.value" type="checkbox" class="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" :checked="option.checked" />
                    <label :for="`price-${optionIdx}`" class="ml-3 min-w-0 flex-1 text-gray-600">{{ option.label }}</label>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="block font-medium">Color</legend>
                <div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  <div v-for="(option, optionIdx) in filters.color" :key="option.value" class="flex items-center text-base sm:text-sm">
                    <input :id="`color-${optionIdx}`" name="color[]" :value="option.value" type="checkbox" class="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" :checked="option.checked" />
                    <label :for="`color-${optionIdx}`" class="ml-3 min-w-0 flex-1 text-gray-600">{{ option.label }}</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend class="block font-medium">Size</legend>
                <div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  <div v-for="(option, optionIdx) in filters.size" :key="option.value" class="flex items-center text-base sm:text-sm">
                    <input :id="`size-${optionIdx}`" name="size[]" :value="option.value" type="checkbox" class="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" :checked="option.checked" />
                    <label :for="`size-${optionIdx}`" class="ml-3 min-w-0 flex-1 text-gray-600">{{ option.label }}</label>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="block font-medium">Category</legend>
                <div class="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  <div v-for="(option, optionIdx) in filters.category" :key="option.value" class="flex items-center text-base sm:text-sm">
                    <input :id="`category-${optionIdx}`" name="category[]" :value="option.value" type="checkbox" class="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" :checked="option.checked" />
                    <label :for="`category-${optionIdx}`" class="ml-3 min-w-0 flex-1 text-gray-600">{{ option.label }}</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </DisclosurePanel>
        <div class="col-start-1 row-start-1 py-4">
          <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <Menu as="div" class="relative inline-block">
              <div class="flex">
                <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </MenuButton>
              </div>

              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                      <a :href="option.href" :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{ option.name }}</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </Disclosure>

      <!-- Product grid -->
      <section aria-labelledby="products-heading" class="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="product in products" :key="product.id" class="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <div class="pb-4 pt-10 text-center">
              <h3 class="text-sm font-medium text-gray-900">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <div class="mt-3 flex flex-col items-center">
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                <div class="flex items-center">
                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ product.reviewCount }} reviews</p>
              </div>
              <p class="mt-4 text-base font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pagination -->
      <nav aria-label="Pagination" class="mx-auto mt-6 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8">
        <div class="min-w-0 flex-1">
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">Previous</a>
        </div>
        <div class="hidden space-x-2 sm:flex">
          <!-- Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" -->
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">1</a>
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">2</a>
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-indigo-600 bg-white px-4 ring-1 ring-indigo-600 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">3</a>
          <span class="inline-flex h-10 items-center px-1.5 text-gray-500">...</span>
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">8</a>
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">9</a>
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">10</a>
        </div>
        <div class="flex min-w-0 flex-1 justify-end">
          <a href="#" class="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600">Next</a>
        </div>
      </nav>
    </main>

    <footer aria-labelledby="footer-heading" class="bg-white">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 border-t border-gray-200 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
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
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
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
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, FunnelIcon, StarIcon } from '@heroicons/vue/20/solid'

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
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
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
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
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
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
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
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const filters = {
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
}
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const products = [
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
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

const open = ref(false)
</script>