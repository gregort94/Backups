<script lang="ts" setup>
const modelValue = defineModel<boolean>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-gray-200/75 transition-opacity dark:bg-gray-800/75"
    >
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        @click.self="modelValue = false"
      >
        <div
          class="relative flex w-full flex-col rounded-lg bg-white text-left shadow-xl sm:my-8 sm:max-w-lg rtl:text-right dark:bg-gray-900"
        >
          <div class="p-4">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
