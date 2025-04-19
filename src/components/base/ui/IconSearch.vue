<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

function clearSearch() {
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="form-control w-full max-w-md">
    <div class="relative">
      <Icon
        name="hugeicons:search-01"
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg opacity-60"
      />
      <input
        :value="modelValue"
        type="text"
        placeholder="搜索图标..."
        class="input input-bordered w-full pl-10 pr-10"
        @input="emit('update:modelValue', $event.target.value)"
      >
      <button
        v-if="modelValue"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg opacity-60 hover:opacity-100"
        @click="clearSearch"
      >
        <Icon name="hugeicons:cancel-01" />
      </button>
    </div>
  </div>
</template>
