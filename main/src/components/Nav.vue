<template>
  <div v-for="item in navList" :key="item.name">
    <div @click="()=>$router.push(item.path)">{{item.name}}</div>
  </div>
</template>
<script lang="ts" setup>
const navList = [
  { name: "first vue", path: "/subapp/app-vue" },
  { name: "second vue", path: "/subapp/app-vue2" },
]
</script>
