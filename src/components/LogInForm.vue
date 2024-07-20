<script lang="ts" setup>
import { ref } from 'vue'
import VInput from './VInput.vue'
import VFormGroup from './VFormGroup.vue'
import useUser from '@/composables/useUser'
import type { User } from '@/types'
import VButton from './VButton.vue'
import { useRouter } from 'vue-router'
import login from '@/api/auth/login'

const router = useRouter()
const user = useUser()

const email = ref<string>()
const isPending = ref(false)

const submit = async () => {
  if (!email.value) return
  try {
    isPending.value = true
    const response = await login(email.value)
    user.value = response
    router.push('/')
    console.log('logged in')
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
    <VFormGroup label="Email">
      <VInput v-model="email" />
    </VFormGroup>
    <VButton
      :loading="isPending"
      type="submit"
    >
      Submit
    </VButton>
  </form>
</template>
