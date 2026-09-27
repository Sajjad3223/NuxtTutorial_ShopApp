<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>

const settingsStore = useSettingsStore();
await settingsStore.initSettings();

const authStore = useAuthStore();
const userStore = useUserStore();

onMounted(()=>{
if (authStore.isLoggedIn){
  userStore.refreshUserData();
}
})

</script>