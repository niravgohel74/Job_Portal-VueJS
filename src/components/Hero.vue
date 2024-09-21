<template>
    <section class="relative bg-blue-950 py-56 mb-4">
    <div 
      class="absolute inset-0 bg-no-repeat opacity-15 bg-[url('../assets/images/hero.jpg')] bg-cover bg-[center_top_30%]">
    </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-bold font-title text-white sm:text-5xl md:text-7xl animate-fade-in">
                    {{ title }}
                </h1>
                <p class="my-4 text-xl font-body text-white">
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
      default: 'ELEVATE YOUT CAREER JOURNEY'
    },
    subtitle: {
      type: String,
      default: 'Find Roles That Challenge and Excite You Every Day.'
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
  