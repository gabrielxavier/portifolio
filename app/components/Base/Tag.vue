<template>
  <div class="rounded-lg text-white bg-amber-600 inline-block" :class="sizeClass"><slot></slot></div>
</template>

<script setup lang="ts">
interface TagProps {
  size?: 'compact' | 'default' | 'comfortable'
}

const props = withDefaults(defineProps<TagProps>(), {
  size: 'default'
})

const sizeClass = computed<string>(() => {
  if (!props.size) return ''

  const sizeVariants = {
    compact: 'px-3 py-1',
    default: 'px-4 py-2',
    comfortable: 'px-5 py-2'
  }

  return sizeVariants[props.size]
})
</script>
