<script lang="ts" setup>
import { v4 as uuid } from 'uuid'
import { provide } from 'vue'

withDefaults(
  defineProps<{ label?: string; orientation?: 'horizontal' | 'vertical' }>(),
  { orientation: 'vertical' },
)

const id = uuid()
provide('formGroupLabelId', id)
</script>

<template>
  <div
    class="flex gap-2"
    :class="orientation === 'horizontal' ? 'flex-row' : 'flex-col'"
  >
    <label :for="id">{{ label }}</label>
    <div>
      <slot />
    </div>
  </div>
</template>
