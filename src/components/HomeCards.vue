<template>
  <section class="py-16">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 rounded-lg">
        <Card class="p-10 bg-white shadow-lg animated-card">
          <h2 class="text-2xl font-bold text-black">For Developers</h2>
          <p class="mt-2 mb-4 text-gray-600">
            Browse our Vue jobs and start your career today
          </p>
          <RouterLink
            to="/jobs"
            class="bg-black text-white text-sm rounded-full tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-6 py-2"
          >
            BROWSE JOBS
          </RouterLink>
        </Card>
        <Card bg="bg-gray-100" class="p-10 animated-card">
          <h2 class="text-2xl font-bold text-black">For Employers</h2>
          <p class="mt-2 mb-4 text-gray-600">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/jobs/add"
            class="bg-black text-white text-sm rounded-full tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all duration-300 px-6 py-2"
          >
            ADD JOB
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue';
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.animated-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.animated-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
