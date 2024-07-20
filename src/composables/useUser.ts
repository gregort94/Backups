import type { User } from '@/types'
import { useLocalStorage } from '@vueuse/core'

export default () => {
  const user = useLocalStorage<User | null>('user', null)
  return user
}
