<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="bg-indigo-700 px-4 py-6 sm:px-6">
                    <div class="flex items-center justify-between">
                      <DialogTitle class="text-base font-semibold leading-6 text-white">Panel title</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div class="mt-1">
                      <p class="text-sm text-indigo-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta.</p>
                    </div>
                  </div>
                  <div class="relative flex-1 px-4 py-6 sm:px-6">
                    <!-- Your content -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const open = ref(true)
</script>