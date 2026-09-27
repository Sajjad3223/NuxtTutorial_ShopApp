<template>
  <div v-if="modelValue" class="modalC" @click.self="modelValue = false">
    <div class="w-1/4 bg-base-200 rounded-200 p-5 border border-white/10 rounded-xl flex flex-col gap-4">
      <div class="w-full flex items-center justify-between">
        <strong>{{ title }}</strong>
        <button @click="modelValue = false" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </div>
      <div class="w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?:string
}>()

const modelValue = defineModel({default:false})

</script>

<style>

</style>