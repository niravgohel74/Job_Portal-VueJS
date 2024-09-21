<template>
  <section class="bg-white">
    <div class="container m-auto max-w-6xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-xl rounded-md border m-4 md:m-0">
        <form @submit.prevent="handelsubmit">
          <h2 class="text-3xl text-center font-semibold mb-8 text-blue-950 tracking-widest">Edit Job</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="font-bold text-blue-950 mb-5 font-title tracking-widest border-b-2 border-blue-950 inline-block" style="font-size: 20px;">Job Info</h3>
              <div class="mb-4">
                <label for="type" class="block text-blue-950 font-bold mb-2 font-title">Job Type</label>
                <div class="relative">
                  <select v-model="form.type" id="type" name="type" class="border rounded w-full py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent">
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Job Listing Name</label>
                <input type="text" v-model="form.title" id="name" name="name" class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" placeholder="eg. Beautiful Apartment In Miami" required />
              </div>

              <div class="mb-4">
                <label for="description" class="block text-blue-950 font-bold mb-2 font-title">Description</label>
                <textarea id="description" v-model="form.description" name="description" class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" rows="4" placeholder="Add any job duties, expectations, requirements, etc"></textarea>
              </div>

              <div class="mb-4">
                <label for="salary" class="block text-blue-950 font-bold mb-2 font-title">Salary</label>
                <div class="relative">
                  <select id="salary" v-model="form.salary" name="salary" class="border rounded w-full py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent">
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
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-blue-950 font-bold mb-2 font-title">Location</label>
                <input type="text" v-model="form.location" id="location" name="location" class="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" placeholder="Company Location" required />
              </div>
            </div>

            <div>
              <h3 class="font-bold text-blue-950 mb-5 font-title tracking-widest border-b-2 border-blue-950 inline-block" style="font-size: 20px;">Company Info</h3>
              <div class="mb-4">
                <label for="company" class="block text-blue-950 font-bold mb-2 font-title">Company Name</label>
                <input type="text" v-model="form.company.name" id="company" name="company" class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" placeholder="Company Name" />
              </div>

              <div class="mb-4">
                <label for="company_description" class="block text-blue-950 font-bold mb-2 font-title">Company Description</label>
                <textarea id="company_description" v-model="form.company.description" name="company_description" class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" rows="4" placeholder="What does your company do?"></textarea>
              </div>

              <div class="mb-4">
                <label for="contact_email" class="block text-blue-950 font-bold mb-2">Contact Email</label>
                <input type="email" v-model="form.company.contactEmail" id="contact_email" name="contact_email" class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" placeholder="Email address for applicants" required />
              </div>

              <div class="mb-4">
                <label for="contact_phone" class="block text-blue-950 font-bold mb-2 font-title">Contact Phone</label>
                <input type="tel" v-model="form.company.contactPhone" id="contact_phone" name="contact_phone" class="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-transparent" placeholder="Optional phone for applicants" />
              </div>
            </div>
          </div>

          <div class="mt-6 mb-5 text-center">
            <button class="bg-btncolor hover:bg-blue-950 text-blue-950 hover:text-white font-bold py-2 px-4 rounded-full tracking-widest focus:outline-none focus:shadow-outline transition-all duration-300" type="submit">
              UPDATE JOB
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import router from '@/router';
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();
const jobId = route.params.id;

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  }
});

const state = reactive({
  job: {},
  isLoading: true,
});

const toast = useToast();

const handelsubmit = async () => {
  const updatedJob = {
    title: form.title,
    type: form.type,
    description: form.description,
    salary: form.salary,
    location: form.location,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone
    },
  };

  try {
    const response = await axios.put(`/api/jobs/${jobId}`, updatedJob);
    toast.success('Job updated successfully');
    router.push(`/jobs/${response.data.id}`);
  } catch (error) {
    console.error('Error updating job', error);
    toast.error('Error updating job');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    state.job = response.data;
    form.type = state.job.type;
    form.title = state.job.title;
    form.description = state.job.description;
    form.salary = state.job.salary;
    form.location = state.job.location;
    form.company.name = state.job.company.name;
    form.company.description = state.job.company.description;
    form.company.contactEmail = state.job.company.contactEmail;
    form.company.contactPhone = state.job.company.contactPhone;
  } catch (error) {
    console.error('Error fetching job', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<style scoped>
.bg-white {
  background-color: #fff;
}
</style>
