<template>
  <div class="flex flex-col gap-4">
    
    <form @submit.prevent="editProduct" class="flex flex-col gap-4">
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
import type { EditProductCommand } from '#layers/admin/app/models/product';
import { CreateProduct, EditProduct, GetProductByAdmin } from '#layers/admin/app/services/product.service';

definePageMeta({
    layout:'admin',
    title:'ویرایش محصول'
})
const route = useRoute();
const id = route.params.id?.toString();

const {data} = await useAsyncData(`getProduct-${id}`,()=>GetProductByAdmin(id))

const router = useRouter();
const command:EditProductCommand = reactive({
  title:data.value?.title,
  shortDescription:data.value?.shortDescription,
  description:data.value?.description,
  price:data.value?.price,
  discount:data.value?.discount,
  image:data.value?.image
})

const editProduct = async ()=>{
  const result= await EditProduct(id,command);
  if(result.isSuccess){
    router.push('/admin/products')
  }
}

</script>

<style>

</style>