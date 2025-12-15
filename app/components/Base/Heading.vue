<template>
  <div :class="alignClass">
    <h2 v-if="title" class="text-4xl text-white font-bold">{{ title }}</h2>
    <p v-if="subtitle" class="text-lg text-white mt-4">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
interface HeadingProps {
  title: string
  subtitle?: string
  align?: 'start' | 'center' | 'end'
}

const props = withDefaults(defineProps<HeadingProps>(), {
  align: 'center'
})

const alignClass = computed<string>(() => {
  if (!props.align) return ''

  const alignVariants = {
    center: 'text-center',
    start: 'text-start',
    end: 'text-end'
  }

  return alignVariants[props.align]
})
</script>
