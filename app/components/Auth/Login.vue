<template>
  <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <div class="flex flex-col gap-5">
                <div class="w-full flex items-center justify-between">
                    <h3 class="text-lg font-bold">ورود | ثبت نام</h3>
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">بستن</button>
                    </form>
                </div>
                <form @submit.prevent="login" class="w-full flex flex-col gap-4">
                    <fieldset class="w-full fieldset">
                        <label class="label" for="phone">شماره تلفن</label>
                        <input type="text" id="phone" name="phone" class="w-full input" v-model="phone" placeholder="09123456789" maxlength="11"/>
                    </fieldset>
                    <button type="submit" class="btn btn-primary">ورود | ثبت نام</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script lang="ts" setup>
import { Login } from '~/services/auth.service';


const phone = ref('');

const login = async ()=>{
  const result = await Login(phone.value);
  if(result){
    const cookie = useCookie('auth_token');
    cookie.value = result.token;
  }
}

</script>

<style>

</style>