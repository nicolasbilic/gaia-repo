import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Minuteur from './components/Minuteur.vue'

const routes = [
  { path: '/', component: App },
  { path: '/minuteur', component: Minuteur }
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

createApp(App)
  .use(router)
  .mount('#app')
