<template>
  <div class="w-full flex flex-col gap-10">
    <strong class="text-2xl">محصولات ما</strong>

    <SeoData title="لیست محصولات سایت" description="لیست محصولات سایت" />

    <div class="w-full flex items-center justify-between">
      <div class="w-1/2 flex items-center gap-2">
        <input type="text" v-model="search" placeholder="دنبال چه چیزی هستید ..." class="input w-full" />
        <button @click="searchProducts" class="btn">جستجو</button>
      </div>
      <select class="select">
        <option disabled selected>مرتب سازی بر اساس...</option>
        <option>پرفروش ترین</option>
        <option>پربازدید ترین</option>
        <option>ارزان ترین</option>
      </select>
    </div>
    <div class="w-full grid grid-cols-4 gap-4">
      <ProductCard v-for="product in data?.products" :product="product" />
    </div>
    <div class="join mx-auto">
      <button v-for="i in data?.pagesCount" 
      :disabled="i == data?.currentPage"
      @click="page = i"
      :class="['join-item btn',{'btn-secondary btn-active':i == data?.currentPage}]">{{i}}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GetAllProducts } from '~/services/product.service';

const route =useRoute()
const router = useRouter();

const search = ref(route.query.search ?? '')
const page = ref(route.query.page ?? 1)
const {data,refresh} = await useAsyncData('GetAllProducts',()=>GetAllProducts(page.value,8,search.value));

const searchProducts = async ()=>{
    let query = '/products?';
    if(page.value > 1)
      query += `page=${page.value}&`;
    if(search.value)
      query += `search=${search.value}`
    router.push(query)
    await refresh()
}

watch(
  page,
  async ()=> {
    let query = '/products?';
    if(page.value > 1)
      query += `page=${page.value}&`;
    if(search.value)
      query += `search=${search.value}`
    router.push(query)
    await refresh()
  }
)

</script>

<style></style>