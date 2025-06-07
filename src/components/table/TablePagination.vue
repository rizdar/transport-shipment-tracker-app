<script setup>
defineProps({ table: Object });
</script>

<template>
  <div class="space-x-4 mt-8">
    <button
      class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      @click="table.setPageIndex(0)"
    >
      First page
    </button>
    <button
      class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="!table.getCanPreviousPage()"
      @click="table.previousPage()"
    >
      Prev page
    </button>
    <button
      class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="!table.getCanNextPage()"
      @click="table.nextPage()"
    >
      Next page
    </button>
    <button
      class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      @click="table.setPageIndex(table.getPageCount() - 1)"
    >
      Last page
    </button>
  </div>
</template>
