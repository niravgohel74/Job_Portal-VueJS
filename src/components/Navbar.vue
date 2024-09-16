<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/images/logo.png'

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath
}
</script>

<style scoped>
.border-animation::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: theme('colors.orange.600');
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.border-animation:hover::before {
  width: 100%;
}

.active-border::before {
  width: 100%;
  background-color: theme('colors.orange.600');
}
</style>

<template>
  <nav class="bg-blue-950 border-b border-white">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" :class="[
                'px-3',
                'py-2',
                'relative', // Ensure pseudo-element is positioned correctly
                isActiveLink('/')
                  ? 'text-orange-600 active-border'
                  : 'text-white hover:text-orange-600 border-animation'
              ]">
                Home
              </RouterLink>
              <RouterLink to="/jobs" :class="[
                'px-3',
                'py-2',
                'relative',
                isActiveLink('/jobs')
                  ? 'text-orange-600 active-border'
                  : 'text-white hover:text-orange-600 border-animation'
              ]">Jobs
              </RouterLink>
              <RouterLink to="/jobs/add" :class="[
                'px-3',
                'py-2',
                'relative',
                isActiveLink('/jobs/add')
                  ? 'text-orange-600 active-border'
                  : 'text-white hover:text-orange-600 border-animation'
              ]">Add Job
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>