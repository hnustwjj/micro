<template>
  <div v-for="item in list" :key="item.path">
    <RouterLink :to="item.path">
      {{ item.name }}
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
const list = [
  {
    name: "vue3",
    path: "/vue3"
  },
  {
    name: "vue2",
    path: "/vue2"
  },
  {
    name: "react",
    path: "/react"
  },
]
</script>