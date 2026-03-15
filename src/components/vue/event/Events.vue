<script setup lang="ts">
import { useFetchEvents } from "../../../api/event/useFetchEvents";

const { data, isLoading, error } = useFetchEvents();
</script>

<template>
  <div v-if="isLoading" class="flex justify-center py-20">
    <p class="text-gray-500 animate-pulse">Loading events...</p>
  </div>

  <div v-else-if="error" class="text-red-500 text-center py-20">
    Failed to load events
  </div>

  <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(event, i) in data"
      :key="i"
      class="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
    >
      <div class="flex justify-between items-start mb-3">
        <h2 class="font-semibold text-lg text-gray-800">
          {{ event.name }}
        </h2>

        <span class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
          {{ event.status }}
        </span>
      </div>

      <p class="text-sm text-gray-600 mb-3">📍 {{ event.location }}</p>

      <p class="text-sm text-gray-500">
        Ends:
        <span class="font-medium text-gray-700">
          {{ new Date(event.end_date).toLocaleDateString() }}
        </span>
      </p>
    </div>
  </div>
</template>
