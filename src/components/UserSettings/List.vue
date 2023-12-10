<template>
  <div class="grid">
    <div class="w-25">
      <ul class="nav-list">
        <li class="nav-list__header">Настройки</li>
        <li v-for="item in menuItems" :key="item.title" :class="['nav-list__item', { active: activeMenuItem.id === item.id }]" @click="setActiveComp(item)">
          <a>{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="w-expand">
      <component :is="ContentItems[activeMenuItem.id]" :name="activeMenuItem.title"></component>
    </div>
  </div>
</template>

<script setup>
import * as ContentItems from './_index'
import { activeMenuItem, menuItems, setActiveComp } from '@/features/settings/User/setupMenu'
</script>

<style lang="scss"></style>
