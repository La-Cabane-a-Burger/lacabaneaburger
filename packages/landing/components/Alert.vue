<template>
  <div class="rounded-md p-4" :class="data.backgroundColor">
    <div class="flex">
      <div class="flex-shrink-0">
        <component :is="data.icon" :class="data.iconColor" class="h-5 w-5" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-yellow-800">
          <slot name="title" />
        </h3>
        <div class="text-sm text-yellow-700">
          <p>
            <slot class="mt-2" name="description" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon} from '@heroicons/vue/solid'
import {computed, defineComponent, Ref} from "vue";

export default defineComponent({
  props: {
    type: { type: String, default: 'warning'}
  },
  components: {
    ExclamationIcon,
    XCircleIcon,
    CheckCircleIcon,
    InformationCircleIcon
  }, setup(props) {

    interface Data {
      icon: String,
      iconColor: String,
      backgroundColor: String
    }

    const configuration = {
      'warning': {
        icon: 'ExclamationIcon',
        iconColor: 'text-yellow-400',
        backgroundColor: 'bg-yellow-50'
      },
      'error': {
        icon: 'XCircleIcon',
        iconColor: 'text-red-400',
        backgroundColor: 'bg-red-50'
      },
      'success': {
        icon: 'CheckCircleIcon',
        iconColor: 'text-green-400',
        backgroundColor: 'bg-green-50'
      },
      'info': {
        icon: 'InformationCircleIcon',
        iconColor: 'text-blue-400',
        backgroundColor: 'bg-blue-50'
      },
    };


    const data: Ref<Data> = computed(() => configuration[props.type])

    return {
      data
    }
  }
})
</script>
