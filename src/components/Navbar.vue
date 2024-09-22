<template>
  <nav class="bg-blue-950 border-b border-gray-400">
    <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-28">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" :class="['px-3 py-2 relative', isActiveLink('/') ? 'text-gray-400' : 'text-white hover:text-gray-400 transition font-body']">Home</RouterLink>
              <RouterLink to="/jobs" :class="['px-3 py-2 relative', isActiveLink('/jobs') ? 'text-gray-400' : 'text-white hover:text-gray-400 transition font-body']">Jobs</RouterLink>
              <RouterLink to="/jobs/add" :class="['px-3 py-2 relative', isActiveLink('/jobs/add') ? 'text-gray-400' : 'text-white hover:text-gray-400 transition font-body']">Add Job</RouterLink>
              <RouterLink to="/contact" :class="['px-3 py-2 relative', isActiveLink('/contact') ? 'text-gray-400' : 'text-white hover:text-gray-400 transition font-body']">Contact Us</RouterLink>
              <RouterLink to="/signin" :class="['px-3 py-2 relative', isActiveLink('/signin') ? 'text-gray-400' : 'text-white hover:text-gray-400 transition font-body']">Sign In</RouterLink>
              <RouterLink to="/signup" :class="['px-3 py-2 relative', isActiveLink('/signup') ? 'text-gray-400' : 'text-white hover:text-gray-400 transition font-body']">Sign Up</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/images/logo.png';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<style scoped>
.nav-link:hover {
  text-decoration: underline;
}
</style>



