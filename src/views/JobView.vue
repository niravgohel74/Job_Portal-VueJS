<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-white">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4 text-blue-950">{{ state.job.title }}</h1>
            <p class=" mb-4">{{ state.job.type }}</p>
            <div class="text-gray-600 mb-4 flex align-middle justify-center md:justify-start">
              <i class="pi pi-map-marker text-xl text-red-600 mr-2"></i>
              <p class="text-black">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-blue-950 text-lg font-bold mb-6">Job Description</h3>
            <p class="mb-4">{{ state.job.description }}</p>
            <h3 class="text-blue-950 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ state.job.salary }} / Year</p>
          </div>
        </main>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6 text-blue-950">Company Info</h3>
            <h2 class="text-2xl">{{ state.job.company.name }}</h2>
            <p class="my-2">{{ state.job.company.description }}</p>
            <hr class="my-4" />
            <h3 class="text-xl text-blue-950">Contact Email:</h3>
            <p class="my-2 bg-gray-100 p-2 font-bold">{{ state.job.company.contactEmail }}</p>
            <h3 class="text-xl text-blue-950">Contact Phone:</h3>
            <p class="my-2 bg-gray-100 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6 text-blue-950">Manage Job</h3>
            <RouterLink :to="`/jobs/edit/${state.job.id}`" class="bg-btncolor hover:bg-blue-950 text-blue-950 hover:text-white text-center tracking-widest font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block transition-all duration-300">
              EDIT JOB
            </RouterLink>
            <button @click="deleteJob" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full tracking-widest w-full focus:outline-none focus:shadow-outline mt-4 block">
              DELETE JOB
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6">
    <pulseLoader />
  </div>
</template>

<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import BackButton from '../components/BackButton.vue';
import { onMounted, reactive } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();
const toast = useToast();
const router = useRouter();
const jobId = route.params.id;
const state = reactive({
  job: {},
  isLoading: true,
});

const deleteJob = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if (confirm) {
      await axios.delete(`/api/jobs/${jobId}`);
      toast.success('Job deleted successfully');
      router.push('/jobs');
    }
  } catch (error) {
    console.error('Error deleting job', error);
    toast.error('Error deleting job');
  }
}

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    state.job = response.data;
  } catch (error) {
    console.error('Error fetching job', error);
  } finally {
    state.isLoading = false;
  }
})
</script>

<style scoped>
.text-black {
  color: #000;
}
.bg-white {
  background-color: #fff;
}
</style>
