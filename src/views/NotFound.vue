<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <div class="flex-grow">
            <section class="text-center flex flex-col justify-center items-center mt-20">
                <i class="pi pi-exclamation-triangle text-9xl text-yellow-500 mb-5"></i>
                <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
                <p class="text-xl mb-5">This page does not exist</p>
                <RouterLink to="/"
                    class="bg-btncolor text-blue-950 rounded-full tracking-widest font-bold px-10 py-2 hover:bg-blue-950 hover:text-white transition-all duration-300">
                    Go Back
                </RouterLink>
            </section>
        </div>
    </div>
</template>