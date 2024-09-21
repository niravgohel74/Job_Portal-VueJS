<template>
  <div class="job-listing bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:shadow-xl">
    <h3 class="text-2xl font-bold text-blue-950 font-title">{{ job.title }}</h3>
    <div class="text-gray-600 my-2 font-body text-sm">{{ job.type }}</div>
    <p class="mb-5 mt-4 font-body" style="font-size: 15px;">{{ truncatedDescription }}</p>
    <h3 class="text-blue-950 font-bold mb-4 font-body" style="font-size: 16px;">{{ job.salary }} / Year</h3>
    <div class="border border-gray-200 mb-4"></div>
    <div class="flex justify-between items-center">
      <div class="text-gray-600 font-body" style="font-size: 15px;"><i class="pi pi-map-marker mr-2 text-red-600"></i>{{ job.location }}</div>
      <RouterLink :to="`/jobs/${job.id}`" class="font-body bg-btncolor text-blue-950 font-bold rounded-full tracking-widest text-sm px-6 py-2 hover:bg-blue-950 hover:text-white transition-all duration-300">
        VIEW JOB
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
