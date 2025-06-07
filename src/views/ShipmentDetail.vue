<script setup>
import { ref, onMounted } from "vue";
import { fetchShipmentById } from "../services/shipmentService";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";
import { ROUTE_NAMES } from "../constants/routerName";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const shipment = ref(undefined);
const loading = ref(true);
const router = useRouter();

onMounted(async () => {
  loading.value = true;
  shipment.value = await fetchShipmentById(props.id);

  loading.value = false;
});
</script>

<template>
  <h1>shipment detail</h1>
  <p>This is shipment detail</p>
  <p>idnya adalah {{ $route.params.id }}</p>
  <Loading v-if="loading" />
  <div v-else>shipment</div>

  <button @click="$router.back">go back</button>
</template>

<style scoped></style>
