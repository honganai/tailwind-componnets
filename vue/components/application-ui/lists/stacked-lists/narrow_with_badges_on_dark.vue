<template>
  <ul role="list" class="divide-y divide-white/5">
    <li v-for="deployment in deployments" :key="deployment.id" class="relative flex items-center space-x-4 py-4">
      <div class="min-w-0 flex-auto">
        <div class="flex items-center gap-x-3">
          <div :class="[statuses[deployment.status], 'flex-none rounded-full p-1']">
            <div class="h-2 w-2 rounded-full bg-current" />
          </div>
          <h2 class="min-w-0 text-sm font-semibold leading-6 text-white">
            <a :href="deployment.href" class="flex gap-x-2">
              <span class="truncate">{{ deployment.teamName }}</span>
              <span class="text-gray-400">/</span>
              <span class="whitespace-nowrap">{{ deployment.projectName }}</span>
              <span class="absolute inset-0" />
            </a>
          </h2>
        </div>
        <div class="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
          <p class="truncate">{{ deployment.description }}</p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p class="whitespace-nowrap">{{ deployment.statusText }}</p>
        </div>
      </div>
      <div :class="[environments[deployment.environment], 'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset']">{{ deployment.environment }}</div>
      <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
    </li>
  </ul>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const statuses = {
  offline: 'text-gray-500 bg-gray-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
}
const environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
const deployments = [
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  {
    id: 2,
    href: '#',
    projectName: 'mobile-api',
    teamName: 'Planetaria',
    status: 'online',
    statusText: 'Deployed 3m ago',
    description: 'Deploys from GitHub',
    environment: 'Production',
  },
  {
    id: 3,
    href: '#',
    projectName: 'tailwindcss.com',
    teamName: 'Tailwind Labs',
    status: 'offline',
    statusText: 'Deployed 3h ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  {
    id: 4,
    href: '#',
    projectName: 'api.protocol.chat',
    teamName: 'Protocol',
    status: 'error',
    statusText: 'Failed to deploy 6d ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
]
</script>