<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <div>
    <Suspense>
      <HelloWorld />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped></style>
