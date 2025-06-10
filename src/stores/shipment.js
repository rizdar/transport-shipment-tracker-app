import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchShipmentById, fetchShipments } from "../services/shipmentService";
import { fetchTransporters } from "../services/transporterService";

import { useToast } from "vue-toast-notification";
const toast = useToast();

export const useShipmentStore = defineStore("shipment", () => {
  const shipments = ref([]);
  const transporters = ref([]);
  const selectedShipment = ref(null);
  const loading = ref(false);

  async function loadShipments() {
    loading.value = true;
    shipments.value = await fetchShipments();
    loading.value = false;
  }

  async function loadShipmentById(id) {
    loading.value = true;
    selectedShipment.value = await fetchShipmentById(id);
    loading.value = false;
  }

  async function loadTransporters() {
    transporters.value = await fetchTransporters();
  }
  // function assignTransporterToShipment(transporterId) {
  //   if (!this.selectedShipment) return;

  //   const transporter = this.transporters.find((t) => t.id === transporterId);
  //   if (!transporter) return;

  //   this.selectedShipment.assignedTransporter = transporter;
  //   this.selectedShipment.status = "Assigned";
  // }

  async function assignTransporterToShipment(transporterId) {
    if (!this.selectedShipment) return;

    const transporter = this.transporters.find((t) => t.id === transporterId);
    if (!transporter) return;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const isSuccess = Math.random() < 0.7;

    if (isSuccess) {
      this.selectedShipment.assignedTransporter = transporter;
      this.selectedShipment.status = "Assigned";
      toast.success("Transporter successfully assigned!");
    } else {
      toast.error("Failed to assign transporter. Please try again.");
    }
  }

  return {
    shipments,
    transporters,
    selectedShipment,
    loading,
    loadShipments,
    loadShipmentById,
    loadTransporters,
    assignTransporterToShipment,
  };
});
