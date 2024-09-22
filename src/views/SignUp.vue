<template>
    <section class="bg-white">
      <div class="container m-auto max-w-lg py-24"> <!-- Changed max-w-6xl to max-w-lg -->
        <div class="bg-white px-6 py-8 mb-4 shadow-xl rounded-md border m-4 md:m-0">
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-8 text-blue-950 font-title tracking-widest">Sign Up</h2>
  
            <div class="mb-4">
              <label for="name" class="block text-blue-950 font-bold mb-2 font-title">Name</label>
              <input type="text" v-model="form.name" id="name" required
                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Your Name" />
            </div>
  
            <div class="mb-4">
              <label for="email" class="block text-blue-950 font-bold mb-2 font-title">Email</label>
              <input type="email" v-model="form.email" id="email" required
                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Your Email" />
            </div>
  
            <div class="mb-4">
              <label for="password" class="block text-blue-950 font-bold mb-2 font-title">Password</label>
              <input type="password" v-model="form.password" id="password" required
                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Your Password" />
            </div>
  
            <div class="mb-4">
              <label for="confirmPassword" class="block text-blue-950 font-bold mb-2 font-title">Confirm Password</label>
              <input type="password" v-model="form.confirmPassword" id="confirmPassword" required
                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Confirm Password" />
            </div>
  
            <div class="mt-6 mb-5 text-center">
              <button type="submit"
                class="bg-btncolor hover:bg-blue-950 text-blue-950 hover:text-white font-bold py-2 px-8 rounded-full tracking-widest focus:outline-none focus:shadow-outline transition-all duration-300">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const toast = useToast();
  const router = useRouter();
  const form = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleSubmit = async () => {
    try {
      await axios.post('/api/signup', form.value);
      toast.success('Sign Up successful');
      router.push('/signin');
    } catch (error) {
      console.error('Error signing up', error);
      toast.error('Error signing up');
    }
  };
  </script>
  
  <style scoped>
  .bg-white {
    background-color: #fff;
  }
  </style>
  