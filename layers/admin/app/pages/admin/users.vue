<template>
  <div class="flex flex-col gap-4">
    <div class="mr-auto">
      <button @click="showAddUserModal = true" class="btn btn-primary">افزودن کاربر</button>
    </div>
    <div class="overflow-x-auto rounded-box border border-white/10 bg-base-100">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>#</th>
            <th>نام و نام خانوادگی</th>
            <th>تلفن</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="(user,i) in data.data">
            <th>{{ i+1 }}</th>
            <td>{{ user.fullName }}</td>
            <td>{{ user.phone }}</td>
            <td width="10%">
              <div class="join">
                <button @click="edit(user)" class="btn btn-soft btn-square btn-warning btn-sm join-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z" fill="currentColor"/>
                    <path d="M19.0196 3.48004C17.0796 1.54004 15.1796 1.49004 13.1896 3.48004L11.9796 4.69004C11.8796 4.79004 11.8396 4.95004 11.8796 5.09004C12.6396 7.74004 14.7596 9.86003 17.4096 10.62C17.4496 10.63 17.4896 10.64 17.5296 10.64C17.6396 10.64 17.7396 10.6 17.8196 10.52L19.0196 9.31004C20.0096 8.33004 20.4896 7.38004 20.4896 6.42004C20.4996 5.43004 20.0196 4.47004 19.0196 3.48004Z" fill="currentColor"/>
                    <path d="M15.6103 11.53C15.3203 11.39 15.0403 11.25 14.7703 11.09C14.5503 10.96 14.3403 10.82 14.1303 10.67C13.9603 10.56 13.7603 10.4 13.5703 10.24C13.5503 10.23 13.4803 10.17 13.4003 10.09C13.0703 9.81005 12.7003 9.45005 12.3703 9.05005C12.3403 9.03005 12.2903 8.96005 12.2203 8.87005C12.1203 8.75005 11.9503 8.55005 11.8003 8.32005C11.6803 8.17005 11.5403 7.95005 11.4103 7.73005C11.2503 7.46005 11.1103 7.19005 10.9703 6.91005C10.9491 6.86465 10.9286 6.81949 10.9088 6.77458C10.7612 6.44127 10.3265 6.34382 10.0688 6.60158L4.34032 12.33C4.21032 12.46 4.09032 12.71 4.06032 12.88L3.52032 16.71C3.42032 17.39 3.61032 18.03 4.03032 18.46C4.39032 18.81 4.89032 19 5.43032 19C5.55032 19 5.67032 18.99 5.79032 18.97L9.63032 18.43C9.81032 18.4 10.0603 18.28 10.1803 18.15L15.9016 12.4287C16.1612 12.1692 16.0633 11.7237 15.7257 11.5797C15.6877 11.5634 15.6492 11.5469 15.6103 11.53Z" fill="currentColor"/>
                  </svg>
                </button>
                <button @click="remove(user.id)" class="btn btn-soft btn-square btn-error btn-sm join-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z" fill="currentColor"/>
                    <path d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14ZM13.6597 17.75H10.3297C9.91975 17.75 9.57975 17.41 9.57975 17C9.57975 16.59 9.91975 16.25 10.3297 16.25H13.6597C14.0697 16.25 14.4097 16.59 14.4097 17C14.4097 17.41 14.0697 17.75 13.6597 17.75ZM14.4997 13.75H9.49975C9.08975 13.75 8.74975 13.41 8.74975 13C8.74975 12.59 9.08975 12.25 9.49975 12.25H14.4997C14.9097 12.25 15.2497 12.59 15.2497 13C15.2497 13.41 14.9097 13.75 14.4997 13.75Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <BasePagination :pagesCount="data.pagesCount" v-model="page"/>

    <!-- Add User Modal -->
    <BaseModal v-model="showAddUserModal" title="افزودن کاربر جدید">
      <form @submit.prevent="addUser" class="flex flex-col gap-4">
        <BaseInput label="نام و نام خانوادگی" id="fullName" v-model="command.fullName"/>
        <BaseInput label="تلفن همراه" id="phone" v-model="command.phone"/>
        <div class="mr-auto">
          <button type="submit" class="btn btn-primary">
            ثبت کاربر
          </button>
        </div>
      </form>
    </BaseModal>

    <!-- Edit User Modal -->
    <BaseModal v-model="showEditUserModal" title="ویرایش کاربر">
      <form @submit.prevent="editUser" class="flex flex-col gap-4">
        <BaseInput label="نام و نام خانوادگی" id="fullName" v-model="editCommand.fullName"/>
        <BaseInput label="تلفن همراه" id="phone" v-model="editCommand.phone"/>
        <div class="mr-auto">
          <button type="submit" class="btn btn-primary">
            ثبت تغییرات
          </button>
        </div>
      </form>
    </BaseModal>
  </div>
  
</template>

<script lang="ts" setup>
import { CreateUser, DeleteUser,EditUser,GetAllUsersByAdmin } from '../../services/user.service';


definePageMeta({
    layout:'admin',
    title:'مدیریت کاربران'
})

const page = ref(1);
const {data,refresh} = await useAsyncData('getUsersByAdmin',()=>GetAllUsersByAdmin(page.value));

const showAddUserModal = ref(false);
const showEditUserModal = ref(false);
const command = reactive({
  fullName:'',
  phone:''
})
const editCommand = reactive({
  id:'',
  fullName:'',
  phone:''
})

const remove = async (userId:string)=>{
  if(confirm('آیا از حذف این کاربر مطمئن هستید؟')){
    const result = await DeleteUser(userId);
    if(result.isSuccess){
      await refresh();
    }
  }
}

const addUser = async ()=>{
  const result = await CreateUser(command);
  if(result.isSuccess){
    await refresh();
    showAddUserModal.value = false;
  }
}
const edit = (user)=>{
  editCommand.id = user.id;
  editCommand.fullName = user.fullName;
  editCommand.phone = user.phone;
  showEditUserModal.value = true;
}
const editUser = async ()=>{
  const result = await EditUser(editCommand.id,editCommand);
  if(result.isSuccess){
    await refresh();
    showEditUserModal.value = false;
  }
}

watch(
  page,
  async ()=> await refresh()
)

</script>

<style>

</style>