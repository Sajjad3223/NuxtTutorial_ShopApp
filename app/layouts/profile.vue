<template>
  <NuxtLayout name="default">
    <div class="w-full flex flex-col gap-10">

    <!-- Bread Crumb -->
    <div class="breadcrumbs text-sm">
      <ul>
        <li><NuxtLink to="/">خانه</NuxtLink></li>
        <li><NuxtLink to="/profile">حساب کاربری</NuxtLink></li>
        <li class="opacity-60">{{ route.meta.title }}</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="w-full flex gap-10">

      <!-- Sidebar -->
      <ProfileSidebar />

      <!-- Content -->
      <div class="flex-1">

        <slot></slot>

      </div>

    </div>

  </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>

const route = useRoute();

</script>

<style>

</style>