<template>
  <section class="py-16">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 rounded-lg">
        <Card class="md:p-10 bg-gray-100 hover:bg-white shadow-none animated-card">
          <h2 class="text-3xl font-bold text-blue-950 font-title">For Developers</h2>
          <p class="mt-2 mb-4 text-gray-600 font-body">
            Browse our jobs and start your career today
          </p>
          <RouterLink
            to="/jobs"
            class="bg-btncolor font-body text-blue-950 font-bold text-sm rounded-full tracking-widest hover:bg-blue-950 hover:text-white transition-all duration-300 px-6 py-2"
          >
            BROWSE JOBS
          </RouterLink>
        </Card>
        <Card class="md:p-10 bg-gray-100 hover:bg-white shadow-none animated-card">
          <h2 class="text-3xl font-bold text-blue-950 font-title">For Employers</h2>
          <p class="mt-2 mb-4 text-gray-600 font-body">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/jobs/add"
            class="bg-btncolor font-body text-blue-950 font-bold text-sm rounded-full tracking-widest hover:bg-blue-950 hover:text-white border-black transition-all duration-300 px-6 py-2"
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
  box-shadow: 0 20px 40px rgba(172, 172, 172, 0.3);
}

</style>
