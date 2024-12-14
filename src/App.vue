<script setup lang="ts">
import UserNavBar from './components/UserNavBar.vue';
import UserFooter from './components/UserFooter.vue';
</script>

<template>
  <UserNavBar />
  <RouterView />
  <UserFooter />
</template>

<style scoped></style>
