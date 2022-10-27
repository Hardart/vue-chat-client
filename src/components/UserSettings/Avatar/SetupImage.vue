<template>
  <Teleport to="body">
    <div v-if="isShowUploadSettings" class="full-size flex flex-center flex-middle select-avatar">
      <div class="card card-primary w-50@m w-33@l">
        <div class="card-header">
          <h2>Редактировать изображение</h2>
        </div>

        <div class="card-body bg-secondary pb-0">
          <div class="editing-container flex flex-center flex-middle">
            <img :ref="elem.avatarImage" class="editing-container__image" :src="`${serverUrl}/${imgObject.path}`" alt="" />
            <div :ref="elem.avatarBorders" class="editing-container__overlay"></div>
          </div>
          <div class="slider-container">
            <div class="slider">
              <input :ref="elem.input" type="number" class="hidden slider__input" value="0" />
              <div class="slider__bar">
                <div :ref="elem.sliderFill" class="slider__bar--fill" style="width: 0%"></div>
              </div>
              <div :ref="elem.slider" class="slider__track">
                <div :ref="elem.grabber" class="slider__track--grabber" style="left: 0%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer flex flex-right flex-gap-10">
          <PnzButton @click="cancel" color="danger" text="Отменить" />
          <button @click="sendAvatarForResize" class="btn btn-success">Отправить</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
  import { isShowUploadSettings, changeStateUploadSettings, changeStateUploadInput, uploadImage } from '@/features/settings/User/adds'
  import { serverUrl } from '@/api/fetch'
  import { changeAvatar, Avatar } from '@/features/settings/User/changeAvatar'
  import { onMounted, reactive, computed, toRefs, onUnmounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const props = defineProps({
    imgObject: Object,
  })

  const elements = reactive({
    avatarImage: null,
    avatarBorders: null,
    grabber: null,
    slider: null,
    sliderFill: null,
    input: null,
  })
  const elem = toRefs(elements)

  let avatar
  const user = computed(() => store.getters['user/get'])
  onMounted(() => {
    if (!isShowUploadSettings.value) return console.log('nope')
    avatar = new Avatar(elements.avatarImage, props.imgObject, elements.avatarBorders, user.value.avatar)
    changeAvatar(avatar, elements)
  })

  onUnmounted(() => {
    uploadImage.value = null
    avatar = null
  })

  const sendAvatarForResize = async () => {
    const res = await store.dispatch('user/changeAvatar', avatar)
    if (!res) return console.warn('Возникла ошибка при изменении аватара')
    store.dispatch('changeAvatar', user.value)
    changeStateUploadSettings()
    changeStateUploadInput()
  }

  async function cancel() {
    const res = await store.dispatch('user/cancelChangeAvatar', avatar)
    changeStateUploadSettings()
    changeStateUploadInput()
  }
</script>

<style lang="scss" scoped>
  .select-avatar {
    z-index: 9999;

    .editing-container {
      position: relative;
      overflow: hidden;
      background-color: #000;
      border-radius: 4px;
      min-height: 300px;
      height: 400px;
      max-height: 500px;

      &__image {
        opacity: 1;
        transform: translate3d(0px, 0px, 0px);
        cursor: grab;
        pointer-events: all;
        position: absolute;
      }

      &__overlay {
        border-radius: 50%;
        z-index: 1;
        border: 5px solid #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        pointer-events: none;
        position: absolute;
        -webkit-box-shadow: rgb(47 49 54 / 60%) 0 0 0 9999px;
        box-shadow: 0 0 0 9999px rgb(47 49 54 / 60%);
        opacity: 1;
      }
    }

    .slider-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin: 20px auto;

      .slider {
        width: 100%;
        height: 40px;
        position: relative;

        &__bar {
          position: relative;
          top: 16px;
          height: 8px;
          border-radius: 4px;
          display: block;
          overflow: hidden;
          background-color: #4f545c;

          &--fill {
            background: #5c8bd3;
            height: 100%;
          }
        }

        &__track {
          @include set-absolute(0, 5px, 0, 5px);
          outline: 0;

          &--grabber {
            position: absolute;
            top: 50%;
            width: 10px;
            height: 24px;
            margin-left: -5px;
            margin-top: -13px;
            border-radius: 3px;
            background-color: #fff;
            border: 1px solid #dcddde;
            box-shadow: 0 3px 1px 0 rgb(0 0 0 / 5%), 0 2px 2px 0 rgb(0 0 0 / 10%), 0 3px 3px 0 rgb(0 0 0 / 5%);
            cursor: ew-resize;
            z-index: 1000;
          }
        }
      }
    }
  }
</style>
