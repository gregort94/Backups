import projects from '@/api/projectsData'
import type { Backup, BackupForCreate } from '@/types'
import wait from '@/utils/wait'
import { v4 as uuid } from 'uuid'

const getRandomSize = () => {
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
}

export const create = (fields: BackupForCreate) =>
  new Promise<Backup>((resolve) => {
    setTimeout(() => {
      resolve({
        id: uuid(),
        createdAt: +new Date(),
        isActive: true,
        project: projects.find((project) => project.id === fields.projectId)!,
        size: getRandomSize(),
      })
    }, 2000)
  })

export const inactivate = (backupId: string) => wait(2000)

export const activate = (backupId: string) => wait(0)
