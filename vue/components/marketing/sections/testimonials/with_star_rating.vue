<template>
  <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <figure class="mx-auto max-w-2xl">
      <p class="sr-only">5 out of 5 stars</p>
      <div class="flex gap-x-1 text-indigo-600">
        <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
      </div>
      <blockquote class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
        <p>“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”</p>
      </blockquote>
      <figcaption class="mt-10 flex items-center gap-x-6">
        <img class="h-12 w-12 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt="" />
        <div class="text-sm leading-6">
          <div class="font-semibold text-gray-900">Judith Black</div>
          <div class="mt-0.5 text-gray-600">CEO of Workcation</div>
        </div>
      </figcaption>
    </figure>
  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
</script>