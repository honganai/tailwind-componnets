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
                <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
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

    <header class="relative overflow-hidden">
      <!-- Top navigation -->
      <nav aria-label="Top" class="relative z-20 bg-white bg-opacity-90 backdrop-blur-xl backdrop-filter">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center">
            <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden" @click="open = true">
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
                    <PopoverPanel class="absolute inset-x-0 top-full bg-white text-sm text-gray-500">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                      <!-- Fake border when menu is open -->
                      <div class="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8" aria-hidden="true">
                        <div :class="[open ? 'bg-gray-200' : 'bg-transparent', 'h-px w-full transition-colors duration-200 ease-out']" />
                      </div>

                      <div class="relative">
                        <div class="mx-auto max-w-7xl px-8">
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

      <!-- Hero section -->
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
            <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Category section -->
      <section aria-labelledby="category-heading" class="bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 id="category-heading" class="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
            <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." class="object-cover object-center group-hover:opacity-75" />
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div class="flex items-end p-6">
                <div>
                  <h3 class="font-semibold text-white">
                    <a href="#">
                      <span class="absolute inset-0" />
                      New Arrivals
                    </a>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                </div>
              </div>
            </div>
            <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
              <div class="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 class="font-semibold text-white">
                    <a href="#">
                      <span class="absolute inset-0" />
                      Accessories
                    </a>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                </div>
              </div>
            </div>
            <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk." class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
              <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
              <div class="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 class="font-semibold text-white">
                    <a href="#">
                      <span class="absolute inset-0" />
                      Workspace
                    </a>
                  </h3>
                  <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:hidden">
            <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Featured section -->
      <section aria-labelledby="cause-heading">
        <div class="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div class="absolute inset-0 overflow-hidden">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
          </div>
          <div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50" />
          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 id="cause-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Long-term thinking</h2>
            <p class="mt-3 text-xl text-white">We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe.</p>
            <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read our story</a>
          </div>
        </div>
      </section>

      <!-- Favorites section -->
      <section aria-labelledby="favorites-heading">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">Our Favorites</h2>
            <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
            <div v-for="favorite in favorites" :key="favorite.id" class="group relative">
              <div class="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <img :src="favorite.imageSrc" :alt="favorite.imageAlt" class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-4 text-base font-semibold text-gray-900">
                <a :href="favorite.href">
                  <span class="absolute inset-0" />
                  {{ favorite.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ favorite.price }}</p>
            </div>
          </div>

          <div class="mt-6 sm:hidden">
            <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA section -->
      <section aria-labelledby="sale-heading">
        <div class="overflow-hidden pt-32 sm:pt-14">
          <div class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="relative pb-16 pt-48 sm:pb-24">
                <div>
                  <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Final Stock.
                    <br />
                    Up to 50% off.
                  </h2>
                  <div class="mt-6 text-base">
                    <a href="#" class="font-semibold text-white">
                      Shop the sale
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>

                <div class="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                  <div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                      </div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                      </div>
                    </div>
                    <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg" alt="" />
                      </div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg" alt="" />
                      </div>
                    </div>
                    <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                      <div class="flex-shrink-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                      </div>

                      <div class="mt-6 flex-shrink-0 sm:mt-0">
                        <img class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer aria-labelledby="footer-heading" class="bg-white">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              <div>
                <h3 class="text-sm font-medium text-gray-900">Shop</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="item in footerNavigation.shop" :key="item.name" class="text-sm">
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
            <div class="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              <div>
                <h3 class="text-sm font-medium text-gray-900">Account</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="item in footerNavigation.account" :key="item.name" class="text-sm">
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
          <div class="mt-16 md:mt-16 xl:mt-0">
            <h3 class="text-sm font-medium text-gray-900">Sign up for our newsletter</h3>
            <p class="mt-6 text-sm text-gray-500">The latest deals and savings, sent to your inbox weekly.</p>
            <form class="mt-2 flex sm:max-w-md">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" type="text" autocomplete="email" required="" class="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-indigo-500 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
              <div class="ml-4 flex-shrink-0">
                <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign up</button>
              </div>
            </form>
          </div>
        </div>

        <div class="border-t border-gray-200 py-10">
          <p class="text-sm text-gray-500">Copyright &copy; 2021 Your Company, Inc.</p>
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
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'

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
const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
]
const footerNavigation = {
  shop: [
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
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'Redeem a Gift Card', href: '#' },
  ],
  connect: [
    { name: 'Contact Us', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
}

const open = ref(false)
</script>