<template>
  <Teleport to="body">
    <div v-if="isShowUploadInput" id="upload-image" class="full-size flex flex-center flex-middle bg-overlay">
      <PnzButton @click="changeStateUploadInput" icon="close" />

      <SetupImage v-if="data?.filename" :imgObject="data" />

      <div class="card card-primary bdr-10 w-m">
        <div class="card-body text-center" role="button" tabindex="0">
          <div class="flex flex-center flex-middle bg-light bdr-50 w-xs h-xs" v-html="icons['add-image']" />
          <div class="py-10">Загрузить изображение</div>
          <input
            ref="uploadImage"
            @change="loadImage"
            type="file"
            tabindex="-1"
            accept=".jpg,.jpeg,.png"
            name="avatar"
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; opacity: 0; cursor: pointer; font-size: 0px"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
  import { ref } from 'vue'
  import { isShowUploadInput, changeStateUploadInput, changeStateUploadSettings, uploadImage } from '@/features/settings/User/adds'
  import { uploadAvatar } from '@/api/fetch'
  import SetupImage from './SetupImage.vue'
  import icons from '@/utils/icons'

  let body = ref(null)

  const loadImage = () => {
    body.value = new FormData()
    body.value.append('avatar', uploadImage.value.files[0])
    changeStateUploadSettings()
  }

  const { data, error, retry } = uploadAvatar(body)
</script>

<style lang="scss">
  #upload-image {
    z-index: 9998;
  }
</style>
