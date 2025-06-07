<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="max-w-6xl mx-auto pb-8">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
