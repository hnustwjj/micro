<template>
  <Header/>
  <RouterView/>
  <div id="sub-caontiner">
    子应用内容
  </div>
</template>

<script lang="ts" setup>
import Header from './components/header.vue';
</script>
