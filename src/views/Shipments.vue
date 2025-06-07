<script setup>
import { ref, onMounted, h } from "vue";
import { fetchShipments } from "../services/shipmentService";
import { ROUTE_NAMES } from "../constants/routerName";
import Loading from "../components/Loading.vue";
import TableShipments from "../components/TableShipments.vue";
import shipment from "../data/shipments.json";
import { format } from "date-fns";
import ViewButton from "../components/ViewButton.vue";
import DataTable from "../components/table/DataTable.vue";
const shipments = ref([]);
const loading = ref(true);

const columnsShipment = [
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
  },
  {
    accessorFn: (row) => `${row.origin} - ${row.destination}`,
    header: "Origin / Destination",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
    cell: (info) => format(new Date(info.getValue()), "d MMM, yyyy"),
  },
  {
    accessorKey: "view",
    header: "",
    cell: ({ row }) => h(ViewButton, { id: row.original.id }),
    enableSorting: false,
  },
];

onMounted(async () => {
  loading.value = true;
  shipments.value = await fetchShipments();
  loading.value = false;
});
</script>

<template>
  <!-- <Loading v-if="loading" />
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
  </div> -->

  <!-- <TableShipments :data="shipment" :columns="columnsShipment" /> -->
  <DataTable :data="shipment" :columns="columnsShipment" />
</template>

<style scoped></style>
