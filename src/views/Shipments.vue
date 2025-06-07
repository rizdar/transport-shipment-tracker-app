<script setup>
import { ref, onMounted } from "vue";
import { fetchShipments } from "../services/shipmentService";
import { ROUTE_NAMES } from "../constants/routerName";
import Loading from "../components/Loading.vue";

const shipments = ref([]);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  shipments.value = await fetchShipments();
  loading.value = false;
});
</script>

<template>
  <h1>shipment list</h1>
  <p>This is shipment list</p>

  <Loading v-if="loading" />
  <div v-else>
    <ul>
      <li v-for="shipment in shipments" :key="shipment.id">
        <router-link
          :to="{
            name: ROUTE_NAMES.SHIPMENT_DETAIL,
            params: { id: shipment.id },
          }"
        >
          {{ shipment.id }} - {{ shipment.origin }} → {{ shipment.destination }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
