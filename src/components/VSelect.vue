<script lang="ts" setup generic="T extends string | number">
defineProps<{
  options: { label: string; value: T }[]
}>()
const modelValue = defineModel<T>()
</script>

<template>
  <select
    v-model="modelValue"
    class="relative block w-full rounded-md border-0 bg-white px-2.5 py-1.5 pe-9 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:focus:ring-primary-400"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
