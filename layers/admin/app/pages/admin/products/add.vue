<template>
  <div class="flex flex-col gap-4">
    
    <form @submit.prevent="addProduct" class="flex flex-col gap-4">
      <div class="grid grid-cols-2 gap-4">
        <BaseInput label="عنوان محصول" id="title" v-model="command.title"/>
        <BaseInput label="قیمت محصول" id="price" v-model="command.price"/>
        <BaseInput label="تخفیف محصول" id="discount" v-model="command.discount"/>
        <BaseInput label="آدرس تصویر" id="image" v-model="command.image"/>
      </div>
      <BaseInput label="توضیحات کوتاه" id="shortDesc" v-model="command.shortDescription"/>
      <BaseInput label="توضیحات محصول" id="desc" class="col-span-full" v-model="command.description"/>
      <div class="mr-auto">
        <button type="submit" class="btn btn-primary">
          ثبت محصول
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { CreateProductCommand } from '#layers/admin/app/models/product';
import { CreateProduct } from '#layers/admin/app/services/product.service';

definePageMeta({
    layout:'admin',
    title:'افزودن محصول'
})

const router = useRouter();
const command:CreateProductCommand = reactive({
  title:'',
  shortDescription:'',
  description:'',
  price:0,
  discount:0,
  image:''
})

const addProduct = async ()=>{
  const result= await CreateProduct(command);
  if(result.isSuccess){
    router.push('/admin/products')
  }
}

</script>

<style>

</style>