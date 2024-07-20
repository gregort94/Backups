import type { User } from '@/types'

export default (email: string) =>
  new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ email: email })
    }, 2000)
  })
