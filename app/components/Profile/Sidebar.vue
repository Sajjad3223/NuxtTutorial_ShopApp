<template>
  <aside class="w-72 bg-base-300 rounded-2xl p-5 h-max">
        <div class="flex flex-col items-center gap-4 pb-6 border-b border-white/10">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src="https://i.pravatar.cc/150?img=12" alt="User">
            </div>
          </div>

          <div class="text-center">
            <strong class="text-lg">{{  userStore.userData?.fullName  }}</strong>
            <p class="text-sm opacity-70 mt-1">
              {{ userStore.userData?.phone }}
            </p>
          </div>
        </div>

        <ul class="menu mt-6 gap-2 w-full">
          <li>
            <a class="active">
              داشبورد
            </a>
          </li>
          <li>
            <a>سفارشات من</a>
          </li>
          <li>
            <a>علاقه‌مندی‌ها</a>
          </li>
          <li>
            <a>آدرس‌ها</a>
          </li>
          <li>
            <NuxtLink to="/profile/edit">ویرایش اطلاعات</NuxtLink>
          </li>
          <li>
            <a>تغییر رمز عبور</a>
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