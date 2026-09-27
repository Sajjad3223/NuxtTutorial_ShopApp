<template>
  <div class="w-full bg-base-200">
    <div class="container mx-auto">
      <footer class="footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <img :src="settingsStore.settings.logo" alt="Logo" class="max-w-[150px]">
          <p>
            <b class="text-lg">{{ settingsStore.settings.title }}</b>
            <br />
            {{settingsStore.settings.subTitle}}
          </p>
        </aside>
        <nav v-for="link in settingsStore.settings.footerLinks">
          <h6 class="footer-title">{{ link.title }}</h6>
          <NuxtLink v-for="subLink in link.links" :to="subLink.url" class="link link-hover">{{ subLink.label }}</NuxtLink>
        </nav>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>

const settingsStore = useSettingsStore()
</script>

<style></style>
