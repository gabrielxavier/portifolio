<template>
  <component
    :is="tag"
    class="text-lg text-white bg-amber-600 hover:bg-amber-700 transition rounded-md gap-2 px-4 py-3 font-medium cursor-pointer"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string
  }>(),
  {
    tag: 'button'
  }
)
</script>
