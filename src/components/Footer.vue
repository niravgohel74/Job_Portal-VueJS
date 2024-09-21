<template>
  <footer class="bg-blue-950 border-t border-white py-6">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <RouterLink class="flex flex-shrink-0 items-center" to="/">
            <img class="h-8 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
        </div>
        <div class="flex space-x-6 text-sm">
          <RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink>
          <RouterLink to="/jobs" class="text-white hover:text-gray-300">Jobs</RouterLink>
          <RouterLink to="/jobs/add" class="text-white hover:text-gray-300">Add Job</RouterLink>
          <RouterLink to="/contact" class="text-white hover:text-gray-300">Contact Us</RouterLink>
        </div>
      </div>
      <div class="mt-6 text-center">
        <p class="text-white text-sm">
          Copyright &copy; 2024 - All Rights Reserved |
          <RouterLink to="/privacy" class="hover:underline text-gray-300">Privacy Policy</RouterLink> |
          <RouterLink to="/terms" class="hover:underline text-gray-300">Terms of Service</RouterLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/logo.png';
</script>
