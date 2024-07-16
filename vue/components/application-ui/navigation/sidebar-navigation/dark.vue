<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
    <div class="flex h-16 shrink-0 items-center">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
    </div>
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="item in navigation" :key="item.name">
              <a :href="item.href" :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                {{ item.name }}
                <span v-if="item.count" class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700" aria-hidden="true">{{ item.count }}</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            <li v-for="team in teams" :key="team.name">
              <a :href="team.href" :class="[team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{ team.initial }}</span>
                <span class="truncate">{{ team.name }}</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="-mx-6 mt-auto">
          <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
            <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <span class="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
</script>