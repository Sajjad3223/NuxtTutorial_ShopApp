<template>
  <div>
    <form @submit.prevent="changeInfo" class="w-full flex flex-col gap-4">
        <fieldset class="w-full fieldset">
            <label class="label" for="name">نام و نام خانوادگی</label>
            <input type="text" id="name" name="name" class="w-full input" v-model="name" placeholder="نام و نام خانوادگی خود را وارد کنید ..." />
        </fieldset>
        <button type="submit" class="btn btn-primary">ثبت تغییرات</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { EditUser } from '~/services/user.service';

definePageMeta({
  layout:'profile',
  title:'ویرایش اطلاعات'
})

const userStore = useUserStore();

const name = ref(userStore.userData?.fullName)

const changeInfo = async ()=>{

  const result = await EditUser(name.value);
  if(result)
    await userStore.refreshUserData()
}

</script>

<style>

</style>