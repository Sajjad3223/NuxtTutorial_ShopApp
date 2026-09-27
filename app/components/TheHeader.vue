<template>
    <header class="navbar bg-base-100 shadow-sm">
        <div class="container mx-auto flex items-center">
            <div class="flex-1">
                <NuxtLink to="/" class="btn btn-ghost text-xl uppercase">{{ settingsStore.settings.title }}</NuxtLink>
            </div>
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span v-if="cartStore.pendingCart" class="badge badge-sm indicator-item">{{cartStore.pendingCart?.items?.length}}</span>
                        </div>
                    </div>
                    <div tabindex="0" class="card card-compact dropdown-content bg-base-200 z-1 mt-3 w-52 shadow">
                        <div v-if="cartStore.pendingCart" class="card-body">
                            <span class="text-lg font-bold">{{cartStore.pendingCart?.items?.length}} محصول</span>
                            <span class="text-info">قیمت کل: {{cartStore.pendingCart?.totalPrice?.toLocaleString()}} تومان</span>
                            <div class="card-actions">
                                <NuxtLink to="/cart" class="btn btn-primary btn-block">مشاهده سبد خرید</NuxtLink>
                            </div>
                        </div>
                        <div v-else class="text-center p-4 text-sm">هیچ محصولی در سبد خرید وجود ندارد</div>
                    </div>
                </div>
                <div v-if="authStore.isLoggedIn" class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul tabindex="-1"
                        class="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NuxtLink to="/profile" class="justify-between">
                                پروفایل
                            </NuxtLink>
                        </li>
                        <li><a>سفارشات</a></li>
                        <li><button @click="authStore.deleteToken">خروج</button></li>
                    </ul>
                </div>
                <button v-else class="btn" onclick="my_modal_1.showModal()">ورود / ثبت نام</button>
            </div>
        </div>
    </header>

    <AuthLogin />
    
</template>

<script lang="ts" setup>

const settingsStore = useSettingsStore()
const authStore = useAuthStore();
const cartStore = useCartStore()

onMounted( async ()=>{
    await cartStore.refreshCart();
})
</script>

<style></style>