<template>
  <section class="bg-white px-10 py-10">
    <div class="container-xl lg:container m-auto">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-blue-950 mb-10 font-title tracking-widest border-b-2 border-blue-950 inline-block">Browse Jobs</h2>
      </div>
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <pulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"
          class="border border-gray-300 hover:shadow-2xl" />
      </div>
      <div v-if="showButton" class="flex justify-center mt-20 mb-10">
        <RouterLink to="/jobs"
          class="bg-btncolor text-blue-950 rounded-full tracking-widest font-bold px-10 py-4 hover:bg-blue-950 hover:text-white transition-all duration-300">
          VIEW ALL JOBS
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import { reactive, defineProps, onMounted } from 'vue';
import pulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
});

const state = reactive({
  jobs: [],
  isLoading: true
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.error('Error Fetching Jobs', error);
  } finally {
    state.isLoading = false;
  }
});
</script>
