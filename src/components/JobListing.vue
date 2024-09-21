<template>
  <div class="job-listing bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:shadow-xl">
    <h3 class="text-xl font-bold">{{ job.title }}</h3>
    <div class="text-gray-600 my-2">{{ job.type }}</div>
    <p>{{ truncatedDescription }}</p>
    <h3 class="text-black font-semibold mb-2">{{ job.salary }} / Year</h3>
    <div class="border border-gray-200 mb-4"></div>
    <div class="flex justify-between items-center">
      <div class="text-gray-600">{{ job.location }}</div>
      <RouterLink :to="`/jobs/${job.id}`" class="bg-black text-white rounded-full tracking-widest text-sm px-6 py-2 hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
        View Job
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  job: {
    type: Object,
    required: true
  }
});

const truncatedDescription = computed(() => {
  return props.job.description.length > 100 ? props.job.description.slice(0, 100) + '...' : props.job.description;
});
</script>

<style scoped>
.job-listing:hover {
  transform: translateY(-5px);
}
</style>
