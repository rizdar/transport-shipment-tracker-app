<script setup>
const modelValue = defineModel();
</script>

<template>
  <div class="my-4">
    <input
      type="text"
      class="border border-gray-400 rounded px-2 py-2"
      placeholder="Search"
      v-model="modelValue"
    />
  </div>
</template>
