<template>
  <div class="w-full flex items-center justify-center">
      <div class="join">
        <button v-for="i in pagesCount" @click="modelValue = i" :class="['join-item btn',{'btn-secondary':modelValue == i}]">{{ i }}</button>
      </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  pagesCount:number
}>()

const modelValue = defineModel({default:1})

</script>

<style>

</style>