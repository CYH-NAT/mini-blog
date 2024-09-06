<script setup>
import { useStore } from "./store";

const store = useStore()
console.log(store.x)

</script>

<template>
  <router-view/>
</template>

<style scoped>

</style>
