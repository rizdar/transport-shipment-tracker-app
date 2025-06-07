<script setup>
import { ROUTE_NAMES } from "../constants/routerName";

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
    View
  </router-link>
</template>
