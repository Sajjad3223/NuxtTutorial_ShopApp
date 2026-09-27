<template>
  <div class="flex flex-col gap-4">

    <form @submit.prevent="saveSettings" class="flex flex-col gap-6">

      <!-- General Settings -->
      <div class="border border-white/10 rounded-2xl p-5 flex flex-col gap-5">

        <div class="flex flex-col gap-1">
          <strong class="text-xl">
            تنظیمات عمومی
          </strong>

          <span class="text-sm opacity-60">
            اطلاعات اصلی سایت را در این بخش وارد کنید.
          </span>
        </div>

        <div class="grid grid-cols-2 gap-4">

          <BaseInput
            label="عنوان سایت"
            id="title"
            v-model="command.title"
          />

          <BaseInput
            label="زیر عنوان سایت"
            id="subTitle"
            v-model="command.subTitle"
          />

          <BaseInput
            label="آدرس لوگو"
            id="logo"
            class="col-span-full"
            v-model="command.logo"
          />

        </div>

      </div>


      <!-- Banners -->
      <div class="border border-white/10 rounded-2xl p-5 flex flex-col gap-5">

        <div class="flex items-center justify-between">

          <div class="flex flex-col gap-1">
            <strong class="text-xl">
              بنرهای سایت
            </strong>

            <span class="text-sm opacity-60">
              بنرهای نمایش داده شده در سایت را مدیریت کنید.
            </span>
          </div>

          <button
            type="button"
            class="btn btn-sm btn-primary"
            @click="addBanner"
          >
            افزودن بنر
          </button>

        </div>


        <div
          v-if="command.banners.length"
          class="flex flex-col gap-4"
        >

          <div
            v-for="(banner, index) in command.banners"
            :key="index"
            class="border border-white/10 rounded-xl p-4 flex flex-col gap-4"
          >

            <div class="flex items-center justify-between">

              <strong>
                بنر {{ index + 1 }}
              </strong>

              <button
                type="button"
                class="btn btn-sm btn-error btn-soft"
                @click="removeBanner(index)"
              >
                حذف بنر
              </button>

            </div>

            <div class="grid grid-cols-2 gap-4">

              <BaseInput
                :label="`آدرس تصویر بنر ${index + 1}`"
                :id="`banner-image-${index}`"
                v-model="banner.image"
              />

              <BaseInput
                label="عنوان بنر"
                :id="`banner-title-${index}`"
                v-model="banner.title"
              />

              <BaseInput
                label="لینک بنر"
                :id="`banner-url-${index}`"
                class="col-span-full"
                v-model="banner.url"
              />

            </div>

          </div>

        </div>


        <div
          v-else
          class="border border-dashed border-white/10 rounded-xl p-8 flex items-center justify-center"
        >
          <span class="text-sm opacity-60">
            هنوز بنری اضافه نشده است.
          </span>
        </div>

      </div>


      <!-- Footer Links -->
      <div class="border border-white/10 rounded-2xl p-5 flex flex-col gap-5">

        <div class="flex items-center justify-between">

          <div class="flex flex-col gap-1">
            <strong class="text-xl">
              لینک‌های فوتر
            </strong>

            <span class="text-sm opacity-60">
              گروه‌ها و لینک‌های نمایش داده شده در فوتر سایت را مدیریت کنید.
            </span>
          </div>

          <button
            type="button"
            class="btn btn-sm btn-primary"
            @click="addFooterGroup"
          >
            افزودن گروه
          </button>

        </div>


        <div
          v-if="command.footerLinks.length"
          class="flex flex-col gap-4"
        >

          <div
            v-for="(group, groupIndex) in command.footerLinks"
            :key="groupIndex"
            class="border border-white/10 rounded-xl p-4 flex flex-col gap-4"
          >

            <!-- Group Header -->
            <div class="flex items-center justify-between">

              <strong>
                گروه {{ groupIndex + 1 }}
              </strong>

              <button
                type="button"
                class="btn btn-sm btn-error btn-soft"
                @click="removeFooterGroup(groupIndex)"
              >
                حذف گروه
              </button>

            </div>


            <!-- Group Title -->
            <BaseInput
              label="عنوان گروه"
              :id="`footer-group-${groupIndex}`"
              v-model="group.title"
            />


            <!-- Links -->
            <div class="flex flex-col gap-3">

              <div class="flex items-center justify-between">

                <strong class="text-sm">
                  لینک‌ها
                </strong>

                <button
                  type="button"
                  class="btn btn-xs btn-outline"
                  @click="addFooterLink(groupIndex)"
                >
                  افزودن لینک
                </button>

              </div>


              <div
                v-for="(link, linkIndex) in group.links"
                :key="linkIndex"
                class="flex items-end gap-3"
              >

                <BaseInput
                  label="عنوان لینک"
                  :id="`footer-link-label-${groupIndex}-${linkIndex}`"
                  class="flex-1"
                  v-model="link.label"
                />

                <BaseInput
                  label="آدرس لینک"
                  :id="`footer-link-url-${groupIndex}-${linkIndex}`"
                  class="flex-1"
                  v-model="link.url"
                />

                <button
                  type="button"
                  class="btn btn-error btn-soft"
                  @click="removeFooterLink(groupIndex, linkIndex)"
                >
                  حذف
                </button>

              </div>


              <div
                v-if="!group.links.length"
                class="border border-dashed border-white/10 rounded-lg p-5 text-center"
              >
                <span class="text-sm opacity-60">
                  هنوز لینکی برای این گروه اضافه نشده است.
                </span>
              </div>

            </div>

          </div>

        </div>


        <div
          v-else
          class="border border-dashed border-white/10 rounded-xl p-8 flex items-center justify-center"
        >
          <span class="text-sm opacity-60">
            هنوز گروهی برای فوتر اضافه نشده است.
          </span>
        </div>

      </div>


      <!-- Submit -->
      <div class="mr-auto">
        <button
          type="submit"
          class="btn btn-primary"
        >
          ذخیره تنظیمات
        </button>
      </div>

    </form>

  </div>
</template>


<script lang="ts" setup>
import { EditSetting, GetSettingsByAdmin } from '../../services/settings.service'


definePageMeta({
  layout: 'admin',
  title: 'تنظیمات سایت'
})


interface Banner {
  image: string
  title: string
  url: string
}

interface FooterLink {
  label: string
  url: string
}

interface FooterLinkGroup {
  title: string
  links: FooterLink[]
}


interface SiteSettings {
  logo: string
  title: string
  subTitle: string
  banners: Banner[]
  footerLinks: FooterLinkGroup[]
}

const {data,refresh} = await useAsyncData('getSettingsByAdmin',()=>GetSettingsByAdmin());
const command: SiteSettings = reactive({
  logo: data.value.logo,
  title: data.value.title,
  subTitle: data.value.subTitle,

  banners: data.value.banners ?? [],

  footerLinks: data.value.footerLinks ?? []
})


const addBanner = () => {

  command.banners.push({
    image: '',
    title: '',
    url: ''
  })

}


const removeBanner = (index: number) => {

  command.banners.splice(index, 1)

}


const addFooterGroup = () => {

  command.footerLinks.push({
    title: '',
    links: []
  })

}


const removeFooterGroup = (index: number) => {

  command.footerLinks.splice(index, 1)

}


const addFooterLink = (groupIndex: number) => {

  command.footerLinks[groupIndex].links.push({
    label: '',
    url: ''
  })

}


const removeFooterLink = (
  groupIndex: number,
  linkIndex: number
) => {

  command.footerLinks[groupIndex].links.splice(linkIndex, 1)

}


const saveSettings = async () => {

  const result = EditSetting(command);
  if(result.isSuccess){
    await refresh()
  }

}

</script>

<style>

</style>