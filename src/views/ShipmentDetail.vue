<script setup>
import { onMounted, computed, watch, ref } from "vue";
import Loading from "../components/Loading.vue";
import { useShipmentStore } from "../stores/shipment";

const shipmentStore = useShipmentStore();
const selectedTransporter = ref("");
const showError = ref(false);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  shipmentStore.loadShipmentById(props.id);
  shipmentStore.loadTransporters();
});

watch(
  () => shipmentStore.selectedShipment,
  (newShipment) => {
    if (newShipment?.assignedTransporter) {
      selectedTransporter.value = newShipment.assignedTransporter.id;
    } else {
      selectedTransporter.value = "";
    }
  },
  { immediate: true }
);

const statusClass = computed(() => {
  const status = shipmentStore.selectedShipment?.status || "";
  if (status === "Assigned") {
    return "bg-green-100 text-green-800";
  } else if (status === "Not Assigned") {
    return "bg-red-100 text-red-800";
  } else {
    return "bg-gray-100 text-gray-800";
  }
});

function handleAssign() {
  if (!selectedTransporter.value) {
    showError.value = true;
    return;
  }

  showError.value = false;
  shipmentStore.assignTransporterToShipment(selectedTransporter.value);
}
</script>

<template>
  <div
    v-if="shipmentStore.loading"
    class="flex justify-center items-center min-h-[300px]"
  >
    <Loading />
  </div>
  <div v-else-if="shipmentStore.selectedShipment">
    <div class="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Shipment Detail</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-gray-500">Shipment ID</p>
          <p class="text-base font-medium text-gray-900">
            {{ shipmentStore.selectedShipment.id }}
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500">Status</p>
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
            :class="statusClass"
          >
            {{ shipmentStore.selectedShipment.status }}
          </span>
        </div>

        <div>
          <p class="text-sm text-gray-500">Origin</p>
          <p class="text-base font-medium text-gray-900">
            {{ shipmentStore.selectedShipment.origin }}
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500">Destination</p>
          <p class="text-base font-medium text-gray-900">
            {{ shipmentStore.selectedShipment.destination }}
          </p>
        </div>

        <div class="md:col-span-2">
          <p class="text-sm text-gray-500">Route</p>
          <p class="text-base font-medium text-gray-900">
            {{ shipmentStore.selectedShipment.route }}
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500">Vehicle Type</p>
          <p class="text-base font-medium text-gray-900">
            {{ shipmentStore.selectedShipment.vehicleType }}
          </p>
        </div>

        <div>
          <p class="text-sm text-gray-500">Assigned Transporter</p>
          <p class="text-base font-medium text-gray-900">
            {{
              shipmentStore.selectedShipment.assignedTransporter
                ? shipmentStore.selectedShipment.assignedTransporter.name
                : "-"
            }}
          </p>
        </div>

        <div
          v-if="shipmentStore.transporters"
          class="space-y-4 mt-6 flex items-center gap-6"
        >
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Assign Transporter</label
            >

            <select
              v-model="selectedTransporter"
              :class="[
                'w-full px-4 py-2 mt-1 text-sm bg-white border rounded-lg shadow-sm transition focus:outline-none',
                showError
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500',
              ]"
            >
              <option disabled value="">Select transporter</option>
              <option
                v-for="transporter in shipmentStore.transporters"
                :key="transporter.id"
                :value="transporter.id"
              >
                {{ transporter.name }}
              </option>
            </select>
            <p v-if="showError" class="text-sm text-red-600 mt-1">
              Transporter wajib dipilih.
            </p>
          </div>

          <div>
            <button
              @click="handleAssign"
              class="inline-flex items-center px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition cursor-pointer"
            >
              Assign
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 flex justify-end">
        <button
          @click="$router.back()"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          ← Go Back
        </button>
      </div>
    </div>
  </div>

  <div v-else class="text-center text-red-500">Shipment not found.</div>
</template>
