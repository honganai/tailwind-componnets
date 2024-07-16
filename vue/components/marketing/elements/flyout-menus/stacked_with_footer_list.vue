<template>
  <Popover class="relative">
    <PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
      <span>Resources</span>
      <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div class="p-4">
            <div v-for="item in resources" :key="item.name" class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
              <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
              </div>
              <div>
                <a :href="item.href" class="font-semibold text-gray-900">
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 p-8">
            <div class="flex justify-between">
              <h3 class="text-sm font-semibold leading-6 text-gray-500">Recent posts</h3>
              <a href="#" class="text-sm font-semibold leading-6 text-indigo-600">See all <span aria-hidden="true">&rarr;</span></a>
            </div>
            <ul role="list" class="mt-6 space-y-6">
              <li v-for="post in recentPosts" :key="post.id" class="relative">
                <time :datetime="post.datetime" class="block text-xs leading-6 text-gray-600">{{ post.date }}</time>
                <a :href="post.href" class="block truncate text-sm font-semibold leading-6 text-gray-900">
                  {{ post.title }}
                  <span class="absolute inset-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { BookmarkSquareIcon, CalendarDaysIcon, LifebuoyIcon } from '@heroicons/vue/24/outline'

const resources = [
  { name: 'Help center', description: 'Get all of your questions answered', href: '#', icon: LifebuoyIcon },
  { name: 'Guides', description: 'Learn how to maximize our platform', href: '#', icon: BookmarkSquareIcon },
  { name: 'Events', description: 'See meet-ups and other events near you', href: '#', icon: CalendarDaysIcon },
]
const recentPosts = [
  { id: 1, title: 'Boost your conversion rate', href: '#', date: 'Mar 5, 2023', datetime: '2023-03-05' },
  {
    id: 2,
    title: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    date: 'Feb 25, 2023',
    datetime: '2023-02-25',
  },
  { id: 3, title: 'Improve your customer experience', href: '#', date: 'Feb 21, 2023', datetime: '2023-02-21' },
]
</script>