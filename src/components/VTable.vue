<script lang="ts" setup>
type Column = {
  key: string
  label: string
}
type Row = {
  id: string
  [key: string]: string | number | boolean
}
const props = defineProps<{ columns: Column[]; rows: Row[] }>()
</script>

<template>
  <div>
    <div
      v-if="$slots['header-controls']"
      class="flex border-b border-gray-200 px-3 py-3.5 dark:border-gray-700"
    >
      <slot name="header-controls" />
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="dark:text-whitez text-nowrap px-4 py-3.5 text-left text-sm font-semibold text-gray-900 rtl:text-right"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
        <tr
          v-for="row in rows"
          :key="row.id"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <slot
              v-if="$slots[`${column.key}-data`]"
              :name="`${column.key}-data`"
              v-bind="{ row }"
            />
            <span v-else>{{ row[column.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
