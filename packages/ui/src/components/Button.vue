<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'default'
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {

    const classes = computed(() => ({
      'text-white bg-primary-900 px-4 py-2 rounded-sm font-medium': props.type === 'default',
      'text-primary-900 px-4 py-2 rounded-sm border-primary-900 border-2 font-medium': props.type === 'border',
      'text-primary-900 px-4 py-2 rounded-sm bg-primary-50 font-medium': props.type === 'flat'
    }))


    return {

      classes,

      // classes: computed(() => ({
      //   'storybook-button': true,
      //   'storybook-button--primary font-bold': props.primary,
      //   'storybook-button--secondary': !props.primary,
      //   [`storybook-button--${props.size || 'medium'}`]: true,
      // })),


      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
}) ;
</script>
