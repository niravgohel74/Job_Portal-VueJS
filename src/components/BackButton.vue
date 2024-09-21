<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <!-- Go Back -->
    <section>
      <div class="container m-auto py-6 px-6">
        <RouterLink
          to="/jobs"
          class="text-blue-950 flex items-center"
        >
          <i class="pi pi-arrow-circle-left mr-2"></i> Back to Jobs
        </RouterLink>
      </div>
    </section>
</template>