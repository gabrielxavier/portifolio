<template>
  <div class="mb-4">
    <div class="flex justify-between">
      <div class="font-bold mb-2">{{ label }}</div>
      <div class="text-neutral-200">{{ caption }}</div>
    </div>
    <div class="rounded-lg bg-white">
      <div class="rounded-lg bg-amber-600 h-2" :style="{ width: `${value * 100}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ProgressbarProps {
  label: string
  value: number
  caption: string
}

defineProps<ProgressbarProps>()
</script>
