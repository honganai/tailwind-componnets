<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
          <p class="mt-6 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
        </div>
        <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-9">
            <dt class="font-semibold text-gray-900">
              <CheckIcon class="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
              {{ feature.name }}
            </dt>
            <dd class="mt-2">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Invite team members',
    description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  },
  { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
  {
    name: 'Keyboard shortcuts',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    name: 'Calendars',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  { name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
  { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    name: 'Reporting',
    description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  },
  {
    name: 'Mobile app',
    description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  },
]
</script>