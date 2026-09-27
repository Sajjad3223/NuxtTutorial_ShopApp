<template>
  <div class="flex flex-col items-center gap-5">
    <div class="carousel w-2/3 rounded-xl">
      <NuxtLink v-for="(banner,i) in settingsStore.settings.banners" :to="banner.url" :id="`item${i+1}`" class="carousel-item w-full">
        <img :src="banner.image" class="w-full" />
      </NuxtLink>
    </div>
    <div class="flex w-full justify-center gap-2">
      <a v-for="i in settingsStore.settings.banners.length" :href="`#item${i}`" class="w-2.5 aspect-square rounded-full bg-base-content"></a>
    </div>
  </div> 
</template>

<script lang="ts" setup>


const settingsStore = useSettingsStore()

</script>

<style></style>