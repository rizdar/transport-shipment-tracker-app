import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_NAMES } from "../constants/routerName";
const Home = () => import("../views/Shipments.vue");
const ShipmentDetail = () => import("../views/ShipmentDetail.vue");
const NotFound = () => import("../views/NotFound.vue");

const router = createRouter({
  routes: [
    {
      path: "/",
      name: ROUTE_NAMES.HOME,
      component: Home,
    },
    {
      path: "/shipment/:id",
      name: ROUTE_NAMES.SHIPMENT_DETAIL,
      component: ShipmentDetail,
      props: true,
    },
    {
      path: "/:patchMatch(.*)",
      name: ROUTE_NAMES.NOT_FOUND,
      component: NotFound,
    },
  ],
  history: createWebHistory(),
});

export default router;
