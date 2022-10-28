<template>
  <li>
    <div class="message">
      <div class="message__avatar">
        <img :src="avatar(message.userAvatar)" width="30" height="30" alt="avatar" />
      </div>
      <div>
        <div class="message__body user">
          <h5 class="user__name">
            {{ message.userName }} <span class="message__send-time">{{ calendar.checkMonth }}</span>
          </h5>
          <p class="user__message-text">{{ message.text }}</p>
        </div>
      </div>
      <!-- <div class="uk-card uk-card-primary uk-card-small uk-width-auto message-buttons uk-border-rounded">
            <div class="uk-icon-body">
               <button class="uk-icon-button-s" uk-icon="reply" uk-tooltip="Ответить"></button>
               <button class="uk-icon-button-s" uk-icon="icon: happy; ratio: 0.9" uk-tooltip="Добавить реакцию"></button>
            </div>
         </div> -->
    </div>
  </li>
</template>

<script setup>
  import { avatar } from '@/utils/helpers'
  import calendar from '@/utils/calendar'

  const props = defineProps({
    message: Object
  })
  const time = props.message.sendTime
  calendar.messageDate(time)
</script>

<style lang="scss">
  .message {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 3px 10px;
    margin-bottom: 5px;

    &__avatar {
      overflow: hidden;
      border-radius: 50%;
      border: solid 2px $muted;
    }

    &__body {
      padding: 0 10px;
      text-align: left;

      .user {
        &__name,
        &__message-text {
          margin: 0;
        }

        &__name {
          font-weight: 600;
        }
      }
    }

    &__send-time {
      font-size: 0.7rem;
      font-weight: 300;
    }
  }
</style>
