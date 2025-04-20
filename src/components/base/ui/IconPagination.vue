<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['prevPage', 'nextPage'])
</script>

<template>
  <div v-if="totalPages > 1" class="flex justify-center mt-6">
    <div class="join">
      <button
        class="join-item btn btn-sm"
        :disabled="currentPage === 1"
        @click="emit('prevPage')"
      >
        <Icon name="hugeicons:arrow-left-01" />
      </button>
      <button class="join-item btn btn-sm">
        {{ currentPage }} / {{ totalPages }}
      </button>
      <button
        class="join-item btn btn-sm"
        :disabled="currentPage === totalPages"
        @click="emit('nextPage')"
      >
        <Icon name="hugeicons:arrow-right-01" />
      </button>
    </div>
  </div>
</template>
