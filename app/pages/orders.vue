<template>
  <div class="container mx-auto p-6">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1>Orders</h1>
        <p class="mt-2 text-sm text-gray-700">List of all orders</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          + New Order
        </button>
      </div>
    </div>

    <OrderTable2 />
    <!-- <div class="my-20"></div>
    <hr />
    <div class="my-20"></div>
    <OrderTable /> -->
  </div>
</template>
