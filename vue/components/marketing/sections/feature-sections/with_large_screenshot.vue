<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No server? No problem.</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="App screenshot" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" width="2432" height="1442" />
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
        </div>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-9">
          <dt class="inline font-semibold text-gray-900">
            <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
]
</script>