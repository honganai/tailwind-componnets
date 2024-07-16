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
  <div class="bg-gray-50">
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
                            <PopoverPanel class="absolute inset-x-0 top-full z-20 text-gray-500 sm:text-sm">
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
    </div>

    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 sm:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400" @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4">
                  <Disclosure as="div" v-for="section in filters" :key="section.name" class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                        <span class="ml-6 flex items-center">
                          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                          <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" :checked="option.checked" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label :for="`filter-mobile-${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-500">{{ option.label }}</label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main>
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Workspace sale</h1>
            <p class="mt-4 max-w-xl text-sm text-gray-700">Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these sale items before we run out.</p>
          </div>
        </div>

        <!-- Filters -->
        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading" class="sr-only">Filters</h2>

          <div class="border-b border-gray-200 bg-white pb-4">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                        <a :href="option.href" :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{ option.name }}</a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>

              <button type="button" class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden" @click="mobileFiltersOpen = true">Filters</button>

              <div class="hidden sm:block">
                <div class="flow-root">
                  <PopoverGroup class="-mx-4 flex items-center divide-x divide-gray-200">
                    <Popover v-for="(section, sectionIdx) in filters" :key="section.name" class="relative inline-block px-4 text-left">
                      <PopoverButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>{{ section.name }}</span>
                        <span v-if="sectionIdx === 0" class="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">1</span>
                        <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      </PopoverButton>

                      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <PopoverPanel class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form class="space-y-4">
                            <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                              <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" :checked="option.checked" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                              <label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">{{ option.label }}</label>
                            </div>
                          </form>
                        </PopoverPanel>
                      </transition>
                    </Popover>
                  </PopoverGroup>
                </div>
              </div>
            </div>
          </div>

          <!-- Active filters -->
          <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
              <h3 class="text-sm font-medium text-gray-500">
                Filters
                <span class="sr-only">, active</span>
              </h3>

              <div aria-hidden="true" class="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

              <div class="mt-2 sm:ml-4 sm:mt-0">
                <div class="-m-1 flex flex-wrap items-center">
                  <span v-for="activeFilter in activeFilters" :key="activeFilter.value" class="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900">
                    <span>{{ activeFilter.label }}</span>
                    <button type="button" class="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500">
                      <span class="sr-only">Remove filter for {{ activeFilter.label }}</span>
                      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Product grid -->
        <section aria-labelledby="products-heading" class="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in products" :key="product.id" :href="product.href" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
            </a>
          </div>
        </section>
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
const breadcrumbs = [
  { id: 1, name: 'Objects', href: '#' },
  { id: 2, name: 'Workspace', href: '#' },
  { id: 3, name: 'Sale', href: '#' },
]
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-shorts', label: 'Pants & Shorts', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false },
    ],
  },
]
const activeFilters = [{ value: 'objects', label: 'Objects' }]
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
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