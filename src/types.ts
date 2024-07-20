export type User = { email: string }

export type Project = {
  id: string
  name: string
}

export type Backup = {
  id: string
  project: Project
  createdAt: number
  size: number
  isActive: boolean
}

export type BackupForCreate = {
  projectId: string
}
