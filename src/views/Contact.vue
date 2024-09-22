<template>
    <div class="min-h-screen flex flex-col">
        <div class="flex-grow">
            <section class="bg-white px-10 py-10">
                <div class="container-xl lg:container m-auto">
                    <h2 class="text-4xl font-bold text-blue-950 mb-10 font-title tracking-widest text-center">Contact Us
                    </h2>
                    <form @submit.prevent="handleContact" class="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700">Name</label>
                            <input type="text" v-model="contactForm.name" id="name"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700">Email</label>
                            <input type="email" v-model="contactForm.email" id="email"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-gray-700">Message</label>
                            <textarea v-model="contactForm.message" id="message" rows="4"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required></textarea>
                        </div>
                        <div class="flex justify-center">
                            <button type="submit"
                                class="bg-btncolor text-blue-950 font-bold rounded-full px-6 py-2 hover:bg-blue-950 hover:text-white transition-all duration-300">
                                Send Message
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
  
  const contactForm = reactive({
    name: '',
    email: '',
    message: ''
  });
  
  const handleContact = () => {
    // Handle contact form submission logic here (e.g., API call)
    console.log('Contact Us:', contactForm);
  };
  </script>
  