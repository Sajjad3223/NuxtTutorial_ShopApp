<template>
  <div class="w-full flex flex-col gap-10">

    <SeoData :title="product?.title" :description="product?.description" />

    <!-- Bread Crumb -->
    <div class="breadcrumbs text-sm">
      <ul>
        <li><NuxtLink to="/">خانه</NuxtLink></li>
        <li><NuxtLink to="/products">محصولات</NuxtLink></li>
        <li>{{product?.title}}</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="w-full flex gap-6">
      <!-- Images -->
      <div class="w-1/3">
        <figure class="rounded-xl aspect-square overflow-clip">
          <img :src="product?.image" class="w-full h-full object-cover"/>
        </figure>
      </div>

      <div class="flex-1 flex flex-col gap-4 p-4">
        <div class="w-full flex flex-col gap-4">
          <strong class="text-3xl">{{product?.title}}</strong>
          <hr class="w-full opacity-10">
          <p class="opacity-70">
            {{ product?.shortDescription }}
          </p>
        </div>
        <div class="w-full mt-auto p-4 bg-base-300 rounded-xl flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-sm opacity-70">قیمت محصول:</span>
            <div class="flex items-center gap-1">
              <strong class="text-xl">{{product?.price.toLocaleString()}}</strong>
              <span class="opacity-70">تومان</span>
            </div>
          </div>
          <button @click="addToCart" class="btn btn-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M9 8H21" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="w-full flex flex-col gap-4">
      <strong class="text-xl">توضیحات</strong>
      <p class="text-justify">
{{ product?.description }}
      </p>
    </div>
    
    <!-- Comments -->
     <div class="w-full flex flex-col gap-4">
      <strong class="text-xl">نظرات کاربران</strong>
      <form v-if="authStore.isLoggedIn" @submit.prevent="sendComment" class="w-1/2 flex flex-col gap-4">
        <fieldset class="w-full fieldset">
            <label class="label" for="name">متن نظر</label>
            <textarea type="text" id="name" name="name" class="w-full textarea" v-model="comment" placeholder="نظر خود را بنویسید ..." />
        </fieldset>
        <button type="submit" class="btn btn-primary">ارسال نظر</button>
      </form>
      <div class="w-full grid grid-cols-2 gap-5">
        <div v-for="comment in product?.comments" class="w-full p-5 rounded-xl bg-base-200 border border-white/10 flex flex-col gap-3">
          <div class="w-full flex items-center justify-between">
            <span>{{comment.fullName}}</span>
            <small class="opacity-60">{{ new Date(comment.created_at).toLocaleDateString('fa-IR') }}</small>
          </div>
          <p class="text-sm opacity-80 text-justify">
            {{ comment.comment }}
          </p>
        </div>
      </div>
     </div>
     
    <!-- Related Products -->
     <div class="w-full flex flex-col gap-4">
      <strong class="text-xl">محصولات مرتبط</strong>
      <div v-if="true" class="w-full flex justify-between gap-4">
        <ProductCard v-for="i in relatedProducts" :product="i" />
      </div>
     </div>

  </div>
</template>

<script lang="ts" setup>
import { GetAllProducts, GetProductById, SendComment } from '~/services/product.service';

const route = useRoute();
const id = Number(route.params!.id!);

const authStore = useAuthStore()

const {data} = await useAsyncData(`GetProductById-${id}`,()=>GetProductById(id))
const product = ref(data);

const relatedProducts = ref([])
onMounted(async()=>{
  relatedProducts.value = (await GetAllProducts(1,5)).products;
})

const cartStore  = useCartStore()
const addToCart = async ()=>{
  await cartStore.addToCart(id)
}

const comment = ref('');
const sendComment = async ()=>{
  const result = await SendComment(id,comment.value);
  if(result){
    product.value?.comments.push(result);
    comment.value = '';
  }
}

</script>

<style></style>