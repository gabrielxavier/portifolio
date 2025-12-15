<template>
  <NuxtLayout>
    <LayoutTheHeader />
    <NuxtPage />
    <LayoutTheFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-zinc-900 text-white pt-26'
  }
})
</script>
