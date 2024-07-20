<script lang="ts" setup>
import { ref } from 'vue'
import VSelect from '../VSelect.vue'
import type { Project } from '@/types'
import { computed } from 'vue'
import projectsData from '@/api/projectsData'

const modelValue = defineModel<string>()

const projects = ref<Project[]>(projectsData)

const options = computed(() =>
  projects.value.map((project) => ({ label: project.name, value: project.id })),
)
</script>

<template>
  <VSelect
    v-model="modelValue"
    :options="options"
  />
</template>
