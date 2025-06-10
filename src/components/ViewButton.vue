<script setup>
import { ROUTE_NAMES } from "../constants/routerName";
import { EyeIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  id: Number,
});
</script>

<template>
  <router-link
    class="text-indigo-600 hover:text-indigo-500"
    :to="{
      name: ROUTE_NAMES.SHIPMENT_DETAIL,
      params: { id: props.id },
    }"
  >
    <EyeIcon class="w-5 h-5 text-blue-500" />
  </router-link>
</template>
