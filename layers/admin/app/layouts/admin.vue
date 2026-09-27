<template>
  <div class="container mx-auto flex flex-col gap-6">

    <Head>
      <Title>پنل ادمین</Title>
    </Head>

    <TheHeader />

    <div class="w-full flex flex-col gap-10">

    <!-- Bread Crumb -->
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a>خانه</a></li>
        <li>حساب کاربری</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="w-full flex gap-10">

      <!-- Sidebar -->
      <AdminSidebar />

      <!-- Content -->
      <main class="flex-1 p-4 flex flex-col gap-4 rounded-2xl border border-white/10 h-max">

        <strong class="text-xl opacity-60">{{ route.meta.title ?? 'داشبورد' }}</strong>
        <hr class="w-full opacity-10">
        <slot></slot>

      </main>

    </div>

  </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style>

</style>