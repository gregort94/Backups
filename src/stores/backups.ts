import * as backupsApi from '@/api/backups'
import type { Backup, BackupForCreate } from '@/types'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useBackupsStore = defineStore('backups', () => {
  const backups = useLocalStorage<Map<string, Backup>>(
    'backups',
    () => new Map(),
  )

  const active = computed(() =>
    Array.from(backups.value.values()).filter((item) => item.isActive),
  )
  const deleted = computed(() =>
    Array.from(backups.value.values()).filter((item) => !item.isActive),
  )

  const createBackup = async (data: BackupForCreate) => {
    const newBackup = await backupsApi.create(data)
    backups.value.set(newBackup.id, newBackup)
  }

  const deleteBackup = async (backupId: string) => {
    await backupsApi.inactivate(backupId)
    backups.value.set(backupId, {
      ...backups.value.get(backupId)!,
      isActive: false,
    })
  }

  const restoreBackup = async (backupId: string) => {
    await backupsApi.activate(backupId)
    backups.value.set(backupId, {
      ...backups.value.get(backupId)!,
      isActive: true,
    })
  }

  return { backups, active, deleted, createBackup, deleteBackup, restoreBackup }
})
