<template>
  <div class="w-full flex flex-col gap-6">
    <!-- User Info -->
        <div class="border border-white/10 rounded-2xl p-6 flex justify-between items-center">
          <div class="flex flex-col gap-2">
            <strong class="text-2xl">
              سلام {{ userStore.userData?.fullName }} 👋
            </strong>
            <span class="opacity-70">
              خوش اومدی، آخرین ورود شما امروز ساعت 09:45 بوده است.
            </span>
          </div>

          <button class="btn btn-primary">
            ویرایش پروفایل
          </button>
        </div>

        <!-- Statistics -->
        <div class="grid grid-cols-3 gap-5">

          <div class="bg-base-300 rounded-2xl p-5 flex flex-col gap-2">
            <span class="opacity-70 text-sm">
              تعداد سفارشات
            </span>

            <strong class="text-3xl">
              {{ orders.length }}
            </strong>
          </div>

          <div class="bg-base-300 rounded-2xl p-5 flex flex-col gap-2">
            <span class="opacity-70 text-sm">
              سفارشات در انتظار
            </span>

            <strong class="text-3xl">
              1
            </strong>
          </div>

          <div class="bg-base-300 rounded-2xl p-5 flex flex-col gap-2">
            <span class="opacity-70 text-sm">
              مجموع خرید
            </span>

            <strong class="text-3xl">
              {{ getAllPrice.toLocaleString() }}
            </strong>

            <span class="text-sm opacity-60">
              تومان
            </span>
          </div>

        </div>

        <!-- Last Orders -->
        <div class="border border-white/10 rounded-2xl p-5 flex flex-col gap-5">

          <strong class="text-xl">
            آخرین سفارشات
          </strong>

          <div class="overflow-x-auto">

            <table class="table">

              <thead>
                <tr>
                  <th>شماره سفارش</th>
                  <th>تاریخ</th>
                  <th>وضعیت</th>
                  <th>مبلغ</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                <tr v-for="order in orders" :key="order.id">
                  <td>{{ order.id }}</td>

                  <td>
                    {{new Date(order.created_at).toLocaleDateString('fa-IR')}}
                  </td>

                  <td>
                    <div v-if="order.status == 1" class="badge badge-success badge-soft">
                      تکمیل شده
                    </div>
                    <div v-if="order.status == 0" class="badge badge-info badge-soft">
                      جاری
                    </div>
                  </td>

                  <td>
                    {{order.finalPrice.toLocaleString()}} تومان
                  </td>

                  <td>
                    <button class="btn btn-sm btn-outline">
                      مشاهده
                    </button>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
  </div>
</template>

<script setup lang="ts">
import { GetAllCarts } from '~/services/cart.service';
import type { Cart } from '~~/models/cart';
definePageMeta({
  layout:'profile',
  title:'داشبورد'
})
const userStore = useUserStore()
const orders:Ref<Cart[]> = ref([]);
onMounted( async ()=>{
const result = await GetAllCarts();
orders.value = result.sort((a,b)=>new Date(b.created_at) - new Date(a.created_at))
})

const getAllPrice = computed(()=>{
  let sum = 0;
  for(let order of orders.value){
    sum += order.finalPrice;
  }
  return sum;
})

</script>