<template>
  <div class="w-full flex flex-col gap-10">

    <SeoData title="فروشگاه ناکست" description="لیست محصولات سایت" />

    <HomeCarousel />

    <div class="w-full flex flex-col items-center gap-6">
      <div class="divider">
        <strong class="text-xl">محصولات سایت</strong>
      </div>
    </div>

    <div class="w-full grid grid-cols-4 gap-4">
      <ProductCard v-for="product in data?.products" :product="product" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { GetAllProducts } from '~/services/product.service';

const {data} = await useAsyncData('GetAllProducts',()=>GetAllProducts());

</script>

<style></style>