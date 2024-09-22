<template>
  <section class="bg-white">
    <div class="container m-auto max-w-6xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-xl rounded-md border m-4 md:m-0">
        <form @submit.prevent="handelsubmit">
          <h2 class="text-3xl text-center font-semibold mb-8 text-blue-950 font-title tracking-widest">Add Job</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3
                class="font-bold text-blue-950 mb-5 font-title tracking-widest border-b-2 border-blue-950 inline-block"
                style="font-size: 20px;">Job Info</h3>
              <div class="mb-4">
                <label for="type" class="block text-blue-950 font-bold mb-2 font-title">Job Type</label>
                <div class="relative">
                  <select v-model="form.type" id="type" name="type"
                    class="border rounded w-full py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent">
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Job Listing Name</label>
                <input type="text" v-model="form.title" id="name" name="name"
                  class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                  placeholder="eg. Beautiful Apartment In Miami" required />
              </div>

              <div class="mb-4">
                <label for="description" class="block text-blue-950 font-bold mb-2 font-title">Description</label>
                <textarea id="description" v-model="form.description" name="description"
                  class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                  rows="4" placeholder="Add any job duties, expectations, requirements, etc"></textarea>
              </div>

              <div class="mb-4">
                <label for="salary" class="block text-blue-950 font-bold mb-2 font-title">Salary</label>
                <div class="relative">
                  <select id="salary" v-model="form.salary" name="salary"
                    class="border rounded w-full py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent">
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - $60K">$50K - $60K</option>
                    <option value="$60K - $70K">$60K - $70K</option>
                    <option value="$70K - $80K">$70K - $80K</option>
                    <option value="$80K - $90K">$80K - $90K</option>
                    <option value="$90K - $100K">$90K - $100K</option>
                    <option value="$100K - $125K">$100K - $125K</option>
                    <option value="$125K - $150K">$125K - $150K</option>
                    <option value="$150K - $175K">$150K - $175K</option>
                    <option value="$175K - $200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Location</label>
                <input type="text" v-model="form.location" id="location" name="location"
                  class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                  placeholder="Job location" required />
              </div>
            </div>

            <div>
              <h3
                class="font-bold text-blue-950 mb-5 font-title tracking-widest border-b-2 border-blue-950 inline-block"
                style="font-size: 20px;">Company Info</h3>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Company Name</label>
                <input type="text" v-model="form.company.name"
                  class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                  placeholder="Company Name" required />
              </div>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Company Description</label>
                <textarea v-model="form.company.description"
                  class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                  rows="3" placeholder="Description of the company" required></textarea>
              </div>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Contact Email</label>
                <input type="email" v-model="form.company.contactEmail"
                  class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                  placeholder="Contact Email" required />
              </div>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Contact Phone</label>
                <input type="tel" v-model="form.company.contactPhone"
                  class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                  placeholder="Contact Phone" required />
              </div>
            </div>
          </div>

          <div class="mt-6 mb-5 text-center">
            <button type="submit"
              class="bg-btncolor hover:bg-blue-950 text-blue-950 hover:text-white font-bold py-2 px-8 rounded-full tracking-widest focus:outline-none focus:shadow-outline transition-all duration-300">
              ADD JOB
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
  title: '',
  type: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
  }
});

const handelsubmit = async () => {
  try {
    await axios.post('/api/jobs', form.value);
    toast.success('Job added successfully');
    router.push('/jobs');
  } catch (error) {
    console.error('Error adding job', error);
    toast.error('Error adding job');
  }
};
</script>

<style scoped>
.bg-white {
  background-color: #fff;
}
</style>
