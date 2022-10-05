<template>
  <div v-for="item in navList" :key="item.name">
    <router-link :to="item.path">{{item.name}}</router-link>
  </div>
</template>
<script lang="ts" setup>
const navList = [
  { name: "vue3-subapp", path: "/vue3-subapp" }
]
</script>
