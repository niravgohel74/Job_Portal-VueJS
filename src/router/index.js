import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFound from '@/views/NotFound.vue';
import JobView from '@/views/JobView.vue';
import AddJob from '@/views/AddJob.vue';
import EditJob from '@/views/EditJob.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Home - JobSphere',
            },
            favicon: '/favicon-home.ico'
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            meta: {
                title: 'Jobs - JobSphere',
            },
            favicon: '/favicon-jobs.ico'
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView,
            meta: {
                title: 'Job - JobSphere',
            },
            favicon: '/favicon-job.ico'
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJob,
            meta: {
                title: 'Add Job - JobSphere',
            },
            favicon: '/favicon-add-job.ico'
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJob,
            meta: {
                title: 'Edit Job - JobSphere',
            },
            favicon: '/favicon-edit-job.ico'
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export default router;