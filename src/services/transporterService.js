import data from "../data/transporter.json";

export function fetchTransporters() {
  return new Promise((resolve) => setTimeout(() => resolve(data), 500));
}

export function assignTransporterToShipment(shipmentId, transporterId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.2; // Simulasi success/fail
      resolve(success);
    }, 500);
  });
}
