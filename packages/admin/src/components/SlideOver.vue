<template>
  <TransitionRoot as="template" :show="isSlideOverOpen">
    <Dialog as="div" class="fixed inset-0 overflow-hidden z-50" @close="onClose">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="fixed inset-0 bg-black opacity-30"/>

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                           enter-from="translate-x-full" enter-to="translate-x-0"
                           leave="transform transition ease-in-out duration-500 sm:duration-700"
                           leave-from="translate-x-0" leave-to="translate-x-full">
            <div class="w-screen max-w-2xl">
              <form class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="flex-1">
                  <!-- Header -->
                  <div class="px-4 py-6 bg-gray-50 sm:px-6">
                    <div class="flex items-start justify-between space-x-3">
                      <div class="space-y-1">
                        <DialogTitle class="text-lg font-medium text-gray-900">
                          Modifier un ingrédient
                        </DialogTitle>
                        <p class="text-sm text-gray-500">
                          Modifiez les informations suivantes pour mettre à jour cet ingrédient.
                        </p>
                      </div>
                      <div class="h-7 flex items-center">
                        <button type="button" @click="onClose"
                                class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Fermer</span>
                          <XIcon class="h-6 w-6" aria-hidden="true"/>
                        </button>
                      </div>
                    </div>
                  </div>

                  <slot name="content"/>


                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {computed, ref} from 'vue'
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {XIcon} from '@heroicons/vue/outline'
import {LinkIcon, PlusSmIcon, QuestionMarkCircleIcon} from '@heroicons/vue/solid'

const team = [
  {
    name: 'Tom Cook',
    email: 'tomcook@example.com',
    href: '#',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitneyfrancis@example.com',
    href: '#',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonardkrasner@example.com',
    href: '#',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floydmiles@example.com',
    href: '#',
    imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emilyselman@example.com',
    href: '#',
    imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    LinkIcon,
    PlusSmIcon,
    QuestionMarkCircleIcon,
    XIcon,
  },
  props: {
    isOpen: {type: Boolean, require: true}
  },
  setup(props, {emit}) {

    const isSlideOverOpen = computed({
      get: () => props.isOpen,
      set: val => {
        emit('update:isOpen', val);
      }
    });

    const onClose = () => {
      isSlideOverOpen.value = false
      emit('close');
    }

    return {
      team,
      isSlideOverOpen,
      onClose
    }
  },
}
</script>
