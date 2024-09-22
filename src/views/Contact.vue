<template>
    <section class="bg-white py-24">
        <div class="container m-auto max-w-7xl px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="bg-gray-100 p-8 rounded-md shadow-xl">
                    <h2 class="text-3xl font-semibold mb-8 text-blue-950 font-title tracking-widest">Contact Us</h2>
                    <form @submit.prevent="handleSubmit">
                        <div class="mb-4">
                            <label for="firstName" class="block text-blue-950 font-bold mb-2">First Name</label>
                            <input type="text" v-model="form.firstName" id="firstName" required
                                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" />
                        </div>

                        <div class="mb-4">
                            <label for="lastName" class="block text-blue-950 font-bold mb-2">Last Name</label>
                            <input type="text" v-model="form.lastName" id="lastName" required
                                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" />
                        </div>

                        <div class="mb-4">
                            <label for="phone" class="block text-blue-950 font-bold mb-2">Phone Number</label>
                            <input type="tel" v-model="form.phone" id="phone" required
                                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" />
                        </div>

                        <div class="mb-4">
                            <label for="email" class="block text-blue-950 font-bold mb-2">Email</label>
                            <input type="email" v-model="form.email" id="email" required
                                class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" />
                        </div>

                        <div class="mt-6">
                            <button type="submit"
                                class="bg-btncolor hover:bg-blue-950 text-blue-950 hover:text-white font-bold py-2 px-8 rounded-full transition-all duration-300 w-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div class="p-8">
                    <h2 class="text-3xl font-semibold mb-6 text-blue-950 font-title tracking-widest">Our Office</h2>
                    <p class="mb-3 text-gray-700"><strong>Location:</strong> 123 Main Street, Suite 456, Springfield, IL
                        62701, USA</p>
                    <p class="mb-3 text-gray-700"><strong>Email:</strong> career@jobsphere.com</p>
                    <p class="mb-3 text-gray-700"><strong>Phone:</strong> +1 (555) 555-5555</p>
                    <div class="mt-6">
                        <hr class="border-gray-300 mb-6">
                        <h3 class="text-sm font-semibold text-blue-950 mb-2">Follow Us</h3>
                        <div class="flex space-x-6">
                            <a href="#" class="text-blue-950 hover:text-blue-600 transition-colors">
                                <i class="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a href="#" class="text-blue-950 hover:text-blue-600 transition-colors">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" class="text-blue-950 hover:text-blue-600 transition-colors">
                                <i class="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" class="text-blue-950 hover:text-blue-600 transition-colors">
                                <i class="fab fa-medium fa-lg"></i>
                            </a>
                            <a href="#" class="text-blue-950 hover:text-blue-600 transition-colors">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </a>
                            <a href="#" class="text-blue-950 hover:text-blue-600 transition-colors">
                                <i class="fab fa-pinterest fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });
  
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(form.value);
  };
  </script>
  
  <style scoped>
  .bg-gray-100 {
    background-color: #f7fafc;
  }
  </style>
  
