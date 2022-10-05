<template>
  <div v-for="item in navList" :key="item.name">
    <div @click="()=>$router.push(item.path)">{{item.name}}</div>
  </div>
</template>
<script lang="ts" setup>
const navList = [
  { name: "vue3-subapp", path: "/subapp/app-vue" }
]
</script>
