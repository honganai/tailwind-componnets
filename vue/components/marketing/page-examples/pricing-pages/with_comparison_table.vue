<template>
  <div class="bg-white">
    <!-- Header -->
    <header class="bg-gray-900">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-white">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIconOutline class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <main>
      <!-- Pricing section -->
      <div class="isolate overflow-hidden">
        <div class="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="relative z-10">
              <h1 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">Simple pricing, no commitment</h1>
              <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum quos odit doloribus.</p>
              <div class="mt-16 flex justify-center">
                <RadioGroup v-model="frequency" class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
                  <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
                  <RadioGroupOption as="template" v-for="option in pricing.frequencies" :key="option.value" :value="option" v-slot="{ checked }">
                    <div :class="[checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1']">
                      <span>{{ option.label }}</span>
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </div>
            </div>
            <div class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
              <svg viewBox="0 0 1208 1024" aria-hidden="true" class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
                <ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx="604" ry="512" />
                <defs>
                  <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10" aria-hidden="true" />
              <div v-for="tier in pricing.tiers" :key="tier.id" :class="[tier.featured ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10' : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0', 'relative rounded-2xl']">
                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h2 :id="tier.id" :class="[tier.featured ? 'text-gray-900' : 'text-white', 'text-sm font-semibold leading-6']">{{ tier.name }}</h2>
                  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div class="mt-2 flex items-center gap-x-4">
                      <p :class="[tier.featured ? 'text-gray-900' : 'text-white', 'text-4xl font-bold tracking-tight']">{{ tier.price[frequency.value] }}</p>
                      <div class="text-sm leading-5">
                        <p :class="tier.featured ? 'text-gray-900' : 'text-white'">USD</p>
                        <p :class="tier.featured ? 'text-gray-500' : 'text-gray-400'">{{ `Billed ${frequency.value}` }}</p>
                      </div>
                    </div>
                    <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.featured ? 'bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white', 'rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">Buy this plan</a>
                  </div>
                  <div class="mt-8 flow-root sm:mt-10">
                    <ul role="list" :class="[tier.featured ? 'divide-gray-900/5 border-gray-900/5 text-gray-600' : 'divide-white/5 border-white/5 text-white', '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0']">
                      <li v-for="mainFeature in tier.mainFeatures" :key="mainFeature" class="flex gap-x-3 py-2">
                        <CheckIcon :class="[tier.featured ? 'text-indigo-600' : 'text-gray-500', 'h-6 w-5 flex-none']" aria-hidden="true" />
                        {{ mainFeature }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative bg-gray-50 lg:pt-14">
          <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <!-- Feature comparison (up to lg) -->
            <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
              <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

              <div class="mx-auto max-w-2xl space-y-16">
                <div v-for="tier in pricing.tiers" :key="tier.id" class="border-t border-gray-900/10">
                  <div :class="[tier.featured ? 'border-indigo-600' : 'border-transparent', '-mt-px w-72 border-t-2 pt-10 md:w-80']">
                    <h3 :class="[tier.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-semibold leading-6']">{{ tier.name }}</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
                  </div>

                  <div class="mt-10 space-y-10">
                    <div v-for="section in pricing.sections" :key="section.name">
                      <h4 class="text-sm font-semibold leading-6 text-gray-900">{{ section.name }}</h4>
                      <div class="relative mt-6">
                        <!-- Fake card background -->
                        <div aria-hidden="true" class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block" />

                        <div :class="[tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10', 'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0']">
                          <dl class="divide-y divide-gray-200 text-sm leading-6">
                            <div v-for="feature in section.features" :key="feature.name" class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
                              <dt class="pr-4 text-gray-600">{{ feature.name }}</dt>
                              <dd class="flex items-center justify-end sm:justify-center sm:px-4">
                                <span v-if="typeof feature.tiers[tier.name] === 'string'" :class="tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900'">{{ feature.tiers[tier.name] }}</span>
                                <template v-else>
                                  <CheckIcon v-if="feature.tiers[tier.name] === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                  <XMarkIconMini v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                  <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : 'No' }}</span>
                                </template>
                              </dd>
                            </div>
                          </dl>
                        </div>

                        <!-- Fake card border -->
                        <div aria-hidden="true" :class="[tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10', 'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Feature comparison (lg+) -->
            <section aria-labelledby="comparison-heading" class="hidden lg:block">
              <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

              <div class="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
                <div v-for="tier in pricing.tiers" :key="tier.id" aria-hidden="true" class="-mt-px">
                  <div :class="[tier.featured ? 'border-indigo-600' : 'border-transparent', 'border-t-2 pt-10']">
                    <p :class="[tier.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-semibold leading-6']">{{ tier.name }}</p>
                    <p class="mt-1 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
                  </div>
                </div>
              </div>

              <div class="-mt-6 space-y-16">
                <div v-for="section in pricing.sections" :key="section.name">
                  <h3 class="text-sm font-semibold leading-6 text-gray-900">{{ section.name }}</h3>
                  <div class="relative -mx-8 mt-10">
                    <!-- Fake card backgrounds -->
                    <div class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block" aria-hidden="true">
                      <div class="h-full w-full rounded-lg bg-white shadow-sm" />
                      <div class="h-full w-full rounded-lg bg-white shadow-sm" />
                      <div class="h-full w-full rounded-lg bg-white shadow-sm" />
                    </div>

                    <table class="relative w-full border-separate border-spacing-x-8">
                      <thead>
                        <tr class="text-left">
                          <th scope="col">
                            <span class="sr-only">Feature</span>
                          </th>
                          <th v-for="tier in pricing.tiers" :key="tier.id" scope="col">
                            <span class="sr-only">{{ tier.name }} tier</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(feature, featureIdx) in section.features" :key="feature.name">
                          <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900">
                            {{ feature.name }}
                            <div v-if="featureIdx !== section.features.length - 1" class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                          </th>
                          <td v-for="tier in pricing.tiers" :key="tier.id" class="relative w-1/4 px-4 py-0 text-center">
                            <span class="relative h-full w-full py-3">
                              <span v-if="typeof feature.tiers[tier.name] === 'string'" :class="[tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900', 'text-sm leading-6']">{{ feature.tiers[tier.name] }}</span>
                              <template v-else>
                                <CheckIcon v-if="feature.tiers[tier.name] === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                <XMarkIconMini v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : 'No' }}</span>
                              </template>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- Fake card borders -->
                    <div class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block" aria-hidden="true">
                      <div v-for="tier in pricing.tiers" :key="tier.id" :class="[tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10', 'rounded-lg']" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <!-- FAQ section -->
      <div class="mx-auto mt-24 max-w-7xl divide-y divide-gray-900/10 px-6 sm:mt-56 lg:px-8">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
          <div v-for="faq in faqs" :key="faq.id" class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{{ faq.question }}</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </main>

    <!-- Footer -->
    <footer class="mt-24 sm:mt-56" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Company name" />
            <p class="text-sm leading-6 text-gray-600">Making the world a better place through constructing elegant hierarchies.</p>
            <div class="flex space-x-6">
              <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.solutions" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.support" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.company" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.legal" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from 'vue'
import { Dialog, DialogPanel, RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon as XMarkIconOutline } from '@heroicons/vue/24/outline'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' },
  ],
  tiers: [
    {
      name: 'Starter',
      id: 'tier-starter',
      href: '#',
      featured: false,
      description: 'All your essential business finances, taken care of.',
      price: { monthly: '$15', annually: '$144' },
      mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts'],
    },
    {
      name: 'Scale',
      id: 'tier-scale',
      href: '#',
      featured: true,
      description: 'The best financial services for your thriving business.',
      price: { monthly: '$60', annually: '$576' },
      mainFeatures: [
        'Advanced invoicing',
        'Easy to use accounting',
        'Mutli-accounts',
        'Tax planning toolkit',
        'VAT & VATMOSS filing',
        'Free bank transfers',
      ],
    },
    {
      name: 'Growth',
      id: 'tier-growth',
      href: '#',
      featured: false,
      description: 'Convenient features to take your business to the next level.',
      price: { monthly: '$30', annually: '$288' },
      mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts', 'Tax planning toolkit'],
    },
  ],
  sections: [
    {
      name: 'Catered for business',
      features: [
        { name: 'Tax Savings', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Easy to use accounting', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Multi-accounts', tiers: { Starter: '3 accounts', Scale: 'Unlimited accounts', Growth: '7 accounts' } },
        { name: 'Invoicing', tiers: { Starter: '3 invoices', Scale: 'Unlimited invoices', Growth: '10 invoices' } },
        { name: 'Exclusive offers', tiers: { Starter: false, Scale: true, Growth: true } },
        { name: '6 months free advisor', tiers: { Starter: false, Scale: true, Growth: true } },
        { name: 'Mobile and web access', tiers: { Starter: false, Scale: true, Growth: false } },
      ],
    },
    {
      name: 'Other perks',
      features: [
        { name: '24/7 customer support', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Instant notifications', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Budgeting tools', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Digital receipts', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Pots to separate money', tiers: { Starter: false, Scale: true, Growth: true } },
        { name: 'Free bank transfers', tiers: { Starter: false, Scale: true, Growth: false } },
        { name: 'Business debit card', tiers: { Starter: false, Scale: true, Growth: false } },
      ],
    },
  ],
}
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}

const mobileMenuOpen = ref(false)
const frequency = ref(pricing.frequencies[0])
</script>