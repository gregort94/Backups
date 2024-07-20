<script lang="ts" setup>
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
defineProps<{ loading?: boolean }>()
</script>

<template>
  <button
    class="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-center text-sm font-medium text-white shadow-sm focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-75 dark:text-gray-900"
  >
    <ArrowPathIcon
      v-if="loading"
      class="h-5 w-5 flex-shrink-0 animate-spin"
    />
    <div>
      <slot />
    </div>
  </button>
</template>
