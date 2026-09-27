<template>
    <li  class="list-row">
            <div>
              <img :src="item.productImage" :alt="item.productTitle"
                class="size-14 rounded-lg object-cover">
            </div>
            <div class="flex flex-col">
              <strong>{{ item.productTitle }}</strong>
              <span class="text-sm opacity-70">{{ item.price.toLocaleString() }} تومان</span>
            </div>
            <div class="mr-auto flex items-center gap-4">
              <div class="flex items-center gap-2">
                <!-- Plus -->
                <button @click="changeQuantity(+1)" class="btn btn-square btn-ghost">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>

                <input type="number" name="count" id="count" class="input max-w-10" v-model="quantity" disabled>

                <!-- Minus -->
                <button @click="changeQuantity(-1)" class="btn btn-square btn-ghost">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div class="w-px h-8 bg-white opacity-10"></div>
              <div class="flex items-center gap-1">
                <strong class="text-lg">{{ (item.quantity * item.price).toLocaleString() }}</strong>
                <span class="text-sm opacity-70">تومان</span>
              </div>
              <button @click="deleteItem" class="btn btn-error btn-soft btn-square">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.33 16.5H13.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </button>
            </div>
    </li>
</template>

<script lang="ts" setup>
import type { CartItem } from '~~/models/cart';

const props = defineProps<{
  item:CartItem
}>()

const cartStore = useCartStore();

const quantity = ref(props.item.quantity);

const changeQuantity = async (count:number)=>{
  if(count === -1 && quantity.value == 1) return;
  
  quantity.value += count;
  await cartStore.changeCount(props.item.id,quantity.value);
}

const deleteItem = async()=>{
  if(confirm('آیا از حذف این محصول مطمئن هستید؟')){
    await cartStore.deleteItem(props.item.id);
  }
}

</script>

<style>

</style>