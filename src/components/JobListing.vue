<script setup>
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    job: Object
});

const showDetails = ref(false);

const toggleDetails = () => {
    showDetails.value = !showDetails.value
}

const truncatedDescription = computed(() => {
    let description = props.job.description;
    if (!showDetails.value) {
        description = description.substring(0, 80) + '...';
    }
    return description;
})

</script>

<template>
    <!-- Job Listing 1 -->
    <div class="bg-white rounded-xl shadow-xl relative">
        <div class="p-10">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>

            <div class="mb-5">
                <div>
                    {{ truncatedDescription }}
                </div>
                <button @click="toggleDetails" class="text-orange-600 hover:text-blue-950 mb-5">
                    {{ showDetails ? 'Show Less' : 'Show More' }}
                </button>
            </div>

            <h3 class="text-orange-600 mb-2">{{ job.salary }} / Year</h3>

            <div class="border border-gray-100 mb-10"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-600 mb-3">
                    <i class="pi pi-map-marker text-orange-600  "></i>
                    {{ job.location }}
                </div>
                <RouterLink :to="`/jobs/${job.id}`"
                    class="bg-orange-600 text-white text-sm rounded-full tracking-widest hover:bg-white hover:text-orange-600 border-2 border-orange-600 transition-all duration-300 px-6 py-2" >
                    Read More
                </RouterLink>
            </div>
        </div>
    </div>
</template>