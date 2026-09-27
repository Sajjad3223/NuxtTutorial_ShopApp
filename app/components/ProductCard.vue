<template>
  <div class="card bg-base-200 w-full shadow-sm">
    <figure>
      <img :src="product.image" :alt="product.title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{product.title}}</h2>
      <p class="line-clamp-2">{{product.shortDescription}}</p>
      <div class="card-actions justify-end">
        <NuxtLink :to="`/products/${product.id}`" class="btn btn-primary">مشاهده و خرید</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductCardDto } from '~/models/product';

const props = defineProps<{
  product:ProductCardDto
}>()
</script>

<style></style>