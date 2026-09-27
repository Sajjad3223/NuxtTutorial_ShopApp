<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
  </Head>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title:string,
  description:string
}>()
</script>

<style>

</style>