<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useBackupsStore } from '@/stores/backups'
import VTable from '../VTable.vue'
import VButton from '../VButton.vue'
import VModal from '../VModal.vue'
import BackupCreateForm from '../Backup/BackupCreateForm.vue'
import VFormGroup from '../VFormGroup.vue'
import VCheckbox from '../VCheckbox.vue'

const backupsStore = useBackupsStore()

const isShowCreateBackupModal = ref(false)

const isShowDeleted = ref(false)

const displayedBackups = computed(() =>
  isShowDeleted.value ? backupsStore.deleted : backupsStore.active,
)

const isShowDeleteConfirmModal = ref(false)
const deletingBackupId = ref<string>()
const isDeletingBackupPending = ref(false)
const deleteBackup = async () => {
  try {
    isDeletingBackupPending.value = true
    await backupsStore.deleteBackup(deletingBackupId.value!)
  } finally {
    isDeletingBackupPending.value = false
  }
}
const onConfirmDelete = async () => {
  await deleteBackup()
  isShowDeleteConfirmModal.value = false
  deletingBackupId.value = undefined
}

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'project', label: 'Project' },
  { key: 'size', label: 'Size (KB)' },
  { key: 'createdAt', label: 'CreatedAt' },
  { key: 'actions', label: 'Actions' },
]

const rows = computed(() =>
  [...displayedBackups.value]
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((backup) => ({
      id: backup.id,
      project: backup.project.name,
      size: backup.size,
      createdAt: new Date(backup.createdAt).toLocaleString(),
      actions: true,
    })),
)
</script>

<template>
  <div>
    <div>
      <VTable
        :columns="columns"
        :rows="rows"
      >
        <template #actions-data="{ row }">
          <VButton
            v-if="isShowDeleted"
            @click="() => backupsStore.restoreBackup(row.id)"
          >
            Restore
          </VButton>
          <VButton
            v-else
            @click="
              () => {
                deletingBackupId = row.id
                isShowDeleteConfirmModal = true
              }
            "
          >
            Delete
          </VButton>
        </template>
        <template #header-controls>
          <div class="flex w-full justify-between">
            <VButton
              @click="isShowCreateBackupModal = !isShowCreateBackupModal"
            >
              Create
            </VButton>
            <VFormGroup
              orientation="horizontal"
              label="Show deleted"
            >
              <VCheckbox v-model="isShowDeleted" />
            </VFormGroup>
          </div>
        </template>
      </VTable>
    </div>
    <VModal v-model="isShowCreateBackupModal">
      <BackupCreateForm @submitted="isShowCreateBackupModal = false" />
    </VModal>
    <VModal v-model="isShowDeleteConfirmModal">
      <div>Delete backup #{{ deletingBackupId }}?</div>
      <div class="mt-4">
        <VButton
          :loading="isDeletingBackupPending"
          class="w-full"
          @click="onConfirmDelete"
        >
          Yes
        </VButton>
      </div>
    </VModal>
  </div>
</template>
