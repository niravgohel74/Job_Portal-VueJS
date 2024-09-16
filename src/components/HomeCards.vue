<script setup>
import Card from './Card.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- Developers and Employers -->
    <section class="py-10">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 class="text-2xl font-bold">For Developers</h2>
            <p class="mt-2 mb-4">
              Browse our Vue jobs and start your career today
            </p>
            <RouterLink
              to="/jobs"
              class="inline-block bg-orange-600 text-white rounded-lg tracking-widest px-6 py-2 text-sm hover:bg-gray-900"
            >
              BROWSE JOBS
            </RouterLink>
          </Card>
          <Card bg="bg-orange-100">
            <h2 class="text-2xl font-bold">For Employers</h2>
            <p class="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <RouterLink
              to="/jobs/add"
              class="inline-block bg-orange-600 text-white rounded-lg tracking-widest px-6  py-2 text-sm hover:bg-gray-900"
            >
              ADD JOB
            </RouterLink>
          </Card>
        </div>
      </div>
    </section>
</template>