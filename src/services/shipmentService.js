import data from "../data/shipments.json";

export function fetchShipments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export function fetchShipmentById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const shipment = data.find((s) => s.id === Number(id));
      resolve(shipment || null);
    }, 500);
  });
}
