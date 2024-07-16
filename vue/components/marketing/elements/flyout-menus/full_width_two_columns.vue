<template>
  <Popover class="relative isolate z-50 shadow">
    <div class="bg-white py-5">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          Solutions
          <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
        </PopoverButton>
      </div>
    </div>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
      <PopoverPanel class="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
          <div class="grid grid-cols-2 gap-x-6 sm:gap-x-8">
            <div>
              <h3 class="text-sm font-medium leading-6 text-gray-500">Engagement</h3>
              <div class="mt-6 flow-root">
                <div class="-my-2">
                  <a v-for="item in engagement" :key="item.name" :href="item.href" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                    <component :is="item.icon" class="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium leading-6 text-gray-500">Resources</h3>
              <div class="mt-6 flow-root">
                <div class="-my-2">
                  <a v-for="item in resources" :key="item.name" :href="item.href" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900">
                    <component :is="item.icon" class="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
            <h3 class="sr-only">Recent posts</h3>
            <article v-for="post in recentPosts" :key="post.id" class="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch">
              <div class="relative flex-none">
                <img class="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto" :src="post.imageUrl" alt="" />
                <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div class="flex items-center gap-x-4">
                  <time :datetime="post.datetime" class="text-sm leading-6 text-gray-600">{{ post.date }}</time>
                  <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
                </div>
                <h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h4>
                <p class="mt-2 text-sm leading-6 text-gray-600">{{ post.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/vue/24/outline'

const engagement = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: UsersIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookOpenIcon },
  { name: 'Webinars', href: '#', icon: VideoCameraIcon },
]
const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
]
</script>