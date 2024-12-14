import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, type RouteMeta } from 'vue-router'
import UserHome from './pages/UserHome.vue';
import UserLegal from './pages/UserLegal.vue';
import NotFound from './components/NotFound.vue';
import Minuteur from './components/Minuteur.vue'

interface Meta extends RouteMeta {
  title?: string;
  description?: string;
}

const routes = [
  { path: '/', component: UserHome, meta: { title: 'Gaia - Site officiel', description: 'Gaia, je suis graphiste depuis 2010 et vends mes créations dans le monde entier.' } as Meta },
  { path: '/mentions-legales', component: UserLegal, meta: { title: 'Mentions légales - Gaia', description: 'Retrouvez les mentions légales - Gaia' } as Meta },
  { path: '/minuteur', component: Minuteur },
  { path: '/404', component: NotFound, meta: { title: 'Page non trouvée - Gaia', description: 'La page que vous recherchez n\'existe pas.' } as Meta },
  { path: '/:catchAll(.*)', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  const meta = to.meta as Meta;
  document.title = meta.title || "Gaia - Site officiel";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', meta.description || "Gaia, je suis graphiste depuis 2010 et vends mes créations dans le monde entier.");
  }
  next();
})

createApp(App)
  .use(router)
  .mount('#app')