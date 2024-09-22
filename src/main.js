import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue'
import App from './App.vue'

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Job Portal';
  
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = to.meta.favicon || '/favicon.ico';
    }
  
    next();
  });

const app = createApp(App)

app.use(router);
app.use(Toast);
app.mount('#app');
library.add(faArrowLeft)
.component('font-awesome-icon', FontAwesomeIcon)

