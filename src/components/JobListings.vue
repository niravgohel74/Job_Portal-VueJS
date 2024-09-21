<template>
  <section class="bg-white px-10 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-black mb-10 text-center">Browse Jobs</h2>
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <pulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 gap-10 md:grid-cols-3">
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
      </div>
      <div v-if="showButton" class="flex justify-center mt-20 mb-10">
        <RouterLink to="/jobs" class="bg-black text-white rounded-full tracking-widest font-bold px-8 py-2 hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
          View All Jobs
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
