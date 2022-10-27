<template>
  <div>
    <h3 class="p-20">{{ name }}</h3>
    <!-- <PnzButton icon="search" ratio="0.8" /> -->
    <hr />
    <table class="h-table mt-20 dark-mode">
      <thead>
        <tr>
          <th class="shrink uk-visible@s">ID</th>
          <th class="auto">Имя</th>
          <th class="expand">Email</th>
          <th class="shrink">Roles</th>
          <th class="shrink">Block</th>
          <th class="shrink">Delete</th>
        </tr>
      </thead>
      <tbody v-if="users.length > 0">
        <tr v-for="user in users.filter(exceptAdmin)" :key="user.chatID">
          <td>{{ user.chatID }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <span class="role bg-light">{{ user.roles[0] }}</span>
          </td>
          <td class="text-center"><button class="btn btn-border btn-icon p-11" v-html="icons.lock"></button></td>
          <td class="text-center"><button class="btn btn-danger btn-icon p-11" v-html="icons.close"></button></td>
        </tr>
      </tbody>
      <tbody v-else>
        <div uk-spinner></div>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import icons from '@/utils/icons'
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const props = defineProps({
    name: String
  })

  const store = useStore()
  store.dispatch('getAllUsers')
  const users = computed(() => store.getters['all'])
  function exceptAdmin(user) {
    return !user.roles.includes('admin')
  }
</script>

<style lang="scss">
  .role {
    display: block;
    padding: 2px 5px;
    text-align: center;
    font-size: $standart;
  }
</style>
