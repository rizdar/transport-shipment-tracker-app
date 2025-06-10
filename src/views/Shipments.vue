<script setup>
import { onMounted, h } from "vue";
import Loading from "../components/Loading.vue";
import { format } from "date-fns";
import ViewButton from "../components/ViewButton.vue";
import DataTable from "../components/table/DataTable.vue";
import { useShipmentStore } from "../stores/shipment";

const shipmentStore = useShipmentStore();

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

onMounted(() => {
  shipmentStore.loadShipments();
});
</script>

<template>
  <div class="p-4">
    <div
      v-if="shipmentStore.loading"
      class="flex justify-center items-center min-h-[300px]"
    >
      <Loading />
    </div>

    <DataTable
      v-else
      :data="shipmentStore.shipments"
      :columns="columnsShipment"
    />
  </div>
</template>
