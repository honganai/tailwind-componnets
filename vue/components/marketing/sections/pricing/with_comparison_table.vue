<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Plans for teams of&nbsp;all&nbsp;sizes</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>

      <!-- xs to lg -->
      <div class="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
        <section v-for="tier in tiers" :key="tier.id" :class="[tier.mostPopular ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200' : '', 'p-8']">
          <h3 :id="tier.id" class="text-sm font-semibold leading-6 text-gray-900">{{ tier.name }}</h3>
          <p class="mt-2 flex items-baseline gap-x-1 text-gray-900">
            <span class="text-4xl font-bold">{{ tier.priceMonthly }}</span>
            <span class="text-sm font-semibold">/month</span>
          </p>
          <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300', 'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">Buy plan</a>
          <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900">
            <li v-for="section in sections" :key="section.name">
              <ul role="list" class="space-y-4">
                <template v-for="feature in section.features" :key="feature.name">
                  <li v-if="feature.tiers[tier.name]" class="flex gap-x-3">
                    <CheckIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      {{ feature.name }}
                      {{ ' ' }}
                      <span v-if="typeof feature.tiers[tier.name] === 'string'" class="text-sm leading-6 text-gray-500">({{ feature.tiers[tier.name] }})</span>
                    </span>
                  </li>
                </template>
              </ul>
            </li>
          </ul>
        </section>
      </div>

      <!-- lg+ -->
      <div class="isolate mt-20 hidden lg:block">
        <div class="relative -mx-8">
          <div v-if="tiers.some((tier) => tier.mostPopular)" class="absolute inset-x-4 inset-y-0 -z-10 flex">
            <div class="flex w-1/4 px-4" aria-hidden="true" :style="{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }">
              <div class="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
            </div>
          </div>
          <table class="w-full table-fixed border-separate border-spacing-x-8 text-left">
            <caption class="sr-only">
              Pricing plan comparison
            </caption>
            <colgroup>
              <col class="w-1/4" />
              <col class="w-1/4" />
              <col class="w-1/4" />
              <col class="w-1/4" />
            </colgroup>
            <thead>
              <tr>
                <td />
                <th v-for="tier in tiers" :key="tier.id" scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
                  <div class="text-sm font-semibold leading-7 text-gray-900">{{ tier.name }}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><span class="sr-only">Price</span></th>
                <td v-for="tier in tiers" :key="tier.id" class="px-6 pt-2 xl:px-8">
                  <div class="flex items-baseline gap-x-1 text-gray-900">
                    <span class="text-4xl font-bold">{{ tier.priceMonthly }}</span>
                    <span class="text-sm font-semibold leading-6">/month</span>
                  </div>
                  <a :href="tier.href" :class="[tier.mostPopular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300', 'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">Buy plan</a>
                </td>
              </tr>
              <template v-for="(section, sectionIdx) in sections" :key="section.name">
                <tr>
                  <th scope="colgroup" colspan="4" :class="[sectionIdx === 0 ? 'pt-8' : 'pt-16', 'pb-4 text-sm font-semibold leading-6 text-gray-900']">
                    {{ section.name }}
                    <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                  </th>
                </tr>
                <tr v-for="feature in section.features" :key="feature.name">
                  <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                    {{ feature.name }}
                    <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                  </th>
                  <td v-for="tier in tiers" :key="tier.id" class="px-6 py-4 xl:px-8">
                    <div v-if="typeof feature.tiers[tier.name] === 'string'" class="text-center text-sm leading-6 text-gray-500">{{ feature.tiers[tier.name] }}</div>
                    <template v-else>
                      <CheckIcon v-if="feature.tiers[tier.name] === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                      <MinusIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Included' : 'Not included' }} in {{ tier.name }}</span>
                    </template>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, MinusIcon } from '@heroicons/vue/20/solid'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$9',
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
  },
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '#',
    priceMonthly: '$29',
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '$59',
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    mostPopular: false,
  },
]
const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Integrations', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Shared links', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Importing and exporting', tiers: { Essential: true, Premium: true } },
      { name: 'Team members', tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Advanced analytics', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Basic reports', tiers: { Essential: true, Premium: true } },
      { name: 'Professional reports', tiers: { Premium: true } },
      { name: 'Custom report builder', tiers: { Premium: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '24/7 online support', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Quarterly product workshops', tiers: { Essential: true, Premium: true } },
      { name: 'Priority phone support', tiers: { Essential: true, Premium: true } },
      { name: '1:1 onboarding tour', tiers: { Premium: true } },
    ],
  },
]
</script>