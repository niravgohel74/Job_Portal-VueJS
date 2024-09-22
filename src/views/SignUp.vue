<template>
    <div class="min-h-screen flex flex-col">
        <div class="flex-grow">
            <section class="bg-white px-10 py-10">
                <div class="container-xl lg:container m-auto">
                    <h2 class="text-4xl font-bold text-blue-950 mb-10 font-title tracking-widest text-center">Sign Up
                    </h2>
                    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700">Name</label>
                            <input type="text" v-model="form.name" id="name"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700">Email</label>
                            <input type="email" v-model="form.email" id="email"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-gray-700">Password</label>
                            <input type="password" v-model="form.password" id="password"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div class="flex justify-center">
                            <button type="submit"
                                class="bg-btncolor text-blue-950 font-bold rounded-full px-6 py-2 hover:bg-blue-950 hover:text-white transition-all duration-300">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive({
    name: '',
    email: '',
    password: ''
  });
  
  const handleSubmit = () => {
    // Handle sign up logic here (e.g., API call)
    console.log('Sign Up:', form);
  };
  </script>
  
