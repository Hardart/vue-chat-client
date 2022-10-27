<template>
  <div class="grid">
    <div class="w-25">
      <ul class="nav-list">
        <li class="nav-list__header">Настройки</li>
        <li v-for="item in menuItems" :key="item.title" :class="['nav-list__item', { active: comp.activeSlug === item.slug }]" @click="setActiveComp(item)">
          <a>{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="w-expand">
      <component :is="ContentItems[comp.activeSlug]" :name="comp.activeTitle"></component>
    </div>
  </div>
</template>

<script setup>
  import * as ContentItems from './_index'
  import { comp, menuItems, setActiveComp } from '@/features/settings/User/setupMenu'
</script>

<style lang="scss"></style>
