<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay on top of customer support</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-white">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Manage team members',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Spam report',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: TrashIcon,
  },
]
</script>