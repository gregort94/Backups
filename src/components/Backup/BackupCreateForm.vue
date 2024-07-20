<script lang="ts" setup>
import { ref } from 'vue'
import ProjectSelect from '../Project/ProjectSelect.vue'
import VFormGroup from '../VFormGroup.vue'
import VButton from '@/components/VButton.vue'
import { useBackupsStore } from '@/stores/backups'

const emit = defineEmits<{
  submitted: []
}>()

const backupStore = useBackupsStore()

const projectId = ref<string>()

const isPending = ref(false)
const submit = async () => {
  if (!projectId.value) return
  try {
    isPending.value = true
    await backupStore.createBackup({ projectId: projectId.value })
    projectId.value = undefined
    emit('submitted')
  } finally {
    isPending.value = false
  }
}
</script>

<template>
  <form
    class="flex flex-col gap-4"
    @submit.prevent="submit"
  >
    <VFormGroup label="Project">
      <ProjectSelect v-model="projectId" />
    </VFormGroup>
    <VButton
      :loading="isPending"
      type="submit"
    >
      Create
    </VButton>
  </form>
</template>
