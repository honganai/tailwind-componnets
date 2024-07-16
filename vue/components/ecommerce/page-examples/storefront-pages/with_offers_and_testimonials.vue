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

    <header class="relative z-10">
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
          <div class="border-b border-gray-200">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

    <main>
      <!-- Hero -->
      <div class="flex flex-col border-b border-gray-200 lg:border-0">
        <nav aria-label="Offers" class="order-last lg:order-first">
          <div class="mx-auto max-w-7xl lg:px-8">
            <ul role="list" class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              <li v-for="offer in offers" :key="offer.name" class="flex flex-col">
                <a :href="offer.href" class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10">
                  <p class="text-sm text-gray-500">{{ offer.name }}</p>
                  <p class="font-semibold text-gray-900">{{ offer.description }}</p>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="relative">
          <div aria-hidden="true" class="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
          <div class="relative bg-gray-100 lg:bg-transparent">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div class="lg:pr-16">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">Focus on what matters</h1>
                  <p class="mt-4 text-xl text-gray-600">All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.</p>
                  <div class="mt-6">
                    <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700">Shop Productivity</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg" alt="" class="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>

      <!-- Trending products -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
          <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 id="trending-heading" class="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
            <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="relative mt-8">
            <div class="relative w-full overflow-x-auto">
              <ul role="list" class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
                <li v-for="product in trendingProducts" :key="product.id" class="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div class="mt-6">
                      <p class="text-sm text-gray-500">{{ product.color }}</p>
                      <h3 class="mt-1 font-semibold text-gray-900">
                        <a :href="product.href">
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-gray-900">{{ product.price }}</p>
                    </div>
                  </div>

                  <h4 class="sr-only">Available colors</h4>
                  <ul role="list" class="mt-auto flex items-center justify-center space-x-3 pt-6">
                    <li v-for="color in product.availableColors" :key="color.name" class="h-4 w-4 rounded-full border border-black border-opacity-10" :style="{ backgroundColor: color.colorBg }">
                      <span class="sr-only">{{ color.name }}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-12 px-4 sm:hidden">
            <a href="#" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Collections -->
      <section aria-labelledby="collections-heading" class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 id="collections-heading" class="text-2xl font-bold text-gray-900">Collections</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div v-for="collection in collections" :key="collection.name" class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img :src="collection.imageSrc" :alt="collection.imageAlt" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a :href="collection.href">
                    <span class="absolute inset-0" />
                    {{ collection.name }}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">{{ collection.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sale and testimonials -->
      <div class="relative overflow-hidden">
        <!-- Decorative background image and gradient -->
        <div aria-hidden="true" class="absolute inset-0">
          <div class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
          </div>
          <div class="absolute inset-0 bg-white bg-opacity-75" />
          <div class="absolute inset-0 bg-gradient-to-t from-white via-white" />
        </div>

        <!-- Sale -->
        <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get 25% off during our one-time sale</h2>
            <p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
            <a href="#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto">Get access to our one-time sale</a>
          </div>
        </section>

        <!-- Testimonials -->
        <section aria-labelledby="testimonial-heading" class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900">What are people saying?</h2>

            <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              <blockquote v-for="testimonial in testimonials" :key="testimonial.id" class="sm:flex lg:block">
                <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
                  <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                </svg>
                <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p class="text-lg text-gray-600">{{ testimonial.quote }}</p>
                  <cite class="mt-4 block font-semibold not-italic text-gray-900">{{ testimonial.attribution }}</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer aria-labelledby="footer-heading" class="bg-white">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200">
          <div class="pb-20 pt-16">
            <div class="md:flex md:justify-center">
              <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
            </div>
            <div class="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
              <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Products</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li v-for="item in footerNavigation.products" :key="item.name" class="text-sm">
                        <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                      </li>
                    </ul>
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
                <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Company</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li v-for="item in footerNavigation.company" :key="item.name" class="text-sm">
                        <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Legal</h3>
                    <ul role="list" class="mt-6 space-y-6">
                      <li v-for="item in footerNavigation.legal" :key="item.name" class="text-sm">
                        <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
            <div class="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
              <div class="mx-auto max-w-sm">
                <h3 class="font-semibold text-gray-900">Sign up for our newsletter</h3>
                <p class="mt-2 text-sm text-gray-500">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form class="mt-4 sm:mt-6 sm:flex">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input id="email-address" type="text" autocomplete="email" required="" class="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  <div class="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white">Sign up</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="relative mt-6 flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:mt-0">
              <div class="absolute inset-0 overflow-hidden rounded-lg">
                <img src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg" alt="" class="h-full w-full object-cover object-center saturate-0 filter" />
                <div class="absolute inset-0 bg-indigo-600 bg-opacity-90" />
              </div>
              <div class="relative mx-auto max-w-sm text-center">
                <h3 class="text-2xl font-bold tracking-tight text-white">Get early access</h3>
                <p class="mt-2 text-gray-200">
                  Did you sign up to the newsletter? If so, use the keyword we sent you to get access. <a href="#" class="whitespace-nowrap font-bold text-white hover:text-gray-200">Go now<span aria-hidden="true"> &rarr;</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="py-10 md:flex md:items-center md:justify-between">
          <div class="text-center md:text-left">
            <p class="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
          </div>

          <div class="mt-4 flex items-center justify-center md:mt-0">
            <div class="flex space-x-8">
              <a v-for="item in footerNavigation.bottomLinks" :key="item.name" :href="item.href" class="text-sm text-gray-500 hover:text-gray-600">{{ item.name }}</a>
            </div>

            <div class="ml-6 border-l border-gray-200 pl-6">
              <a href="#" class="flex items-center text-gray-500 hover:text-gray-600">
                <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="h-auto w-5 flex-shrink-0" />
                <span class="ml-3 text-sm">Change</span>
                <span class="sr-only">location and currency</span>
              </a>
            </div>
          </div>
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
const offers = [
  { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
  { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
  { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
]
const trendingProducts = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  // More products...
]
const collections = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
const testimonials = [
  {
    id: 1,
    quote:
      'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
    attribution: 'Sarah Peters, New Orleans',
  },
  {
    id: 2,
    quote:
      'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
    attribution: 'Kelly McPherson, Chicago',
  },
  {
    id: 3,
    quote:
      'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
    attribution: 'Chris Paul, Phoenix',
  },
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
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
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
  ],
  bottomLinks: [
    { name: 'Accessibility', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

const mobileMenuOpen = ref(false)
</script>