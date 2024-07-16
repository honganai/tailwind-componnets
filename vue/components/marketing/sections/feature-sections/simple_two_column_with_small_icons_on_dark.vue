<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No server? No problem.</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-9">
          <dt class="inline font-semibold text-white">
            <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
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
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description: 'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description: 'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: ServerIcon,
  },
]
</script>