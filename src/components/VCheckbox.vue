<script lang="ts" setup>
import { inject } from 'vue'

const modelValue = defineModel<boolean>()

const id = inject<string>('formGroupLabelId')
</script>

<template>
  <input
    :id="id"
    v-bind="$attrs"
    v-model="modelValue"
    type="checkbox"
  />
</template>
