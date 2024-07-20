<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ orientation?: 'horizontal' | 'vertical' }>(),
  { orientation: 'horizontal' },
)
</script>

<template>
  <div
    class="flex bg-gray-200 dark:bg-gray-800"
    :class="props.orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px'"
  />
</template>
