<template>
    <section class="relative bg-blue-950 py-44 mb-4">
    <div 
      class="absolute inset-0 bg-no-repeat opacity-50 bg-[url('../assets/images/hero.jpg')] bg-cover bg-[center_top_30%]">
    </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-semibold text-white sm:text-5xl md:text-6xl animate-fade-in">
                    {{ title }}
                </h1>
                <p class="my-4 text-xl text-white">
                    {{ subtitle }}
                </p>
            </div>
        </div>
    </section>
</template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: {
      type: String,
      default: 'Become a Vue Developer'
    },
    subtitle: {
      type: String,
      default: 'Find the Vue job that fits your skills and needs'
    }
  });
  </script>
  
  <style scoped>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in;
  }
  </style>
  