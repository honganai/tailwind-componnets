<template>
  <div class="relative bg-white">
    <img class="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80" alt="" />
    <div class="mx-auto grid max-w-7xl lg:grid-cols-2">
      <div class="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
        <div class="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
          <h2 class="text-base font-semibold leading-8 text-indigo-600">Our track record</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by thousands of creators&nbsp;worldwide</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          <dl class="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
            <div v-for="stat in stats" :key="stat.id" class="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt class="text-sm leading-6 text-gray-600">{{ stat.name }}</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]
</script>