<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans for teams of&nbsp;all&nbsp;sizes</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
      <div class="mt-16 flex justify-center">
        <RadioGroup v-model="frequency" class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
          <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
          <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option" v-slot="{ checked }">
            <div :class="[checked ? 'bg-indigo-600 text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1']">
              <span>{{ option.label }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div>
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="tier in tiers" :key="tier.id" :class="[tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200', 'rounded-3xl p-8 xl:p-10']">
          <div class="flex items-center justify-between gap-x-4">
            <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-indigo-600' : 'text-gray-900', 'text-lg font-semibold leading-8']">{{ tier.name }}</h3>
            <p v-if="tier.mostPopular" class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">Most popular</p>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.price[frequency.value] }}</span>
            <span class="text-sm font-semibold leading-6 text-gray-600">{{ frequency.priceSuffix }}</span>
          </p>
          <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500' : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300', 'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">Buy plan</a>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$60', annually: '$576' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

const frequency = ref(frequencies[0])
</script>