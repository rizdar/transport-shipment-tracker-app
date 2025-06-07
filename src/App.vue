<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
