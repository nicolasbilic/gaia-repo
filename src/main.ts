import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, type RouteMeta } from 'vue-router'
import UserHome from './pages/UserHome.vue';
import UserLegal from './pages/UserLegal.vue';
import NotFound from './components/Layout/NotFound.vue';

interface Meta extends RouteMeta {
  title?: string;
  description?: string;
}

const routes = [
  { path: '/', component: UserHome, meta: { title: 'Gaia - Official Site', description: 'Explore the unique world of Gaia, a graphic designer specializing in AI-generated fantasy characters. Dive into imaginary realms where every illustration tells a story.' } as Meta },
  { path: '/legal', component: UserLegal, meta: { title: 'Legal - Gaia', description: 'Find the legal notices - Gaia' } as Meta },
  { path: '/404', component: NotFound, meta: { title: 'Page Not Found - Gaia', description: 'Oops! The page you are looking for doesn’t exist.' } as Meta },
  { path: '/:catchAll(.*)', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Retourner à la position sauvegardée (par exemple, après un retour en arrière)
      return savedPosition;
    } else if (to.hash) {
      // Si une ancre est spécifiée dans l'URL (hash), défiler vers l'élément correspondant
      return {
        el: to.hash, // Cible l'élément correspondant à l'ID du hash
        behavior: 'smooth', // Défilement fluide
      };
    } else {
      // Si aucune position sauvegardée ou ancre, défiler en haut à gauche
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const meta = to.meta as Meta;
  document.title = meta.title || "Gaia - Official Site";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', meta.description || "Explore the unique world of Gaia, a graphic designer specializing in AI-generated fantasy characters. Dive into imaginary realms where every illustration tells a story.");
  }
  next();
})

createApp(App)
  .use(router)
  .mount('#app')