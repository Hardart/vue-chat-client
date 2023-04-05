<template>
  <div class="preloader"><span></span></div>
</template>

<script setup></script>

<style lang="scss">
%el {
  display: block;
  width: 30px;
  height: 30px;
}

.preloader {
  @extend %el;
  margin: 20px auto;

  span {
    @extend %el;
    border: 3px solid;
    border-radius: 50%;
    border-color: transparent $light $light;
    animation: spin 800ms infinite linear;
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
