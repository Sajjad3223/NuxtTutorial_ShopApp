<template>
  <aside class="w-72 bg-base-300 rounded-2xl p-5 h-max gap-4 flex flex-col">

        <div class="w-full flex flex-col gap-4">
          <strong class="text-xl opacity-60">پنل ادمین</strong>
        <hr class="opacity-10">
        </div>
        <ul class="menu gap-3 w-full">
          <li>
            <NuxtLink to="/admin" exact-active-class="menu-active">
              داشبورد
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/products" exact-active-class="menu-active">مدیریت محصولات</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/comments" exact-active-class="menu-active">مدیریت نظرات</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/orders" exact-active-class="menu-active">مدیریت سفارشات</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/users" exact-active-class="menu-active">مدیریت کاربران</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/settings" exact-active-class="menu-active">تنظیمات سایت</NuxtLink>
          </li>

          <div class="divider my-2"></div>

          <li>
            <a class="text-error">
              خروج از حساب
            </a>
          </li>
        </ul>
      </aside>
</template>

<script lang="ts" setup>

const userStore = useUserStore();

</script>

<style>

</style>