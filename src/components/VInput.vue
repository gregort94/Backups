<script lang="ts" setup>
import { inject } from 'vue'

const modelValue = defineModel<string>()

const id = inject<string>('formGroupLabelId')
</script>

<template>
  <div>
    <input
      v-bind="$attrs"
      :id="id"
      v-model="modelValue"
      class="focus:ring-primary-500 dark:focus:ring-primary-400 relative block w-full rounded-md border-0 bg-white px-2.5 py-1.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:ring-gray-700"
    />
  </div>
</template>
