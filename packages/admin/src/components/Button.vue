<template>
  <button type="button"
          class="flex gap-2"
          :class="[buttonCss, { 'opacity-50 cursor-not-allowed': disabled }]">
    <slot></slot>
    <span v-if="loading">
        <LoadingIcon
            :class="{ 'text-primary-900': color === 'warning' || color === 'white' }"
            class="h-5 w-5 text-white animate-spin"
        ></LoadingIcon>
      </span>
  </button>
</template>

<script setup lang="ts">
import {computed, ComputedRef} from "vue";
import LoadingIcon from "./LoadingIcon.vue";

const props = defineProps({
  color: { type: String, default: 'primary' },
  size: { type: String, default: 'base' },
  type: { type: String, default: 'button' },
  disabled: Boolean,
  loading: Boolean
});

const backgroundColors: Record<string, string> = {
  primary:
      'text-white bg-primary-900 border border-transparent hover:bg-primary-800 focus:ring-primary-600 shadow-sm',
  secondary:
      'text-yellow-900 bg-yellow-300 border border-transparent hover:bg-yellow-400 focus:ring-yellow-200 shadow-sm',
  success:
      'text-white bg-green-400 border border-transparent hover:bg-green-500 focus:ring-green-300 shadow-sm',
  danger:
      'text-white bg-red-600 border border-transparent hover:bg-red-700 focus:ring-red-500 shadow-sm',
  warning: 'text-red-700 bg-white border border-gray-300 focus:ring-red-500 shadow-sm',
  white:
      'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-primary-400 shadow-sm'
};

const textColors: ComputedRef<Record<string, string>> = computed(() => {
  const res = {
    primary: 'text-primary-400',
    secondary: 'text-yellow-300',
    warning: 'text-red-700',
    black: 'text-gray-900'
  };
  if (!props.disabled) {
    return {
      primary: `${res.primary} hover:text-primary-500`,
      secondary: `${res.secondary} hover:text-yellow-400`,
      warning: `${res.warning} hover:text-red-800`,
      black: res.black
    };
  }
  return res;
});

const textSizes: Record<string, string> = {
  xl: 'py-3 text-base',
  lg: 'py-2 text-base',
  base: 'py-2 text-sm',
  sm: 'py-2 text-sm leading-4',
  xs: 'py-1.5 text-xs'
};

const backgroundSizes: Record<string, string> = {
  xl: 'px-6 py-3 text-base',
  lg: 'px-4 py-2 text-base',
  base: 'px-4 py-2 text-sm',
  sm: 'px-3 py-2 text-sm leading-4',
  xs: 'px-2.5 py-1.5 text-xs'
};

const buttonCss = computed(() => {
  if (props.type === 'text') {
    return `${textColors.value[props.color]} ${textSizes[props.size]}`;
  }

  return `${backgroundColors[props.color]} ${
      backgroundSizes[props.size]
  } focus:ring-2 focus:ring-offset-2 ${props.size === 'xs' ? 'rounded' : 'rounded-md'}`;
});

</script>
