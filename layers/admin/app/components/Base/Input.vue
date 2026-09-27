<template>
  <fieldset class="fieldset">
    <label class="label" :for="id">{{label}}</label>
    <input type="text" :id="id" class="w-full input" :placeholder="placeholder" v-model="modelValue"/>
  </fieldset>
</template>

<script lang="ts" setup>
const props =defineProps<{
  label:string,
  id:string,
  placeholder?:string,
}>()

const modelValue= defineModel()

</script>

<style>

</style>