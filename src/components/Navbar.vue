<script setup>
import logo from "../assets/logo-tst.png";
</script>

<template>
  <nav class="bg-white border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img :src="logo" alt="Transport Shipment Tracker Logo" class="h-8" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Transport Shipment Tracker</span
        >
      </router-link>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
              >Home</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
