<template>
  <div class="w-full flex flex-col gap-10">

    <SeoData title="سبد خرید" description="سبد خرید" />

    <!-- Bread Crumb -->
    <div class="breadcrumbs text-sm">
      <ul>
        <li><NuxtLink to="/">خانه</NuxtLink></li>
        <li><NuxtLink to="/products">محصولات</NuxtLink></li>
        <li>سبد خرید</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div v-if="cartStore.pendingCart" class="w-full flex gap-10">
      <div class="flex-1 border p-5 border-white/10 rounded-2xl flex flex-col gap-5">
        <strong class="text-xl">سبد خرید</strong>
        <ul class="list">
          <CartItem v-for="item in cartStore.pendingCart?.items" :key="item.id" :item="item" />
        </ul>
      </div>
      <div class="w-1/4 flex flex-col p-4 rounded-2xl bg-base-300 gap-6 h-max">
        <div class="flex items-center gap-1">
          <span>{{ cartStore.pendingCart.items.length }}</span>
          <span>محصول</span>
        </div>
        <div class="w-full flex items-center justify-between">
          <span class="opacity-70">
            قیمت کل
          </span>
          <div class="flex items-center gap-1">
            <strong class="text-lg">{{ cartStore.pendingCart.totalPrice.toLocaleString() }}</strong>
            <span class="text-sm opacity-70">تومان</span>
          </div>
        </div>
        <div class="w-full flex items-center justify-between">
          <span class="opacity-70">
            تخفیف
          </span>
          <div class="flex items-center gap-1">
            <strong class="text-lg">0</strong>
            <span class="text-sm opacity-70">تومان</span>
          </div>
        </div>
        <div class="w-full flex items-center justify-between">
          <span class="opacity-70">
            مبلغ قابل پرداخت
          </span>
          <div class="flex items-center gap-1">
            <strong class="text-lg">{{ cartStore.pendingCart.finalPrice.toLocaleString() }}</strong>
            <span class="text-sm opacity-70">تومان</span>
          </div>
        </div>
        <button @click="cartStore.finalize" class="btn btn-primary">تایید و پرداخت</button>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
const cartStore = useCartStore();
</script>

<style></style>